// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Home: 'Home',
      sponsorsTitle: 'Our Amazing Sponsors',
      Sponser: 'Sponser',
      Info: 'Info',
      blogsTitle: 'Blogs',
      Setting: 'Setting',
      Security: 'Security',
      Devices: 'Devices',
      Language: 'Language',
      AskQuestion: 'AskQuestion',
      Passengers:'Number of Passengers',
      TankwaFAQ: 'TankwaFAQ',
      InviteFriends: 'InviteFriends',
      condition: 'Condition',
      temperature: 'Temp',
      wind: 'Wind',
      FirstName :'First Name',
      Email:'Email',
      Departure:'Departure Location',
      Phone:'Phone Number',
      Preferred:'Preferred Date',
      Promocode:'Promocode',
      Ferry:'Ferry',
      Cargo:'Cargo Ship',
      Transport:'Type of Transport',
      LastName:'Last Name',
      PrivateYacht:'Private Yacht',
      SelectType:'Select Type',
      MiddleName:'Middle Name',
      Chapa:"Chapa",
      BookingInformation:"Booking Information",
      USD:'USD',
      Birr:'Birr',
      EUR:'EUR',
      DestinationLocation:'Destination Location',
      destinationTitle: 'Destination',
      CreditCard:'Stripe',
      PayPal:'PayPal',
      PaymentMethod:'Payment Method',
      GBP:"GBP",
      BookNow:'Book Now',
      Currency:'Currency',
      humidity: 'Humidity',
      weatherConditions: {
        clearSky: 'clear sky',
        cloudy: 'cloudy',
        rainy: 'rainy',
        snowy: 'snowy',
        thunderstorm: 'thunderstorm',
      },
      Settings: 'Settings',
      BookBoatTransport:'Book Boat Transport',
      privacyTitle: 'Your Data is Safe & Secure',
      privacyIntro: 'We prioritize your privacy. Your data is protected with advanced security measures, ensuring that your personal information remains confidential and safe.',
      privacyProtect: '1. We Protect Your Privacy',
      privacyProtectDesc: 'We use encryption and secure protocols to ensure your data remains confidential. No unauthorized parties have access to your personal information.',
      privacyNoTracking: '2. No Unwanted Tracking',
      privacyNoTrackingDesc: 'Unlike many platforms, we do not sell or share your data with third parties. Your browsing habits and personal details remain yours.',
      privacySecureTransactions: '3. Secure Transactions',
      privacySecureTransactionsDesc: 'All transactions and communications are safeguarded with top-level encryption, ensuring your information stays protected.',
      privacyStayInControl: '4. Stay in Control',
      privacyStayInControlTips: [
        'Use strong passwords and enable two-factor authentication.',
        'Regularly review your security settings.',
        'Be cautious with the information you share online.',
      ],
      privacyFooter: 'Your Privacy Matters. Your Data is Secure.',
    },
  },
  am: {
    translation: {
      Home: 'ቤት',
      Sponser: 'ስፖንሰር',
      Info: 'መረጃ',
      Setting: 'ማቀናበሪያ',
      Settings: 'ማቀናበሪያ',
      Security: 'ደህንነት',
      Devices: 'መሣሪያዎች',
      LastName:'የአባት ስም',
      BookNow:'አሁን ይያዙ',
      Transport:'የትራንስፖርት አይነት',
      Phone:'ስልክ ቁጥር',
      Language: 'ቋንቋ',
      SelectType:'አይነት ይምረጡ',
      Preferred:'የተመረጠ ቀን',
      blogsTitle: 'ብሎጎች',
      PayPal:'ፔይፓል',
      Currency:'ምንዛሪ',
      USD:"የአሜሪካ ዶላር",
      Birr:'ብር',
      EUR:"ዩሮ",
      GBP:'የብሪታንያ ፓውንድ ',
      Chapa:'ጫፓ',
      Email:'ኢሜይል',
      Departure:'የመነሻ ቦታ',
      Ferry:'ፌሪ',
      Cargo:'ጭነት መርከብ',
      PaymentMethod:'የክፍያ ዘዴ',
      CreditCard:'Stripe',
      PrivateYacht:'ግል የጥሩርባ መርከብ',
      FirstName:'"የመጀመሪያ ስም',
      MiddleName:'መሀከለኛ ስም',
      Destination:'የመድረሻ ቦታ',
      BookingInformation : "የቦኪንግ መረጃ",
      Passengers:'የተሳፋሪዎች ቁጥር',
      BookBoatTransport:'መርከብ ማጓጓዣ ይዘዙ',
      AskQuestion: 'ጥያቄ ጠይቅ',
      sponsorsTitle: 'የእኛ አስደናቂ ስፖንሰሮች',
      destinationTitle: 'መድረሻ',
      TankwaFAQ: 'ታንኳ ጥያቄዎች',
      DestinationLocation: 'የመድረሻ ቦታ',    
      Promocode:'ፕሮሞ ኮድ',
      InviteFriends: 'ጓደኞች ጋብዝ',
      privacyTitle: 'የእርስዎ ውሂብ ደህንነቱ የተጠበቀ ነው',
      privacyIntro: 'የእርስዎን ግላዊነት እናስባለን። ውሂብዎ የሚጠበቅበት የላቀ የደህንነት እርምጃዎች ተዘጋጅተው የግል መረጃዎ ሚስጥራዊ እና ደህንነቱ የተጠበቀ ሆኖ ይቆያል።',
      privacyProtect: '1. ግላዊነትዎን እንጠብቃለን',
      privacyProtectDesc: 'ውሂብዎ ሚስጥራዊ ሆኖ �መቆየቱን ለማረጋገጥ ኢንክሪፕሽን እና ደህንነቱ የተጠበቀ ፕሮቶኮሎች እንጠቀማለን። ምንም ያልተፈቀደ ወገን ወደ የግል መረጃዎ መዳረሻ የለውም።',
      privacyNoTracking: '2. ያልተፈለገ መከታተያ የለም',
      privacyNoTrackingDesc: 'ከብዙ መድረኮች በተለየ ውሂብዎን ለሶስተኛ ወገኖች አንሸጥም እና አንጋራም። የእርስዎ የአሰሳ ልማዶች እና የግል ዝርዝሮች የእርስዎ ናቸው።',
      privacySecureTransactions: '3. ደህንነቱ የተጠበቀ ግብይቶች',
      privacySecureTransactionsDesc: 'ሁሉም ግብይቶች እና የግንኙነት መልዕክቶች ከፍተኛ ደረጃ ያለው ኢንክሪፕሽን የተጠበቀ ሆኖ ይቆያል።',
      privacyStayInControl: '4. ቁጥጥር ውስጥ ይሁኑ',
      privacyStayInControlTips: [
        'ጠንካራ የይለፍ ቃል ይጠቀሙ እና ሁለት-ደረጃ �ማረጋገጫ ያንቁ።',
        'የደህንነት ማቀናበሪያዎን በየጊዜው ይገምግሙ።',
        'በመስመር �ይም በሚያካፍሉት መረጃ ይጠንቀቁ።',
      ],
      privacyFooter: 'የእርስዎ ግላዊነት አስፈላጊ ነው። ውሂብዎ ደህንነቱ የተጠበቀ ነው።',
      condition: 'ሁኔታ',
      temperature: 'ሙቀት',
      wind: 'ነፋስ',
      humidity: 'እርጥበት',
      weatherConditions: {
        clearSky: 'ንፁህ ሰማይ',
        cloudy: 'ደመናማ',
        rainy: 'ዝናባማ',
        snowy: 'በረዶማ',
        thunderstorm: 'ነጎድጓድ',
      },
    },
  },
  // Add other languages as needed
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;