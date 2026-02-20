import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-900 text-white p-8 font-mono">
                    <h1 className="text-3xl text-red-500 font-bold mb-4">Something went wrong.</h1>
                    <div className="bg-black p-6 rounded border border-gray-700 overflow-auto">
                        <p className="text-xl mb-4 text-red-300">{this.state.error && this.state.error.toString()}</p>
                        <pre className="text-sm text-gray-500 whitespace-pre-wrap">
                            {this.state.errorInfo && this.state.errorInfo.componentStack}
                        </pre>
                    </div>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-8 px-6 py-3 bg-red-600 rounded hover:bg-red-700 font-bold"
                    >
                        Reload Page
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="mt-8 ml-4 px-6 py-3 bg-gray-700 rounded hover:bg-gray-600 font-bold"
                    >
                        Go Home
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
