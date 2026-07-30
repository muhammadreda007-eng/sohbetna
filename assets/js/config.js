(function () {
  "use strict";

  window.AppConfig = {
    brand: {
      appName: "SOHBETNA | صٌحبتنا",
      taglineAr: "الصحبة تبدأ من هنا",
      taglineEn: "Voice, video chat, and live rooms",
      shortDescriptionAr: "منصة اجتماعية مستقبلية لغرف الصوت والفيديو والبث المباشر.",
      shortDescriptionEn: "A future social platform for voice rooms, video chat, and live streams.",
      appStatus: "SOON - قريبًا",
      developerName: "سـيـزر إيجينسي"
    },
    theme: {
      primary: "#00a99d",
      accent: "#ff5a6d",
      violet: "#5855ee"
    },
    supabase: {
      url: "https://czxregndvfmvkshrexzf.supabase.co",
      anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6eHJlZ25kdmZtdmtzaHJleHpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3MTY2MzUsImV4cCI6MjEwMDI5MjYzNX0.g6KH5fKtcWrHXTYxPo_ohgMS2uxnR2chDd1pknfVgNc"
    },
    contact: {
      email: "Sohbetna@gmail.com",
      whatsapp: "+201124724749"
    },
    links: {
      googlePlay: "",
      appStore: "",
      huawei: "",
      facebook: "",
      instagram: "",
      tiktok: "",
      youtube: "",
      privacy: "privacy-policy.html",
      terms: "terms.html",
      deleteAccount: "delete-account.html"
    },
    assets: {
      logo: "assets/images/brand/logo.svg",
      favicon: "assets/images/brand/favicon.svg",
      appIcon: "assets/images/brand/app-icon.svg",
      heroMockup: "assets/images/mockups/hero-phone.svg",
      promoVideoPoster: "assets/images/placeholders/video-poster.svg"
    },
    stats: [
      { key: "rooms", labelAr: "لايفات صوتية ومرئية", labelEn: "Voice, video, and live", valueAr: "غرف على مزاجك", valueEn: "Rooms you will love" },
      { key: "platforms", labelAr: "صوت نقي وفيديو HD", labelEn: "Clear audio and HD video", valueAr: "جودة عالية", valueEn: "Clearer quality" },
      { key: "security", labelAr: "عبّر بطريقتك", labelEn: "Express yourself", valueAr: "هدايا وتفاعل", valueEn: "Gifts and reactions" }
    ],
features: [
  {
    icon: "صوت",
    titleAr: "غرف على مزاجك",
    titleEn: "Rooms for every mood",
    textAr: "قعدة هادية، نقاش، ضحك أو سهر لحد الصبح.",
    textEn: "Chill, talk, laugh, or stay up together."},
  {
    icon: "Live",
    titleAr: "افتح لايفك",
    titleEn: "Go live",
    textAr: "شارك لحظتك بالصوت أو الفيديو والناس تدخل معاك.",
    textEn: "Share the moment by voice or video."},
  {
    icon: "HD",
    titleAr: "صورة وصوت واضح",
    titleEn: "Clear audio and video",
    textAr: "تجربة مريحة تخليك مركز في الكلام والناس.",
    textEn: "A clear experience that keeps you in the moment."},
  {
    icon: "Mic",
    titleAr: "المايك دورك",
    titleEn: "Take the mic",
    textAr: "اطلع واتكلم، أو خليك مستمع لحد ما تحب تشارك.",
    textEn: "Speak up or listen until you are ready."},
  {
    icon: "Gift",
    titleAr: "هدايا تقول اللي جواك",
    titleEn: "Send a gift",
    textAr: "عبّر عن إعجابك بهدية تخلي اللحظة أحلى.",
    textEn: "Make the moment better with a digital gift."},
  {
    icon: "VIP",
    titleAr: "مزايا VIP",
    titleEn: "VIP benefits",
    textAr: "ظهور أقوى، شارة مميزة ومزايا بتزيد مع مستواك.",
    textEn: "Stand out with a badge and level-based benefits."},
  {
    icon: "أمان",
    titleAr: "خصوصيتك في إيدك",
    titleEn: "You control your privacy",
    textAr: "اختار مين يتواصل معاك وتحكّم في تجربتك براحتك.",
    textEn: "Choose who can reach you and stay in control."},
  {
    icon: "Follow",
    titleAr: "ناس ترجع لهم",
    titleEn: "People worth following",
    textAr: "تابع الناس اللي ارتحت لهم وقابلهم تاني بسهولة.",
    textEn: "Follow people you enjoy and meet them again."}
],
    roomPackages: [
      { type: "standard", nameAr: "الغرفة العادية", nameEn: "Standard room", coins: 1000, price: 1000, currency: "EGP", durationDays: 45, featured: false, featuresAr: ["ظهور أساسي", "مدة شهر ونصف", "إعدادات قابلة للتعديل"], featuresEn: ["Basic visibility", "45 days", "Editable settings"] },
      { type: "premium", nameAr: "الغرفة المميزة", nameEn: "Premium room", coins: 3000, price: 1750, currency: "EGP", durationDays: 45, featured: true, featuresAr: ["ظهور أعلى", "مزايا إدارة إضافية", "قابلة للتحديث من لوحة التحكم"], featuresEn: ["Higher visibility", "Extra moderation tools", "Dashboard editable"] },
      { type: "vip", nameAr: "غرفة VIP", nameEn: "VIP room", coins: 5000, price: 2500, currency: "EGP", durationDays: 45, featured: false, featuresAr: ["أولوية في العرض", "تجربة خاصة", "مدة قابلة للتعديل"], featuresEn: ["Priority placement", "Private experience", "Editable duration"] }
    ],

    screenshots: [
      {titleAr: "اكتشف الغرف", titleEn: "Discover rooms", textAr: "تصفح الغرف واللايفات واختار القعدة المناسبة ليك.", textEn: "Browse rooms and live streams that match your mood.", image: "assets/images/screenshots/screen-rooms.png"},
      {titleAr: "ابدأ لايف", titleEn: "Start a live", textAr: "شارك صوتك أو افتح الكاميرا وخلي الناس تدخل معاك.", textEn: "Go live by voice or video and invite people in.", image: "assets/images/screenshots/screen-live.png"},
      {titleAr: "ملفك الشخصي", titleEn: "Your profile", textAr: "اعرض مستواك وشارتك وكل التفاصيل اللي تميز حسابك.", textEn: "Show your level, badge, and profile highlights.", image: "assets/images/screenshots/screen-profile.png"},
      {titleAr: "الهدايا", titleEn: "Gifts", textAr: "ابعث هدية لصاحبك وخلي اللحظة ليها طعم تاني.", textEn: "Send gifts and make every moment more memorable.", image: "assets/images/screenshots/screen-gifts.png"},
      {titleAr: "ملفاتي", titleEn: "My files", textAr: "تابع صورك وملفاتك من مكان واحد مرتب وواضح.", textEn: "Keep your images and files organized in one place.", image: "assets/images/screenshots/screen-files.png"},
      {titleAr: "لوحة الإدارة", titleEn: "Admin dashboard", textAr: "إدارة الأخبار والرسائل والمستخدمين من لوحة واحدة.", textEn: "Manage news, messages, and users from one dashboard.", image: "assets/images/screenshots/screen-admin.png"},
      {titleAr: "حساب المالك", titleEn: "Owner account", textAr: "صلاحيات كاملة لمتابعة التطبيق وإدارة إعداداته.", textEn: "Full access to monitor the app and manage its settings.", image: "assets/images/screenshots/screen-owner.png"}
   
    ],
    faqs: [
      { questionAr: "هل الموقع هو تطبيق الشات نفسه؟", questionEn: "Is this the chat app itself?", answerAr: "لا. هذا موقع دعائي وإداري، أما تطبيق الشات واللايف فسيكون له Backend مستقل مستقبلًا.", answerEn: "No. This is a marketing and admin website; the chat/live app will have a separate backend later." },
      { questionAr: "هل يمكن تعديل الاسم والروابط؟", questionEn: "Can I change the name and links?", answerAr: "نعم، من assets/js/config.js ثم من لوحة التحكم بعد ربط Supabase.", answerEn: "Yes. Start with assets/js/config.js, then use the admin dashboard after Supabase is connected." },
      { questionAr: "هل توجد مفاتيح سرية داخل الموقع؟", questionEn: "Are there secret keys in the site?", answerAr: "لا. الواجهة تستخدم Supabase URL وAnon Key فقط عند التفعيل، ولا تستخدم Service Role Key.", answerEn: "No. The frontend only uses Supabase URL and Anon Key when enabled, never the Service Role Key." },
      { questionAr: "متى تعمل النماذج فعليًا؟", questionEn: "When do the forms save data?", answerAr: "بعد إنشاء مشروع Supabase وتشغيل ملفات SQL وإضافة URL وAnon Key في الإعدادات.", answerEn: "After creating Supabase, running the SQL files, and adding URL and Anon Key to the config." }
    ]
  };
})();
