import React from 'react';
import { Smartphone, Activity, AlertTriangle, MessageSquare, CreditCard, Lock, Globe, Mail } from 'lucide-react';

const templates = {
    financial: [
        {
            type: "UPI Fraud",
            icon: <Smartphone className="h-6 w-6" />,
            texts: [
                "You receive a payment request for ₹2000 on {app} from '{name}' with a note: 'Cashback Award! Enter PIN to receive'.",
                "A caller claims to be from {bank} and asks you to approve a notification on {app} to 'reverse an erroneous charge'.",
                "You scan a QR code at a {location} to pay, but it asks you to enter your UPI PIN to 'receive' money."
            ],
            textsHi: [
                "आपको {app} पर '{name}' से ₹2000 का भुगतान अनुरोध प्राप्त होता है: 'कैशबैक अवार्ड! प्राप्त करने के लिए पिन दर्ज करें'।",
                "{bank} से होने का दावा करने वाला एक कॉलर आपको 'गलत शुल्क वापस करने' के लिए {app} पर एक अधिसूचना को मंजूरी देने के लिए कहता है।",
                "आप भुगतान करने के लिए {location} पर एक क्यूआर कोड स्कैन करते हैं, लेकिन यह आपसे पैसे 'प्राप्त' करने के लिए अपना यूपीआई पिन दर्ज करने के लिए कहता है।"
            ],
            options: [
                { text: "Enter PIN to receive the money.", textHi: "पैसे प्राप्त करने के लिए पिन दर्ज करें।", score: 0 },
                { text: "Approve the request to fix the error.", textHi: "त्रुटि को ठीक करने के लिए अनुरोध को स्वीकार करें।", score: 0 },
                { text: "Reject. You never enter a PIN to receive money.", textHi: "अस्वीकार करें। आप पैसे प्राप्त करने के लिए कभी भी पिन दर्ज नहीं करते हैं।", score: 20 }
            ]
        },
        {
            type: "Credit Card Scam",
            icon: <CreditCard className="h-6 w-6" />,
            texts: [
                "Your card ending in {digits} is flagged for specific transactions. Click {link} to verify within 24 hours.",
                "Msg: KYC Pending for {bank} Credit Card. usage will be blocked. Update immediately at {link}.",
                "Call from 'Bank Support': 'We noticed unusual activity. Please share the OTP sent to your phone to block the card.'"
            ],
            textsHi: [
                "{digits} में समाप्त होने वाला आपका कार्ड विशिष्ट लेनदेन के लिए फ़्लैग किया गया है। 24 घंटे के भीतर सत्यापित करने के लिए {link} पर क्लिक करें।",
                "संदेश: {bank} क्रेडिट कार्ड के लिए केवाईसी लंबित है। उपयोग अवरुद्ध कर दिया जाएगा। {link} पर तुरंत अपडेट करें।",
                "'बैंक सहायता' से कॉल: 'हमने असामान्य गतिविधि देखी। कार्ड को ब्लॉक करने के लिए कृपया अपने फोन पर भेजे गए ओटीपी को साझा करें।'"
            ],
            options: [
                { text: "Click the link and update KYC.", textHi: "लिंक पर क्लिक करें और केवाईसी अपडेट करें।", score: 0 },
                { text: "Share the OTP to block the card.", textHi: "कार्ड को ब्लॉक करने के लिए ओटीपी साझा करें।", score: 0 },
                { text: "Hang up/Ignore. Contact bank via official app.", textHi: "फ़ोन काट दें/अनदेखा करें। आधिकारिक ऐप के माध्यम से बैंक से संपर्क करें।", score: 20 }
            ]
        }
    ],
    cyber: [
        {
            type: "Phishing Attack",
            icon: <Mail className="h-6 w-6" />,
            texts: [
                "Email from '{service} Support': 'Your account will be deleted due to inactivity. Login at {link}' to save it.",
                "Email: 'Invoice #{digits} for Norton AntiVirus - ₹{amount} deducted. Call {phone} to dispute.'",
                "SMS: 'Delivery attempt failed for your {item}. Update address at {link} with a small fee.'"
            ],
            textsHi: [
                "'{service} सहायता' से ईमेल: 'निष्क्रियता के कारण आपका खाता हटा दिया जाएगा। इसे बचाने के लिए {link} पर लॉगिन करें'।",
                "ईमेल: 'नॉर्टन एंटीवायरस के लिए चालान #{digits} - ₹{amount} काट लिया गया। विवाद के लिए {phone} पर कॉल करें।'",
                "एसएमएस: 'आपके {item} के लिए वितरण प्रयास विफल रहा। छोटे शुल्क के साथ {link} पर पता अपडेट करें।'"
            ],
            options: [
                { text: "Click link to login and save account.", textHi: "लॉगिन करने और खाता बचाने के लिए लिंक पर क्लिक करें।", score: 0 },
                { text: "Call the number to dispute the charge.", textHi: "शुल्क पर विवाद करने के लिए नंबर पर कॉल करें।", score: 0 },
                { text: "Check sender email address and ignore.", textHi: "प्रेषक ईमेल पते की जाँच करें और अनदेखा करें।", score: 20 }
            ]
        },
        {
            type: "Ransomware / Malware",
            icon: <Lock className="h-6 w-6" />,
            texts: [
                "You download a 'Free Pro Version' of {software}. It asks to differ antivirus during installation.",
                "A pop-up on a streaming site says: 'Your PC is infected! Click here to scan and remove viruses'.",
                "An email attachment names 'Invoice_{digits}.exe' arrives from an unknown sender."
            ],
            textsHi: [
                "आप {software} का 'फ्री प्रो वर्जन' डाउनलोड करते हैं। यह इंस्टॉलेशन के दौरान एंटीवायरस को बंद करने के लिए कहता है।",
                "एक स्ट्रीमिंग साइट पर एक पॉप-अप कहता है: 'आपका पीसी संक्रमित है! वायरस को स्कैन करने और हटाने के लिए यहां क्लिक करें'।",
                "एक अज्ञात प्रेषक से 'Invoice_{digits}.exe' नाम का एक ईमेल अटैचमेंट आता है।"
            ],
            options: [
                { text: "Disable antivirus and install.", textHi: "एंटीवायरस को अक्षम करें और इंस्टॉल करें।", score: 0 },
                { text: "Click the pop-up to scan.", textHi: "स्कैन करने के लिए पॉप-अप पर क्लिक करें।", score: 0 },
                { text: "Delete immediately. Do not open.", textHi: "तुरंत हटा दें। इसे न खोलें।", score: 20 }
            ]
        }
    ],
    social: [
        {
            type: "Deepfake / AI Impersonation",
            icon: <Activity className="h-6 w-6" />,
            texts: [
                "Video call from a 'friend' in distress asking for money. The voice sounds slightly robotic and video lags.",
                "An ad features {celeb} endorsing an investment app that doubles money in 2 days. Lip movements look odd.",
                "Audio message from 'Boss': 'Urgent, I need you to transfer funds to this vendor account now. I am in a meeting.'"
            ],
            textsHi: [
                "पैसे मांगने वाले संकट में एक 'दोस्त' से वीडियो कॉल। आवाज थोड़ी रोबोटिक लगती है और वीडियो लैग करता है।",
                "एक विज्ञापन में {celeb} को एक निवेश ऐप का समर्थन करते हुए दिखाया गया है जो 2 दिनों में पैसा दोगुना कर देता है। होंठों की हरकतें अजीब लगती हैं।",
                "'बॉस' से ऑडियो संदेश: 'जरूरी है, मुझे चाहिए कि आप अभी इस वेंडर खाते में फंड ट्रांसफर करें। मैं एक मीटिंग में हूं।'"
            ],
            options: [
                { text: "Transfer the money immediately.", textHi: "तुरंत पैसे ट्रांसफर करें।", score: 0 },
                { text: "Believe the endorsement and invest.", textHi: "समर्थन पर विश्वास करें और निवेश करें।", score: 0 },
                { text: "Verify by calling them back on a known number.", textHi: "उन्हें ज्ञात नंबर पर वापस कॉल करके सत्यापित करें।", score: 20 }
            ]
        },
        {
            type: "Romance / Pig Butchering",
            icon: <MessageSquare className="h-6 w-6" />,
            texts: [
                "A match on a dating app suggests moving to WhatsApp immediately and talks about high crypto returns.",
                "Wrong number text: 'Is this Dr. {name}?' ... proceeds to strike up a friendly conversation about investments.",
                "Online friend you've never met asks for money for a 'medical emergency' or 'flight ticket' to visit you."
            ],
            textsHi: [
                "डेटिंग ऐप पर एक मैच तुरंत व्हाट्सएप पर जाने का सुझाव देता है और उच्च क्रिप्टो रिटर्न के बारे में बात करता है।",
                "गलत नंबर टेक्स्ट: 'क्या यह डॉ. {name} है?' ... निवेश के बारे में दोस्ताना बातचीत शुरू करता है।",
                "ऑनलाइन दोस्त जिससे आप कभी नहीं मिले हैं, 'मेडिकल इमरजेंसी' या आपसे मिलने के लिए 'फ्लाइट टिकट' के लिए पैसे मांगता है।"
            ],
            options: [
                { text: "Invest in their crypto platform.", textHi: "उनके क्रिप्टो प्लेटफॉर्म में निवेश करें।", score: 0 },
                { text: "Send money to help them.", textHi: "उनकी मदद के लिए पैसे भेजें।", score: 0 },
                { text: "Block and report. It's a structured scam.", textHi: "ब्लॉक करें और रिपोर्ट करें। यह एक सुनियोजित घोटाला है।", score: 20 }
            ]
        }
    ]
};

