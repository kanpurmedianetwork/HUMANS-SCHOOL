// src/data/assessmentData.js

const templates = {
    emotional: [
        {
            category: "Emotional",
            texts: [
                "You receive direct criticism from {boss} regarding the latest {project} in front of your peers. What is your internal response?",
                "During a critical review of the {project}, {boss} points out a significant oversight in your work. How do you process this?",
                "A key stakeholder expresses disappointment with your contribution to the {project} during a team meeting. What is your immediate reaction?"
            ],
            textsHi: [
                "आपको अपने साथियों के सामने नवीनतम {project} के संबंध में {boss} से सीधी आलोचना प्राप्त होती है। आपकी आंतरिक प्रतिक्रिया क्या है?",
                "{project} की एक महत्वपूर्ण समीक्षा के दौरान, {boss} आपके काम में एक महत्वपूर्ण चूक की ओर इशारा करते हैं। आप इसे कैसे संसाधित करते हैं?",
                "एक टीम बैठक के दौरान {project} में आपके योगदान पर एक प्रमुख हितधारक निराशा व्यक्त करता है। आपकी तत्काल प्रतिक्रिया क्या है?"
            ],
            options: [
                { text: "Immediately defend your actions to preserve your professional reputation.", textHi: "अपनी पेशेवर प्रतिष्ठा बनाए रखने के लिए तुरंत अपने कार्यों का बचाव करें।", score: { emotional: 0 } },
                { text: "Internalize the feedback negatively and withdraw from the discussion.", textHi: "प्रतिक्रिया को नकारात्मक रूप से लें और चर्चा से हट जाएं।", score: { emotional: 5 } },
                { text: "Acknowledge the feedback professionally and request a private follow-up.", textHi: "पेशेवर रूप से प्रतिक्रिया स्वीकार करें और एक निजी अनुवर्ती (follow-up) का अनुरोध करें।", score: { emotional: 10 } }
            ]
        },
        {
            category: "Emotional",
            texts: [
                "{colleague} has been consistently missing deadlines on the {project}, adding unexpected weight to your workload. How do you address this?",
                "You notice {colleague} is struggling to keep up with their deliverables for the upcoming {project}, affecting the timeline. What do you do?",
                "The overall progress of {project} is stalling because {colleague} isn't fulfilling their responsibilities. How do you handle it?"
            ],
            textsHi: [
                "{colleague} लगातार {project} की समय सीमा (deadlines) चूक रहा है, जिससे आपके कार्यभार पर अप्रत्याशित बोझ पड़ रहा है। आप इसे कैसे संबोधित करते हैं?",
                "आप देखते हैं कि {colleague} आगामी {project} के लिए अपने डिलिवरेबल्स के साथ संघर्ष कर रहा है, जिससे समयरेखा (timeline) प्रभावित हो रही है। आप क्या करते हैं?",
                "{project} की समग्र प्रगति रुक रही है क्योंकि {colleague} अपनी जिम्मेदारियों को पूरा नहीं कर रहा है। आप इसे कैसे संभालते हैं?"
            ],
            options: [
                { text: "Escalate the issue to management immediately without discussing it with them.", textHi: "उनके साथ चर्चा किए बिना तुरंत प्रबंधन को इस मुद्दे को उठाएं।", score: { emotional: 0 } },
                { text: "Compensate by completing their tasks to ensure the project succeeds, avoiding confrontation.", textHi: "टकराव से बचने के लिए, परियोजना की सफलता सुनिश्चित करने के लिए उनके कार्यों को पूरा करके क्षतिपूर्ति करें।", score: { emotional: 2 } },
                { text: "Arrange a private, constructive conversation to understand their challenges and offer support.", textHi: "उनकी चुनौतियों को समझने और समर्थन देने के लिए एक निजी, रचनात्मक बातचीत की व्यवस्था करें।", score: { emotional: 10 } }
            ]
        }
    ],
    ethical: [
        {
            category: "Ethical",
            texts: [
                "You discover a security vulnerability in {company}'s software that could compromise user data. It hasn't been publicly disclosed.",
                "While reviewing code for {company}, you find a loophole that bypasses data protection protocols. No one else has noticed.",
                "You realize that the new integration with {company} inadvertently exposes sensitive client information. What is your first step?"
            ],
            textsHi: [
                "आपको {company} के सॉफ़्टवेयर में एक सुरक्षा भेद्यता (vulnerability) का पता चलता है जो उपयोगकर्ता डेटा से समझौता कर सकती है। इसका सार्वजनिक रूप से खुलासा नहीं किया गया है।",
                "{company} के कोड की समीक्षा करते समय, आपको एक खामी मिलती है जो डेटा सुरक्षा प्रोटोकॉल को बायपास करती है। किसी और ने ध्यान नहीं दिया है।",
                "आपको एहसास होता है कि {company} के साथ नया एकीकरण अनजाने में संवेदनशील ग्राहक जानकारी को उजागर करता है। आपका पहला कदम क्या है?"
            ],
            options: [
                { text: "Attempt to quietly capitalize on the vulnerability for personal gain.", textHi: "व्यक्तिगत लाभ के लिए भेद्यता का चुपचाप फायदा उठाने का प्रयास करें।", score: { ethical: 0 } },
                { text: "Document the flaw but wait for someone else to raise the issue.", textHi: "खामी का दस्तावेजीकरण करें लेकिन किसी और के इस मुद्दे को उठाने की प्रतीक्षा करें।", score: { ethical: 2 } },
                { text: "Immediately report the finding to the appropriate security or compliance team.", textHi: "उचित सुरक्षा या अनुपालन टीम को तुरंत खोज की रिपोर्ट करें।", score: { ethical: 10 } }
            ]
        },
        {
            category: "Ethical",
            texts: [
                "You realize you accidentally billed {client} an incorrect amount, significantly undercharging them by {amount}.",
                "After sending an invoice, you notice you missed adding a {amount} charge for {client}'s recent project. What do you do?",
                "An accounting error in your favor means {client} was billed {amount} less than the agreed contract. How do you proceed?"
            ],
            textsHi: [
                "आपको एहसास होता है कि आपने गलती से {client} को गलत राशि का बिल दे दिया है, और उनसे {amount} कम शुल्क लिया है।",
                "चालान (invoice) भेजने के बाद, आप देखते हैं कि आप {client} के हालिया प्रोजेक्ट के लिए {amount} का शुल्क जोड़ना भूल गए हैं। आप क्या करते हैं?",
                "आपके पक्ष में एक लेखांकन त्रुटि का अर्थ है कि {client} को सहमत अनुबंध से {amount} कम बिल किया गया था। आप कैसे आगे बढ़ते हैं?"
            ],
            options: [
                { text: "Conceal the error, assuming it is the client's responsibility to verify the invoice.", textHi: "त्रुटि को छुपाएं, यह मानते हुए कि चालान सत्यापित करना ग्राहक की जिम्मेदारी है।", score: { ethical: 0 } },
                { text: "Delay action to see if the client identifies the discrepancy themselves.", textHi: "यह देखने के लिए कार्रवाई में देरी करें कि क्या ग्राहक विसंगति को स्वयं पहचानता है।", score: { ethical: 2 } },
                { text: "Proactively inform the client of the error and promptly issue a corrected invoice.", textHi: "ग्राहक को त्रुटि के बारे में सक्रिय रूप से सूचित करें और तुरंत एक सही चालान जारी करें।", score: { ethical: 10 } }
            ]
        }
    ],
    digital: [
        {
            category: "Digital",
            texts: [
                "A connection sends you a generic message with a link saying 'Is this you in this video?' regarding a {subject} event.",
                "You receive an urgent DM on a professional network containing a suspicious link related to your {subject} presentation.",
                "Someone in your network shares a file called 'Confidential_{subject}_Report.url' without context."
            ],
            textsHi: [
                "एक संपर्क आपको एक {subject} घटना के संबंध में 'क्या इस वीडियो में आप हैं?' कहने वाला एक लिंक के साथ एक सामान्य संदेश भेजता है।",
                "आपको एक पेशेवर नेटवर्क पर आपकी {subject} प्रस्तुति से संबंधित एक संदिग्ध लिंक वाला एक तत्काल डीएम (DM) प्राप्त होता है।",
                "आपके नेटवर्क में कोई व्यक्ति बिना संदर्भ के 'Confidential_{subject}_Report.url' नामक फ़ाइल साझा करता है।"
            ],
            options: [
                { text: "Click the link immediately to investigate the contents out of curiosity.", textHi: "जिज्ञासावश सामग्री की जांच करने के लिए लिंक पर तुरंत क्लिक करें।", score: { digital: 0 } },
                { text: "Reply asking for clarification without thoroughly verifying their identity.", textHi: "उनकी पहचान को पूरी तरह से सत्यापित किए बिना स्पष्टीकरण मांगते हुए उत्तर दें।", score: { digital: 5 } },
                { text: "Refrain from clicking and independently verify the message through an alternative communication channel.", textHi: "क्लिक करने से बचें और वैकल्पिक संचार चैनल के माध्यम से संदेश को स्वतंत्र रूप से सत्यापित करें।", score: { digital: 10 } }
            ]
        },
        {
            category: "Digital",
            texts: [
                "You need to finalize a critical document, but you're only near a public Wi-Fi network named '{location} Free Web'.",
                "An urgent request requires you to log into a corporate portal, and the only available connection is '{location} Guest'.",
                "While traveling, you must review financial data and only have access to an unsecured '{location} Hotspot'."
            ],
            textsHi: [
                "आपको एक महत्वपूर्ण दस्तावेज़ को अंतिम रूप देने की आवश्यकता है, लेकिन आप केवल '{location} Free Web' नामक सार्वजनिक वाई-फ़ाई नेटवर्क के पास हैं।",
                "एक तत्काल अनुरोध के लिए आपको एक कॉर्पोरेट पोर्टल में लॉग इन करने की आवश्यकता है, और एकमात्र उपलब्ध कनेक्शन '{location} Guest' है।",
                "यात्रा करते समय, आपको वित्तीय डेटा की समीक्षा करनी चाहिए और केवल एक असुरक्षित '{location} Hotspot' तक पहुंच है।"
            ],
            options: [
                { text: "Connect to the public network immediately to meet the urgent deadline.", textHi: "तत्काल समय सीमा को पूरा करने के लिए तुरंत सार्वजनिक नेटवर्क से जुड़ें।", score: { digital: 0 } },
                { text: "Connect, but attempt to limit your activity to non-sensitive tasks.", textHi: "जुड़ें, लेकिन अपनी गतिविधि को गैर-संवेदनशील कार्यों तक सीमित करने का प्रयास करें।", score: { digital: 5 } },
                { text: "Utilize a personal cellular hotspot or a trusted VPN to establish a secure connection.", textHi: "एक सुरक्षित कनेक्शन स्थापित करने के लिए एक व्यक्तिगत सेलुलर हॉटस्पॉट या एक विश्वसनीय वीपीएन का उपयोग करें।", score: { digital: 10 } }
            ]
        }
    ],
    criticalThinking: [
        {
            category: "Critical Thinking",
            texts: [
                "A viral article claims that a new breakthrough in {subject} will render current industry practices obsolete in {duration}.",
                "You come across a sensational headline asserting that recent {subject} policies will increase costs by {percent}.",
                "An unverified report circulates stating a major competitor in {subject} is shutting down operations completely."
            ],
            textsHi: [
                "एक वायरल लेख का दावा है कि {subject} में एक नई सफलता वर्तमान उद्योग प्रथाओं को {duration} में अप्रचलित कर देगी।",
                "आपको एक सनसनीखेज हेडलाइन मिलती है जिसमें कहा गया है कि हालिया {subject} नीतियां लागत में {percent} की वृद्धि करेंगी।",
                "एक असत्यापित रिपोर्ट प्रसारित होती है जिसमें कहा गया है कि {subject} में एक प्रमुख प्रतियोगी पूरी तरह से संचालन बंद कर रहा है।"
            ],
            options: [
                { text: "Immediately share the information with your team to ensure they are prepared.", textHi: "यह सुनिश्चित करने के लिए कि वे तैयार हैं, जानकारी को तुरंत अपनी टीम के साथ साझा करें।", score: { criticalThinking: 0 } },
                { text: "Accept the premise as plausible and begin adjusting your strategy accordingly.", textHi: "आधार को प्रशंसनीय (plausible) के रूप में स्वीकार करें और तदनुसार अपनी रणनीति को समायोजित करना शुरू करें।", score: { criticalThinking: 3 } },
                { text: "Investigate the primary sources, assess the methodology, and verify across reputable platforms.", textHi: "प्राथमिक स्रोतों की जांच करें, कार्यप्रणाली का आकलन करें, और प्रतिष्ठित प्लेटफार्मों पर सत्यापित करें।", score: { criticalThinking: 10 } }
            ]
        },
        {
            category: "Critical Thinking",
            texts: [
                "A widely circulated deepfake video portrays {boss} making highly controversial statements regarding {project}.",
                "An edited audio clip goes viral, seemingly featuring {colleague} disparaging the ongoing {project} effort.",
                "You see a highly manipulated image suggesting {company} is involved in unethical practices related to {subject}."
            ],
            textsHi: [
                "व्यापक रूप से प्रसारित डीपफेक वीडियो में {boss} को {project} के संबंध में अत्यधिक विवादास्पद बयान देते हुए दिखाया गया है।",
                "एक संपादित ऑडियो क्लिप वायरल हो जाती है, जिसमें ऐसा प्रतीत होता है कि {colleague} चल रहे {project} प्रयास का अपमान कर रहा है।",
                "आप एक अत्यधिक हेरफेर की गई छवि देखते हैं जो यह सुझाव देती है कि {company} {subject} से संबंधित अनैतिक प्रथाओं में शामिल है।"
            ],
            options: [
                { text: "Express outrage and share the media to highlight the unacceptable behavior.", textHi: "आक्रोश व्यक्त करें और अस्वीकार्य व्यवहार को उजागर करने के लिए मीडिया को साझा करें।", score: { criticalThinking: 0 } },
                { text: "Assume the content is authentic until an official denial is published.", textHi: "आधिकारिक खंडन प्रकाशित होने तक सामग्री को प्रामाणिक मानें।", score: { criticalThinking: 2 } },
                { text: "Exercise skepticism and cross-reference the claims with verified, official communications.", textHi: "संदेह का प्रयोग करें और सत्यापित, आधिकारिक संचार के साथ दावों का क्रॉस-रेफरेंस करें।", score: { criticalThinking: 10 } }
            ]
        }
    ],
    appliedResponse: [
        {
            category: "Applied Response",
            texts: [
                "You realize a recent transaction you authorized was fraudulent, resulting in a loss of {amount}. What is your immediate protocol?",
                "After transferring {amount} to a new vendor for the {project}, you discover the invoice was spoofed.",
                "You identify an unauthorized charge of {amount} on your corporate account linked to {company}."
            ],
            textsHi: [
                "आपको एहसास होता है कि आपके द्वारा अधिकृत हालिया लेनदेन धोखाधड़ी वाला था, जिसके परिणामस्वरूप {amount} का नुकसान हुआ। आपका तत्काल प्रोटोकॉल क्या है?",
                "{project} के लिए एक नए वेंडर को {amount} स्थानांतरित करने के बाद, आपको पता चलता है कि चालान (invoice) जाली था।",
                "आप {company} से जुड़े अपने कॉर्पोरेट खाते पर {amount} का अनधिकृत शुल्क पहचानते हैं।"
            ],
            options: [
                { text: "Panic and attempt to permanently erase the application or communication logs.", textHi: "घबराएं और एप्लिकेशन या संचार लॉग को स्थायी रूप से मिटाने का प्रयास करें।", score: { appliedResponse: 0 } },
                { text: "Discuss the incident publicly to warn others before securing your accounts.", textHi: "अपने खातों को सुरक्षित करने से पहले दूसरों को चेतावनी देने के लिए सार्वजनिक रूप से घटना पर चर्चा करें।", score: { appliedResponse: 3 } },
                { text: "Immediately freeze compromised accounts, document all evidence, and notify relevant authorities.", textHi: "समझौता किए गए खातों को तुरंत फ्रीज करें, सभी सबूतों का दस्तावेजीकरण करें और संबंधित अधिकारियों को सूचित करें।", score: { appliedResponse: 10 } }
            ]
        },
        {
            category: "Applied Response",
            texts: [
                "You misplace your work device containing sensitive data regarding {project} while commuting.",
                "During a conference regarding {subject}, you realize your corporate laptop is missing.",
                "You inadvertently leave a tablet with access to {client} records in a public {location}."
            ],
            textsHi: [
                "आप यात्रा करते समय {project} के संबंध में संवेदनशील डेटा वाले अपने कार्य उपकरण को खो देते हैं।",
                "{subject} से संबंधित एक सम्मेलन के दौरान, आपको एहसास होता है कि आपका कॉर्पोरेट लैपटॉप गायब है।",
                "आप अनजाने में एक सार्वजनिक {location} में {client} के रिकॉर्ड तक पहुंच के साथ एक टैबलेट छोड़ देते हैं।"
            ],
            options: [
                { text: "Delay reporting the loss, hoping that a good samaritan will return the device.", textHi: "यह उम्मीद करते हुए कि कोई भला व्यक्ति डिवाइस वापस कर देगा, नुकसान की रिपोर्ट करने में देरी करें।", score: { appliedResponse: 0 } },
                { text: "Attempt to purchase a replacement device to obfuscate the loss from management.", textHi: "प्रबंधन से नुकसान को छिपाने के लिए एक प्रतिस्थापन डिवाइस खरीदने का प्रयास करें।", score: { appliedResponse: 0 } },
                { text: "Promptly notify the IT security team to initiate a remote wipe and secure access protocols.", textHi: "दूरस्थ रूप से मिटाने (remote wipe) और पहुंच प्रोटोकॉल सुरक्षित करने के लिए तुरंत आईटी सुरक्षा टीम को सूचित करें।", score: { appliedResponse: 10 } }
            ]
        }
    ]
};

