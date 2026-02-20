import React, { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
    const [state, setState] = useState(() => {
        const saved = localStorage.getItem('humansSchoolState');
        let parsedState = saved ? JSON.parse(saved) : null;

        // Default initial state
        const initialState = {
            assessmentCompleted: false,
            assessmentScores: {
                emotional: 0,
                ethical: 0,
                digital: 0,
                criticalThinking: 0,
                appliedResponse: 0
            },
            modulesCompleted: false,
            watchedVideos: [], // Array of module IDs
            simulationCompleted: false,
            simulationScore: 0,
            uniqueCode: null,
            generatedDate: null
        };

        if (parsedState) {
            // Migration/Fix for stale state:
            // If modulesCompleted is true but watchedVideos is missing or incomplete, reset modules to false
            const videos = parsedState.watchedVideos || [];
            const allWatched = ['emotional', 'digital', 'ethical', 'crisis'].every(id => videos.includes(id));

            if (parsedState.modulesCompleted && !allWatched) {
                console.warn("Detected stale modulesCompleted state. Resetting to enforce video watching.");
                parsedState.modulesCompleted = false;
                parsedState.watchedVideos = videos;
            }
            // Merge with initial to ensure new keys exist
            return { ...initialState, ...parsedState };
        }

        return initialState;
    });

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem('humansSchoolState', JSON.stringify(state));
    }, [state]);

    const submitAssessment = (scores) => {
        setState(prev => ({
            ...prev,
            assessmentCompleted: true,
            assessmentScores: scores
        }));
    };

    const markVideoWatched = (videoId) => {
        setState(prev => {
            const newWatched = prev.watchedVideos.includes(videoId)
                ? prev.watchedVideos
                : [...prev.watchedVideos, videoId];

            // Check if all 4 modules are watched (ids: emotional, digital, ethical, crisis)
            const allWatched = ['emotional', 'digital', 'ethical', 'crisis'].every(id =>
                newWatched.includes(id)
            );

            return {
                ...prev,
                watchedVideos: newWatched,
                modulesCompleted: allWatched
            };
        });
    };

    const completeModules = () => {
        // Deprecated manual completion, keeping for fallback but logic is now auto in markVideoWatched
        setState(prev => ({ ...prev, modulesCompleted: true }));
    };

    const submitSimulation = (score) => {
        setState(prev => ({
            ...prev,
            simulationCompleted: true,
            simulationScore: score
        }));
    };

    const generateCertificate = () => {
        if (!state.uniqueCode) {
            const code = 'HS-' + Math.random().toString(36).substr(2, 9).toUpperCase();
            setState(prev => ({
                ...prev,
                uniqueCode: code,
                generatedDate: new Date().toISOString()
            }));
        }
    };

    const resetProgress = () => {
        setState({
            assessmentCompleted: false,
            assessmentScores: {
                emotional: 0,
                ethical: 0,
                digital: 0,
                criticalThinking: 0,
                appliedResponse: 0
            },
            modulesCompleted: false,
            simulationCompleted: false,
            simulationScore: 0,
            uniqueCode: null,
            generatedDate: null
        });
    };

    const canAccessCertificate = () => {
        // Strict check:
        // 1. Assessment must be marked complete
        // 2. ALL 4 modules must be in watchedVideos
        // 3. Simulation must be marked complete

        const requiredVideos = ['emotional', 'digital', 'ethical', 'crisis'];
        const hasWatchedAll = requiredVideos.every(id => state.watchedVideos.includes(id));

        const access = state.assessmentCompleted && hasWatchedAll && state.simulationCompleted;
        console.log("Strict Access Check:", { access, state, hasWatchedAll });
        return access;
    };

    return (
        <ProgressContext.Provider value={{
            state,
            submitAssessment,
            completeModules,
            markVideoWatched,
            submitSimulation,
            generateCertificate,
            resetProgress,
            canAccessCertificate
        }}>
            {children}
        </ProgressContext.Provider>
    );
};