const variables = {
    app: ["GPay", "PhonePe", "Paytm", "BHIM UPI", "WhatsApp Pay"],
    bank: ["HDFC", "SBI", "ICICI", "Axis", "PNB", "BoB"],
    name: ["Rahul", "Priya", "Amit", "Sneha", "Suresh_Admin", "Kavita"],
    link: ["bit.ly/secure-kyc", "bank-update-aadhar.com", "sbi-rewards-portal.net"],
    digits: ["8832", "1190", "4451", "9002"],
    service: ["Netflix", "Amazon", "Flipkart", "Myntra", "JioCinema", "Hotstar"],
    amount: ["4999", "12500", "450", "99000"],
    phone: ["+91-98XXX...", "1800-FAKE..."],
    item: ["iPhone 15", "Laptop", "Amazon Gift Card", "Myntra Voucher"],
    software: ["Photoshop", "Premiere Pro", "GTA V", "Office 365"],
    celeb: ["Ratan Tata", "Mukesh Ambani", "Virat Kohli", "Narendra Modi", "MS Dhoni"],
    location: ["Kirana Store", "Petrol Pump", "Metro Station", "Tea Stall"]
};
// Hindi translations for variables where applicable
const variablesHi = {
    ...variables,
    item: ["आईफोन 15", "लैपटॉप", "अमेज़न गिफ्ट कार्ड", "मिंत्रा वाउचर"],
    location: ["किराना दुकान", "पेट्रोल पंप", "मेट्रो स्टेशन", "चाय की दुकान"],
    celeb: ["रतन टाटा", "मुकेश अंबानी", "विराट कोहली", "नरेंद्र मोदी", "एमएस धोनी"]
};

