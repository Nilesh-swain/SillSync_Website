// import React, { createContext, useContext, useState, useEffect } from 'react';

// export interface Language {
//   code: string;
//   name: string;
//   nativeName: string;
// }

// export const SUPPORTED_LANGUAGES: Language[] = [
//   { code: 'en', name: 'English', nativeName: 'English' },
//   { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
//   { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
//   { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
//   { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
//   { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
//   { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
//   { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
// ];

// interface LanguageContextType {
//   currentLanguage: Language;
//   setLanguage: (language: Language) => void;
//   t: (key: string) => string;
// }

// const translations = {
//   en: {
//     'nav.home': 'Home',
//     'nav.dashboard': 'Dashboard',
//     'nav.quiz': 'Quiz',
//     'nav.roadmap': 'Roadmap',
//     'nav.vlogs': 'Vlogs',
//     'nav.recommendations': 'Recommendations',
//     'nav.profile': 'Profile',
//     'nav.login': 'Login',
//     'nav.signup': 'Sign Up',
//     'hero.title': 'Find Your Perfect',
//     'hero.subtitle': 'Internship with AI',
//     'hero.description': 'SkillSync uses advanced AI to match students with ideal internships from the PM Internship Scheme. Get personalized recommendations, skill assessments, and career guidance.',
//     'hero.takeAssessment': 'Take AI Assessment',
//     'hero.viewDashboard': 'View Dashboard',
//     'features.title': 'Why Choose SkillSync?',
//     'features.subtitle': 'Powered by cutting-edge AI and integrated with government schemes for authentic opportunities.',
//     'cta.title': 'Ready to Discover Your',
//     'cta.subtitle': 'Dream Internship?',
//     'cta.description': 'Join thousands of students who have found their perfect internship through SkillSync\'s AI-powered platform.',
//     'cta.startAssessment': 'Start AI Assessment',
//     'cta.viewRoadmaps': 'View Roadmaps',
//     'login.title': 'Welcome Back',
//     'login.description': 'Sign in to your SkillSync account to continue your journey',
//     'login.email': 'Email',
//     'login.password': 'Password',
//     'login.forgotPassword': 'Forgot password?',
//     'login.signIn': 'Sign In',
//     'login.signInWithGoogle': 'Sign in with Google',
//     'login.noAccount': 'Don\'t have an account?',
//     'signup.title': 'Create Account',
//     'signup.description': 'Join SkillSync and start your journey to your dream internship',
//     'signup.fullName': 'Full Name',
//     'signup.confirmPassword': 'Confirm Password',
//     'signup.acceptTerms': 'I agree to the Terms of Service and Privacy Policy',
//     'signup.createAccount': 'Create Account',
//     'signup.signUpWithGoogle': 'Sign up with Google',
//     'signup.hasAccount': 'Already have an account?'
//   },
//   hi: {
//     'nav.home': 'होम',
//     'nav.dashboard': 'डैशबोर्ड',
//     'nav.quiz': 'क्विज़',
//     'nav.roadmap': 'रोडमैप',
//     'nav.vlogs': 'व्लॉग्स',
//     'nav.recommendations': 'सुझाव',
//     'nav.profile': 'प्रोफ़ाइल',
//     'nav.login': 'लॉगिन',
//     'nav.signup': 'साइन अप',
//     'hero.title': 'अपना परफेक्ट',
//     'hero.subtitle': 'AI के साथ इंटर्नशिप खोजें',
//     'hero.description': 'SkillSync उन्नत AI का उपयोग करके छात्रों को PM इंटर्नशिप योजना से आदर्श इंटर्नशिप से मैच करता है। व्यक्तिगत सिफारिशें, कौशल मूल्यांकन, और करियर मार्गदर्शन प्राप्त करें।',
//     'hero.takeAssessment': 'AI मूल्यांकन लें',
//     'hero.viewDashboard': 'डैशबोर्ड देखें',
//     'features.title': 'SkillSync क्यों चुनें?',
//     'features.subtitle': 'अत्याधुनिक AI द्वारा संचालित और प्रामाणिक अवसरों के लिए सरकारी योजनाओं के साथ एकीकृत।',
//     'cta.title': 'अपना खोजने के लिए तैयार हैं',
//     'cta.subtitle': 'सपनों की इंटर्नशिप?',
//     'cta.description': 'हजारों छात्रों से जुड़ें जिन्होंने SkillSync के AI-संचालित प्लेटफॉर्म के माध्यम से अपनी परफेक्ट इंटर्नशिप पाई है।',
//     'cta.startAssessment': 'AI मूल्यांकन शुरू करें',
//     'cta.viewRoadmaps': 'रोडमैप देखें',
//     'login.title': 'वापस स्वागत है',
//     'login.description': 'अपनी यात्रा जारी रखने के लिए अपने SkillSync खाते में साइन इन करें',
//     'login.email': 'ईमेल',
//     'login.password': 'पासवर्ड',
//     'login.forgotPassword': 'पासवर्ड भूल गए?',
//     'login.signIn': 'साइन इन',
//     'login.signInWithGoogle': 'Google के साथ साइन इन करें',
//     'login.noAccount': 'खाता नहीं है?',
//     'signup.title': 'खाता बनाएं',
//     'signup.description': 'SkillSync में शामिल हों और अपनी सपनों की इंटर्नशिप की यात्रा शुरू करें',
//     'signup.fullName': 'पूरा नाम',
//     'signup.confirmPassword': 'पासवर्ड की पुष्टि करें',
//     'signup.acceptTerms': 'मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूं',
//     'signup.createAccount': 'खाता बनाएं',
//     'signup.signUpWithGoogle': 'Google के साथ साइन अप करें',
//     'signup.hasAccount': 'पहले से खाता है?'
//   },
//   bn: {
//     'nav.home': 'হোম',
//     'nav.dashboard': 'ড্যাশবোর্ড',
//     'nav.quiz': 'কুইজ',
//     'nav.roadmap': 'রোডম্যাপ',
//     'nav.vlogs': 'ভ্লগ',
//     'nav.recommendations': 'সুপারিশ',
//     'nav.profile': 'প্রোফাইল',
//     'nav.login': 'লগইন',
//     'nav.signup': 'সাইন আপ',
//     'hero.title': 'আপনার নিখুঁত',
//     'hero.subtitle': 'AI দিয়ে ইন্টার্নশিপ খুঁজুন',
//     'login.title': 'ফিরে স্বাগতম',
//     'signup.title': 'অ্যাকাউন্ট তৈরি করুন'
//   },
//   te: {
//     'nav.home': 'హోమ్',
//     'nav.dashboard': 'డాష్‌బోర్డ్',
//     'nav.quiz': 'క్విజ్',
//     'nav.roadmap': 'రోడ్‌మ్యాప్',
//     'nav.vlogs': 'వ్లాగ్స్',
//     'nav.recommendations': 'సిఫార్సులు',
//     'nav.profile': 'ప్రొఫైల్',
//     'nav.login': 'లాగిన్',
//     'nav.signup': 'సైన్ అప్',
//     'hero.title': 'మీ పరిపూర్ణమైన',
//     'hero.subtitle': 'AI తో ఇంటర్న్‌షిప్ కనుగొనండి',
//     'login.title': 'తిరిగి స్వాగతం',
//     'signup.title': 'ఖాతా సృష్టించండి'
//   },
//   ta: {
//     'nav.home': 'முகப்பு',
//     'nav.dashboard': 'டாஷ்போர்டு',
//     'nav.quiz': 'வினாடி வினா',
//     'nav.roadmap': 'சாலைப்படம்',
//     'nav.vlogs': 'வ்லாக்ஸ்',
//     'nav.recommendations': 'பரிந்துரைகள்',
//     'nav.profile': 'சுயவிவரம்',
//     'nav.login': 'உள்நுழைவு',
//     'nav.signup': 'பதிவு செய்யுங்கள்',
//     'hero.title': 'உங்கள் சரியான',
//     'hero.subtitle': 'AI உடன் பயிற்சி கண்டறியுங்கள்',
//     'login.title': 'மீண்டும் வரவேற்கிறோம்',
//     'signup.title': 'கணக்கை உருவாக்குங்கள்'
//   },
//   mr: {
//     'nav.home': 'होम',
//     'nav.dashboard': 'डॅशबोर्ड',
//     'nav.quiz': 'क्विझ',
//     'nav.roadmap': 'रोडमॅप',
//     'nav.vlogs': 'व्हलॉग्स',
//     'nav.recommendations': 'शिफारसी',
//     'nav.profile': 'प्रोफाइल',
//     'nav.login': 'लॉगिन',
//     'nav.signup': 'साइन अप',
//     'hero.title': 'तुमची परिपूर्ण',
//     'hero.subtitle': 'AI सह इंटर्नशिप शोधा',
//     'login.title': 'परत स्वागत आहे',
//     'signup.title': 'खाते तयार करा'
//   },
//   gu: {
//     'nav.home': 'હોમ',
//     'nav.dashboard': 'ડેશબોર્ડ',
//     'nav.quiz': 'ક્વિઝ',
//     'nav.roadmap': 'રોડમેપ',
//     'nav.vlogs': 'વ્લોગ્સ',
//     'nav.recommendations': 'ભલામણો',
//     'nav.profile': 'પ્રોફાઇલ',
//     'nav.login': 'લોગિન',
//     'nav.signup': 'સાઇન અપ',
//     'hero.title': 'તમારું સંપૂર્ણ',
//     'hero.subtitle': 'AI સાથે ઇન્ટર્નશિપ શોધો',
//     'login.title': 'પાછા સ્વાગત છે',
//     'signup.title': 'ખાતું બનાવો'
//   },
//   kn: {
//     'nav.home': 'ಮುಖಪುಟ',
//     'nav.dashboard': 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
//     'nav.quiz': 'ಪ್ರಶ್ನೋತ್ತರ',
//     'nav.roadmap': 'ರೋಡ್‌ಮ್ಯಾಪ್',
//     'nav.vlogs': 'ವ್ಲಾಗ್‌ಗಳು',
//     'nav.recommendations': 'ಸಲಹೆಗಳು',
//     'nav.profile': 'ಪ್ರೊಫೈಲ್',
//     'nav.login': 'ಲಾಗಿನ್',
//     'nav.signup': 'ಸೈನ್ ಅಪ್',
//     'hero.title': 'ನಿಮ್ಮ ಪರಿಪೂರ್ಣ',
//     'hero.subtitle': 'AI ಯೊಂದಿಗೆ ಇಂಟರ್ನ್‌ಶಿಪ್ ಹುಡುಕಿ',
//     'login.title': 'ಹಿಂದಿರುಗಿ ಸ್ವಾಗತ',
//     'signup.title': 'ಖಾತೆ ರಚಿಸಿ'
//   }
// };

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [currentLanguage, setCurrentLanguage] = useState<Language>(SUPPORTED_LANGUAGES[0]);