const variables = {
    boss: ["Director Sharma", "Ms. Gupta", "the Project Lead", "the Regional Manager", "VP of Operations"],
    colleague: ["Raj", "Priya", "Amit", "Sneha", "Karan", "Anjali"],
    project: ["Q3 Campaign", "annual report", "client presentation", "system migration", "product launch target"],
    company: ["Infosys", "TCS", "Reliance Jio", "Wipro", "Tech Mahindra", "HCLTech"],
    client: ["Tata Motors", "Mahindra", "Adani Group", "Bajaj Finance", "L&T"],
    duration: ["two days", "less than a week", "the next quarter", "a matter of hours"],
    percent: ["20%", "50%", "15%", "35%", "over 40%"],
    subject: ["artificial intelligence", "data privacy", "financial regulations", "sustainability", "cybersecurity"],
    amount: ["₹5,000", "₹12,000", "₹35,000", "₹1,00,000", "₹50,000", "₹1,50,000"],
    location: ["Airport", "Cafe", "Hotel", "Convention Center"]
};

const variablesHi = {
    ...variables,
    boss: ["निदेशक शर्मा", "सुश्री गुप्ता", "परियोजना प्रमुख", "क्षेत्रीय प्रबंधक", "संचालन उपाध्यक्ष"],
    project: ["Q3 अभियान", "वार्षिक रिपोर्ट", "क्लाइंट प्रस्तुति", "सिस्टम माइग्रेशन", "उत्पाद लॉन्च"],
    duration: ["दो दिन", "एक सप्ताह से कम", "अगली तिमाही", "कुछ घंटों का मामला"],
    subject: ["कृत्रिम बुद्धिमत्ता", "डेटा गोपनीयता", "वित्तीय नियमों", "स्थिरता", "साइबर सुरक्षा"],
    location: ["हवाई अड्डे", "कैफे", "होटल", "सम्मेलन केंद्र"]
};

