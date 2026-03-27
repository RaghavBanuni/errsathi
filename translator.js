const translations = {
    Tamil: {
        errorLabel: "பிழை வகை",
        causeLabel: "காரணம்",
        fixLabel: "தீர்வு",
        errors: {
            SyntaxError: {
                cause: "உங்கள் குறியீட்டில் எழுத்துப் பிழை உள்ளது — Python அதை புரிந்துகொள்ள முடியவில்லை.",
                fix: "குறிப்பிட்ட வரியில் மிஸ்ஸிங் கோலன், அடைப்புக்குறி அல்லது தவறான இண்டென்டேஷன் சரிபார்க்கவும்."
            },
            IndentationError: {
                cause: "உங்கள் குறியீடு சரியாக இண்டென்ட் செய்யப்படவில்லை.",
                fix: "if/for/def தொகுதிகளுக்குள் உள்ள வரிகள் 4 spaces இண்டென்ட் செய்யப்பட்டிருக்க வேண்டும்."
            },
            NameError: {
                cause: "நீங்கள் இன்னும் வரையறுக்காத ஒரு மாறியை அல்லது செயல்பாட்டை பயன்படுத்துகிறீர்கள்.",
                fix: "மாறியின் பெயர் சரியாக உள்ளதா என சரிபார்க்கவும், அல்லது அதை முன்பே வரையறுக்கவும்."
            },
            TypeError: {
                cause: "நீங்கள் தவறான தரவு வகையில் ஒரு செயல்பாட்டை மேற்கொள்கிறீர்கள்.",
                fix: "சரம் மற்றும் எண்களை கலக்கவில்லை என்பதை உறுதிப்படுத்தவும்."
            },
            IndexError: {
                cause: "பட்டியலில் இல்லாத ஒரு இடத்தை அணுக முயற்சிக்கிறீர்கள்.",
                fix: "உங்கள் index எண் பட்டியலின் நீளத்திற்குள் உள்ளதா என சரிபார்க்கவும்."
            },
            KeyError: {
                cause: "அகராதியில் இல்லாத ஒரு key-ஐ அணுக முயற்சிக்கிறீர்கள்.",
                fix: "key சரியாக எழுதப்பட்டுள்ளதா மற்றும் அகராதியில் உள்ளதா என சரிபார்க்கவும்."
            },
            ImportError: {
                cause: "நீங்கள் import செய்ய முயற்சிக்கும் module-ஐ Python கண்டுபிடிக்க முடியவில்லை.",
                fix: "module பெயர் சரியாக உள்ளதா என சரிபார்க்கவும், அல்லது: pip install <module-name> இயக்கவும்."
            },
            ModuleNotFoundError: {
                cause: "நீங்கள் import செய்ய முயற்சிக்கும் module நிறுவப்படவில்லை.",
                fix: "Terminal-இல் இதை இயக்கவும்: pip install <module-name>"
            },
            AttributeError: {
                cause: "இந்த object-இல் இல்லாத ஒரு method அல்லது property-ஐ பயன்படுத்த முயற்சிக்கிறீர்கள்.",
                fix: "attribute பெயர் சரியாக உள்ளதா மற்றும் object அதை support செய்கிறதா என சரிபார்க்கவும்."
            },
            ValueError: {
                cause: "ஒரு function சரியான தரவு வகையை பெற்றது, ஆனால் தவறான மதிப்பை பெற்றது.",
                fix: "நீங்கள் அனுப்பும் மதிப்பு காலியாக உள்ளதா அல்லது தவறான வடிவத்தில் உள்ளதா என சரிபார்க்கவும்."
            },
            ZeroDivisionError: {
                cause: "உங்கள் குறியீடு ஒரு எண்ணை பூஜ்யத்தால் வகுக்க முயற்சிக்கிறது.",
                fix: "வகுப்பதற்கு முன் வகுத்தி பூஜ்யம் இல்லை என்பதை உறுதிப்படுத்தவும்."
            },
            FileNotFoundError: {
                cause: "நீங்கள் திறக்க முயற்சிக்கும் கோப்பை Python கண்டுபிடிக்க முடியவில்லை.",
                fix: "கோப்பு பாதை சரியாக உள்ளதா மற்றும் கோப்பு சரியான இடத்தில் உள்ளதா என சரிபார்க்கவும்."
            },
            RecursionError: {
                cause: "உங்கள் function தன்னை நிறுத்தாமல் பலமுறை அழைக்கிறது.",
                fix: "உங்கள் recursive function-ல் recursion-ஐ நிறுத்தும் base case உள்ளதா என சரிபார்க்கவும்."
            },
            UnknownError: {
                cause: "உங்கள் குறியீட்டில் எதிர்பாராத பிழை ஏற்பட்டது.",
                fix: "பிழை செய்தியை கவனமாக படிக்கவும் மற்றும் குறிப்பிட்ட வரி எண்ணை சரிபார்க்கவும்."
            }
        }
    },
    Hindi: {
        errorLabel: "त्रुटि का प्रकार",
        causeLabel: "कारण",
        fixLabel: "समाधान",
        errors: {
            SyntaxError: {
                cause: "आपके कोड में लिखावट की गलती है — Python इसे समझ नहीं पा रहा।",
                fix: "बताई गई लाइन में missing colon, bracket या गलत indentation देखें।"
            },
            IndentationError: {
                cause: "आपका कोड सही तरीके से indent नहीं किया गया है।",
                fix: "if/for/def blocks के अंदर की lines को 4 spaces से indent करें।"
            },
            NameError: {
                cause: "आप एक ऐसे variable या function का उपयोग कर रहे हैं जो अभी define नहीं हुआ।",
                fix: "variable का नाम जांचें, या सुनिश्चित करें कि उसे पहले define किया गया हो।"
            },
            TypeError: {
                cause: "आप गलत data type पर कोई operation कर रहे हैं।",
                fix: "देखें कि string और number को मिलाया तो नहीं जा रहा, या कोई non-function को call तो नहीं किया।"
            },
            IndexError: {
                cause: "आप list में ऐसी position access करने की कोशिश कर रहे हैं जो exist नहीं करती।",
                fix: "देखें कि आपका index number list की length के अंदर है।"
            },
            KeyError: {
                cause: "आप dictionary में ऐसी key access करने की कोशिश कर रहे हैं जो exist नहीं करती।",
                fix: "key की spelling जांचें और सुनिश्चित करें कि वो dictionary में है।"
            },
            ImportError: {
                cause: "Python उस module को नहीं ढूंढ पाया जिसे आप import करने की कोशिश कर रहे हैं।",
                fix: "module का नाम जांचें, या इसे install करें: pip install <module-name>"
            },
            ModuleNotFoundError: {
                cause: "जिस module को आप import करना चाहते हैं वो installed नहीं है।",
                fix: "Terminal में यह चलाएं: pip install <module-name>"
            },
            AttributeError: {
                cause: "आप किसी ऐसे method या property को use करने की कोशिश कर रहे हैं जो इस object में नहीं है।",
                fix: "attribute की spelling जांचें और देखें कि object उसे support करता है।"
            },
            ValueError: {
                cause: "एक function को सही data type मिला, लेकिन गलत value मिली।",
                fix: "देखें कि आप जो value pass कर रहे हैं वो empty, out of range या गलत format में तो नहीं है।"
            },
            ZeroDivisionError: {
                cause: "आपका कोड किसी number को zero से divide करने की कोशिश कर रहा है।",
                fix: "divide करने से पहले check करें कि denominator zero तो नहीं है।"
            },
            FileNotFoundError: {
                cause: "Python उस file को नहीं ढूंढ पाया जिसे आप open करने की कोशिश कर रहे हैं।",
                fix: "file का path जांचें और सुनिश्चित करें कि file सही जगह पर है।"
            },
            RecursionError: {
                cause: "आपका function बिना रुके खुद को बार-बार call कर रहा है।",
                fix: "देखें कि आपके recursive function में एक base case है जो recursion को रोके।"
            },
            UnknownError: {
                cause: "आपके कोड में एक अनपेक्षित error आई है।",
                fix: "error message को ध्यान से पढ़ें और बताई गई line number को जांचें।"
            }
        }
    },
    Telugu: {
        errorLabel: "లోపం రకం",
        causeLabel: "కారణం",
        fixLabel: "పరిష్కారం",
        errors: {
            SyntaxError: {
                cause: "మీ కోడ్‌లో రాయడంలో తప్పు ఉంది — Python దానిని అర్థం చేసుకోలేకపోతోంది.",
                fix: "పేర్కొన్న లైన్‌లో మిస్సింగ్ కోలన్, బ్రాకెట్ లేదా తప్పు ఇండెంటేషన్ తనిఖీ చేయండి."
            },
            IndentationError: {
                cause: "మీ కోడ్ సరిగ్గా ఇండెంట్ చేయబడలేదు.",
                fix: "if/for/def బ్లాక్‌లలోని లైన్లు 4 స్పేస్‌లతో ఇండెంట్ చేయబడాలి."
            },
            NameError: {
                cause: "మీరు ఇంకా నిర్వచించని వేరియబుల్ లేదా ఫంక్షన్‌ను ఉపయోగిస్తున్నారు.",
                fix: "వేరియబుల్ పేరు సరిగ్గా ఉందా అని తనిఖీ చేయండి, లేదా దానిని ముందే నిర్వచించండి."
            },
            TypeError: {
                cause: "మీరు తప్పు డేటా రకంపై ఆపరేషన్ చేస్తున్నారు.",
                fix: "స్ట్రింగ్ మరియు నంబర్‌లను కలపడం లేదు అని నిర్ధారించుకోండి."
            },
            IndexError: {
                cause: "లిస్ట్‌లో లేని స్థానాన్ని యాక్సెస్ చేయడానికి ప్రయత్నిస్తున్నారు.",
                fix: "మీ ఇండెక్స్ నంబర్ లిస్ట్ పొడవులో ఉందా అని తనిఖీ చేయండి."
            },
            KeyError: {
                cause: "డిక్షనరీలో లేని కీని యాక్సెస్ చేయడానికి ప్రయత్నిస్తున్నారు.",
                fix: "కీ సరిగ్గా స్పెల్ చేయబడిందా మరియు డిక్షనరీలో ఉందా అని తనిఖీ చేయండి."
            },
            ImportError: {
                cause: "మీరు ఇంపోర్ట్ చేయడానికి ప్రయత్నిస్తున్న మాడ్యూల్‌ను Python కనుగొనలేకపోయింది.",
                fix: "మాడ్యూల్ పేరు సరిగ్గా ఉందా తనిఖీ చేయండి, లేదా: pip install <module-name> అమలు చేయండి."
            },
            ModuleNotFoundError: {
                cause: "మీరు ఇంపోర్ట్ చేయడానికి ప్రయత్నిస్తున్న మాడ్యూల్ ఇన్‌స్టాల్ చేయబడలేదు.",
                fix: "టెర్మినల్‌లో ఇది అమలు చేయండి: pip install <module-name>"
            },
            AttributeError: {
                cause: "ఈ ఆబ్జెక్ట్‌లో లేని మెథడ్ లేదా ప్రాపర్టీని ఉపయోగించడానికి ప్రయత్నిస్తున్నారు.",
                fix: "అట్రిబ్యూట్ పేరు సరిగ్గా ఉందా మరియు ఆబ్జెక్ట్ దానిని సపోర్ట్ చేస్తుందా అని తనిఖీ చేయండి."
            },
            ValueError: {
                cause: "ఒక ఫంక్షన్‌కు సరైన డేటా రకం వచ్చింది, కానీ తప్పు విలువ వచ్చింది.",
                fix: "మీరు పంపుతున్న విలువ ఖాళీగా ఉందా లేదా తప్పు ఫార్మాట్‌లో ఉందా అని తనిఖీ చేయండి."
            },
            ZeroDivisionError: {
                cause: "మీ కోడ్ ఒక సంఖ్యను సున్నాతో భాగించడానికి ప్రయత్నిస్తోంది.",
                fix: "భాగించే ముందు భాజకం సున్నా కాదు అని నిర్ధారించుకోండి."
            },
            FileNotFoundError: {
                cause: "మీరు తెరవడానికి ప్రయత్నిస్తున్న ఫైల్‌ను Python కనుగొనలేకపోయింది.",
                fix: "ఫైల్ పాత్ సరిగ్గా ఉందా మరియు ఫైల్ సరైన స్థానంలో ఉందా అని తనిఖీ చేయండి."
            },
            RecursionError: {
                cause: "మీ ఫంక్షన్ ఆగకుండా తనకు తాను పదే పదే కాల్ చేసుకుంటోంది.",
                fix: "మీ రికర్సివ్ ఫంక్షన్‌లో రికర్షన్‌ను ఆపే బేస్ కేస్ ఉందా అని తనిఖీ చేయండి."
            },
            UnknownError: {
                cause: "మీ కోడ్‌లో ఊహించని లోపం సంభవించింది.",
                fix: "లోపం సందేశాన్ని జాగ్రత్తగా చదవండి మరియు పేర్కొన్న లైన్ నంబర్‌ను తనిఖీ చేయండి."
            }
        }
    }
};

function translate(classified, language) {
    const lang = translations[language] || translations['Tamil'];
    const entry = lang.errors[classified.type] || lang.errors['UnknownError'];
    return {
        type: classified.type,
        errorLabel: lang.errorLabel,
        causeLabel: lang.causeLabel,
        fixLabel: lang.fixLabel,
        cause: entry.cause,
        fix: entry.fix
    };
}

module.exports = { translate };