//   useEffect(() => {
//     const savedLanguage = localStorage.getItem('skillsync-language');
//     if (savedLanguage) {
//       const found = SUPPORTED_LANGUAGES.find(lang => lang.code === savedLanguage);
//       if (found) {
//         setCurrentLanguage(found);
//       }
//     }
//   }, []);

//   const setLanguage = (language: Language) => {
//     setCurrentLanguage(language);
//     localStorage.setItem('skillsync-language', language.code);
//   };

//   const t = (key: string): string => {
//     const languageTranslations = translations[currentLanguage.code as keyof typeof translations];
//     return languageTranslations?.[key as keyof typeof languageTranslations] || key;
//   };

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (context === undefined) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };




import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

// ✨ Added Odia (or) to SUPPORTED_LANGUAGES
export const SUPPORTED_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡିଆ' }, // Odia added
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// ✨ Add Odia translations here
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',
    'nav.quiz': 'Quiz',
    'nav.roadmap': 'Roadmap',
    'nav.vlogs': 'Vlogs',
    'nav.recommendations': 'Recommendations',
    'nav.profile': 'Profile',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    // ...rest of English translations
  },
  hi: {
    'nav.home': 'होम',
    'nav.dashboard': 'डैशबोर्ड',
    'nav.quiz': 'क्विज़',
    'nav.roadmap': 'रोडमैप',
    'nav.vlogs': 'व्लॉग्स',
    'nav.recommendations': 'सुझाव',
    'nav.profile': 'प्रोफ़ाइल',
    'nav.login': 'लॉगिन',
    'nav.signup': 'साइन अप',
    // ...rest of Hindi translations
  },
  // ...existing translations for bn, te, ta, mr, gu, kn
  or: {
    'nav.home': 'ହୋମ୍',
    'nav.dashboard': 'ଡ୍ୟାଶବୋର୍ଡ',
    'nav.quiz': 'କ୍ୱିଜ୍',
    'nav.roadmap': 'ରୋଡମ୍ୟାପ୍',
    'nav.vlogs': 'ଭ୍ଲଗ୍',
    'nav.recommendations': 'ସୁପାରିସ୍',
    'nav.profile': 'ପ୍ରୋଫାଇଲ୍',
    'nav.login': 'ଲଗଇନ୍',
    'nav.signup': 'ସାଇନ୍ ଅପ୍',
    'hero.title': 'ଆପଣଙ୍କର ସPerfect',
    'hero.subtitle': 'AI ସହିତ ଇଣ୍ଟର୍ନଶିପ୍ ଖୋଜନ୍ତୁ',
    'hero.description': 'SkillSync ଏଡଭାନ୍ସ AI ବ୍ୟବହାର କରି ଛାତ୍ରମାନଙ୍କୁ PM ଇଣ୍ଟର୍ନଶିପ୍ ସ୍କିମ୍ ରୁ ସର୍ବୋତ୍ତମ ଇଣ୍ଟର୍ନଶିପ୍ ସହିତ ମେଲ କରେ। ବ୍ୟକ୍ତିଗତ ସୁପାରିସ୍, କୌଶଳ ମୂଲ୍ୟାଙ୍କନ ଏବଂ କ୍ୟାରିଅର୍ ମାର୍ଗଦର୍ଶନ ପାଇଁ।',
    'hero.takeAssessment': 'AI ମୂଲ୍ୟାଙ୍କନ ନିଅନ୍ତୁ',
    'hero.viewDashboard': 'ଡ୍ୟାଶବୋର୍ଡ ଦେଖନ୍ତୁ',
    'features.title': 'କାହିଁକି SkillSync ଚୟନ କରିବେ?',
    'features.subtitle': 'ଆଧୁନିକ AI ଦ୍ଵାରା ସଚଳିତ ଏବଂ ସରକାରୀ ଯୋଜନା ସହିତ ସମନ୍ୱିତ ପ୍ରମାଣିକ ସୁଯୋଗ।',
    'cta.title': 'ଆପଣଙ୍କର ସ୍ୱପ୍ନ ଇଣ୍ଟର୍ନଶିପ୍ ପାଇଁ ପ୍ରସ୍ତୁତ?',
    'cta.subtitle': 'ଆରମ୍ଭ କରନ୍ତୁ AI ମୂଲ୍ୟାଙ୍କନ',
    'cta.description': 'ହଜାର ଛାତ୍ରମାନେ SkillSync ର AI ପାୱାର୍ଡ ପ୍ଲାଟଫର୍ମ ମାଧ୍ୟମରେ ସମ୍ପୂର୍ଣ୍ଣ ଇଣ୍ଟର୍ନଶିପ୍ ମିଳିଛି।',
    'cta.startAssessment': 'AI ମୂଲ୍ୟାଙ୍କନ ଆରମ୍ଭ କରନ୍ତୁ',
    'cta.viewRoadmaps': 'ରୋଡମ୍ୟାପ୍ ଦେଖନ୍ତୁ',
    'login.title': 'ପୁନର୍ବାର ସ୍ୱାଗତ',
    'login.description': 'ଆପଣଙ୍କର SkillSync ଖାତାରେ ସାଇନ୍ ଇନ୍ କରନ୍ତୁ',
    'login.email': 'ଇମେଲ୍',
    'login.password': 'ପାସୱାର୍ଡ',
    'login.forgotPassword': 'ପାସୱାର୍ଡ ଭୁଲିଗଲେ?',
    'login.signIn': 'ସାଇନ୍ ଇନ୍',
    'login.signInWithGoogle': 'ଗୁଗୁଲ୍ ସହିତ ସାଇନ୍ ଇନ୍ କରନ୍ତୁ',
    'login.noAccount': 'ଖାତା ନାହିଁ?',
    'signup.title': 'ଖାତା ତିଆରି କରନ୍ତୁ',
    'signup.description': 'SkillSync ସହିତ ଯୋଗ ଦିଅନ୍ତୁ ଏବଂ ଆପଣଙ୍କର ସ୍ୱପ୍ନ ଇଣ୍ଟର୍ନଶିପ୍ ଆରମ୍ଭ କରନ୍ତୁ',
    'signup.fullName': 'ପୂର୍ଣ୍ଣ ନାମ',
    'signup.confirmPassword': 'ପାସୱାର୍ଡ ପୁନର୍ବାର ଲେଖନ୍ତୁ',
    'signup.acceptTerms': 'ମୁଁ ସର୍ଭିସ୍ ଟର୍ମ୍ସ ଏବଂ ପ୍ରାଇଭେସି ନୀତି ସହିତ ସହମତ',
    'signup.createAccount': 'ଖାତା ତିଆରି କରନ୍ତୁ',
    'signup.signUpWithGoogle': 'ଗୁଗୁଲ୍ ସହିତ ସାଇନ୍ ଅପ୍ କରନ୍ତୁ',
    'signup.hasAccount': 'ଏହାର ଖାତା ଅଛି?'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(SUPPORTED_LANGUAGES[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('skillsync-language');
    if (savedLanguage) {
      const found = SUPPORTED_LANGUAGES.find(lang => lang.code === savedLanguage);
      if (found) {
        setCurrentLanguage(found);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('skillsync-language', language.code);
  };

  const t = (key: string): string => {
    const languageTranslations = translations[currentLanguage.code as keyof typeof translations];
    return languageTranslations?.[key as keyof typeof languageTranslations] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