const fillTemplate = (text, isHindi = false) => {
    return text.replace(/{(\w+)}/g, (_, key) => {
        const source = isHindi ? (variablesHi[key] || variables[key]) : variables[key];
        return source ? source[Math.floor(Math.random() * source.length)] : `{${key}}`;
    });
};

export const generateAssessment = (count = 5) => {
    try {
        const allCategories = ['emotional', 'ethical', 'digital', 'criticalThinking', 'appliedResponse'];
        const generated = [];

        // Ensure we try to get a mix of categories if possible
        for (let i = 0; i < count; i++) {
            const categoryKey = allCategories[i % allCategories.length];
            const categoryTemplates = templates[categoryKey];

            if (!categoryTemplates || categoryTemplates.length === 0) continue;

            const template = categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];
            const textIndex = Math.floor(Math.random() * template.texts.length);

            const rawText = template.texts[textIndex];
            const rawTextHi = (template.textsHi && template.textsHi[textIndex]) ? template.textsHi[textIndex] : rawText;

            generated.push({
                id: i,
                category: template.category,
                question: fillTemplate(rawText, false),
                questionHi: fillTemplate(rawTextHi, true),
                options: template.options.map(opt => ({
                    ...opt,
                    text: fillTemplate(opt.text, false),
                    textHi: fillTemplate(opt.textHi, true)
                })).sort(() => 0.5 - Math.random()) // Shuffle options uniquely for each generated question
            });
        }

        // Shuffle the resulting questions
        return generated.sort(() => 0.5 - Math.random());
    } catch (e) {
        console.error("Error generating assessment:", e);
        return [];
    }
};