// Fill template handles Hindi if isHindi is true
const fillTemplate = (text, isHindi = false) => {
    return text.replace(/{(\w+)}/g, (_, key) => {
        const source = isHindi ? (variablesHi[key] || variables[key]) : variables[key];
        return source ? source[Math.floor(Math.random() * source.length)] : `{${key}}`;
    });
};

export const generateScenarios = (count = 10) => {
    try {
        const allTemplates = [
            ...(templates.financial || []),
            ...(templates.cyber || []),
            ...(templates.social || [])
        ];

        if (allTemplates.length === 0) {
            console.error("No templates available");
            return [];
        }

        const generated = [];

        for (let i = 0; i < count; i++) {
            // Pick a random template category
            const template = allTemplates[Math.floor(Math.random() * allTemplates.length)];

            if (!template || !template.texts || template.texts.length === 0) continue;

            // Pick a random index for text to keep English and Hindi synced
            const textIndex = Math.floor(Math.random() * template.texts.length);

            const rawText = template.texts[textIndex];
            const rawTextHi = (template.textsHi && template.textsHi[textIndex]) ? template.textsHi[textIndex] : rawText;

            // Fill variables for both
            const situation = fillTemplate(rawText || "", false);
            const situationHi = fillTemplate(rawTextHi || "", true);

            generated.push({
                id: i,
                type: template.type,
                icon: template.icon,
                situation: situation,
                situationHi: situationHi,
                options: (template.options || []).map(opt => ({
                    ...opt,
                    text: fillTemplate(opt.text, false),
                    textHi: fillTemplate(opt.textHi, true)
                })).sort(() => 0.5 - Math.random()) // Shuffle options
            });
        }

        return generated;
    } catch (e) {
        console.error("Error generating scenarios:", e);
        return [];
    }
};
