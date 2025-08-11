
const LANGS = ['ar','fr','en'];

const BIO = {
  ar: {
    site: { title: "بورتفوليو ياسر" },
    nav: { home:"الرئيسية", about:"من أنا", portfolio:"أعمالي", services:"الخدمات", contact:"تواصل" },
    footer: { name:"هواري محمد ياسر", rights:"جميع الحقوق محفوظة." },
    home: { title:"مرحبًا، أنا ياسر", subtitle:"مصمم جرافيك | مسير محلات الإنترنت | طالب قانون خاص", viewWork:"شاهد أعمالي", hireMe:"تواصل معي" },
    highlights:{ creativeTitle:"إبداعي وعصري", creativeText:"واجهة حديثة نظيفة مع تفاعلات سلسة وتصميم متجاوب.", multiTitle:"متعدد اللغات", multiText:"بدّل العربية/الفرنسية/الإنجليزية فورًا دون إعادة تحميل.", readyTitle:"جاهز للنشر", readyText:"HTML/CSS/JS ثابت — متوافق مع GitHub Pages." },
    about:{ title:"من أنا", lead:"نبذة قصيرة، التعليم والخبرة.", bio:"أنا هواري محمد ياسر... (تمت إضافة السيرة كاملة سابقًا).", education:"المؤهلات العلمية", experience:"الخبرات المهنية", skills:"المهارات التقنية" },
    portfolio:{ title:"أعمالي", lead:"مختارات من آخر التصاميم والمشاريع." },
    filters:{ all:"الكل", design:"تصميم", academic:"أكاديمي", admin:"إداري" },
    services:{ title:"الخدمات", lead:"من الهوية البصرية إلى الدعم الأكاديمي والإداري.", designTitle:"التصميم الجرافيكي", academicTitle:"الخدمات الأكاديمية", adminTitle:"الخدمات الإدارية" },
    contact:{ title:"تواصل", lead:"أرسل رسالة أو تواصل عبر الشبكات الاجتماعية.", socialTitle:"الشبكات الاجتماعية" },
    form:{ name:"الاسم", email:"البريد الإلكتروني", message:"الرسالة", send:"إرسال" },
    status:{ online:"متاح الآن", offline:"غير متاح" },
    lists:{
      edu:["بكالوريا علوم تجريبية – 2023 (14.38/20).","جامعة نور البشير – البيض: سنة ثالثة قانون خاص (2023–2026)."],
      exp:["مسير محل Cyber Farouk (مارس 2025 – إلى اليوم).","موظف في Cyber El Amel (مارس 2024 – مارس 2025).","عمل حر في التصميم والخدمات (2022 – 2024)."],
      skills:["Word","Excel","PowerPoint","Access","Photoshop","Illustrator","Premiere Pro","After Effects","HTML","CSS","إدارة الملفات"],
      design:["تصميم الشعارات","بطاقات العمل","البوسترات الإعلانية","محتوى الشبكات الاجتماعية"],
      academic:["تصميم وطباعة ملخصات المذكرات","كتابة الوثائق الجامعية","إنجاز البحوث"],
      admin:["تسيير الملفات الإدارية للشركات الصغيرة","تسيير ملفات فرق كرة القدم"]
    }
  },
  fr: {
    site: { title: "Portfolio de Yasser" },
    nav: { home:"Accueil", about:"À propos", portfolio:"Portfolio", services:"Services", contact:"Contact" },
    footer: { name:"Houari Mohamed Yasser", rights:"Tous droits réservés." },
    home: { title:"Bonjour, je suis Yasser", subtitle:"Graphiste | Gérant de cybercafé | Étudiant en droit privé", viewWork:"Voir mes travaux", hireMe:"Me contacter" },
    highlights:{ creativeTitle:"Créatif & Moderne", creativeText:"UI moderne et propre, interactions fluides, design responsive.", multiTitle:"Multilingue", multiText:"Bascule AR/FR/EN instantanément, sans rechargement.", readyTitle:"Prêt au déploiement", readyText:"HTML/CSS/JS statique — compatible GitHub Pages." },
    about:{ title:"À propos", lead:"Biographie, formation, et expériences.", bio:"Je suis Houari Mohamed Yasser... (biographie complète ajoutée).", education:"Formation", experience:"Expérience", skills:"Compétences techniques" },
    portfolio:{ title:"Portfolio", lead:"Une sélection de créations récentes." },
    filters:{ all:"Tout", design:"Design", academic:"Académique", admin:"Administratif" },
    services:{ title:"Services", lead:"De l’identité visuelle au support académique et administratif.", designTitle:"Design graphique", academicTitle:"Services académiques", adminTitle:"Administratif" },
    contact:{ title:"Contact", lead:"Envoyez un message ou contactez-moi sur les réseaux.", socialTitle:"Réseaux sociaux" },
    form:{ name:"Nom", email:"E-mail", message:"Message", send:"Envoyer" },
    status:{ online:"Disponible", offline:"Indisponible" },
    lists:{
      edu:["Baccalauréat Sciences Expérimentales – 2023 (14,38/20).","Université Nour El Bachir – El Bayadh : 3e année droit privé (2023–2026)."],
      exp:["Gérant – Cyber Farouk (mars 2025 – aujourd’hui).","Employé – Cyber El Amel (mars 2024 – mars 2025).","Freelance (2022 – 2024)."],
      skills:["Word","Excel","PowerPoint","Access","Photoshop","Illustrator","Premiere Pro","After Effects","HTML","CSS","Gestion de fichiers"],
      design:["Logos","Cartes de visite","Affiches publicitaires","Contenu réseaux sociaux"],
      academic:["Résumés de mémoires (conception & impression)","Rédaction de documents universitaires","Aide à la recherche"],
      admin:["Gestion de dossiers pour petites entreprises","Gestion administrative d’équipes de football"]
    }
  },
  en: {
    site: { title: "Yasser Portfolio" },
    nav: { home:"Home", about:"About", portfolio:"Portfolio", services:"Services", contact:"Contact" },
    footer: { name:"Houari Mohamed Yasser", rights:"All rights reserved." },
    home: { title:"Hello, I'm Yasser", subtitle:"Graphic Designer | Cybercafé Manager | Private Law Student", viewWork:"View My Work", hireMe:"Hire Me" },
    highlights:{ creativeTitle:"Creative & Modern", creativeText:"Clean, modern UI with smooth interactions and responsive design.", multiTitle:"Multilingual", multiText:"Switch AR / FR / EN instantly—no reloads.", readyTitle:"Ready to Deploy", readyText:"Static HTML/CSS/JS compatible with GitHub Pages." },
    about:{ title:"About Me", lead:"Biography, education, and experience.", bio:"I am Houari Mohamed Yasser... (full bio added).", education:"Education", experience:"Experience", skills:"Technical Skills" },
    portfolio:{ title:"Portfolio", lead:"A selection of recent designs and projects." },
    filters:{ all:"All", design:"Design", academic:"Academic", admin:"Administrative" },
    services:{ title:"Services", lead:"From visual identity to academic and administrative support.", designTitle:"Graphic Design", academicTitle:"Academic Services", adminTitle:"Administrative" },
    contact:{ title:"Contact", lead:"Send a message or reach out on social media.", socialTitle:"Social" },
    form:{ name:"Name", email:"Email", message:"Message", send:"Send" },
    status:{ online:"Online", offline:"Offline" },
    lists:{
      edu:["Bachelor in Practical Science – 2023 (14.38/20).","University of Nour El Bachir – Private Law: 3rd year (2023–2026)."],
      exp:["Store Manager – Cyber Farouk (Mar 2025 – Present).","Store Employee – Cyber El Amel (Mar 2024 – Mar 2025).","Freelance design & services (2022 – 2024)."],
      skills:["Word","Excel","PowerPoint","Access","Photoshop","Illustrator","Premiere Pro","After Effects","HTML","CSS","File & Data Mgmt"],
      design:["Logos","Business Cards","Posters","Social Media Content"],
      academic:["Thesis summaries (design & print)","Document writing","Research assistance"],
      admin:["Admin files for small businesses","Football club paperwork"]
    }
  }
};

// SEO meta per language
const META = {
  ar: { description: "بورتفوليو متعدد اللغات لأعمال وخدمات هواري محمد ياسر." },
  fr: { description: "Portfolio multilingue des créations et services de Houari Mohamed Yasser." },
  en: { description: "Multilingual portfolio showcasing the work and services of Houari Mohamed Yasser." }
};

// Placeholder arrays (will be replaced later)
const PORTFOLIO_ITEMS = [
  {id:1, title:{ar:"مشروع 1", fr:"Projet 1", en:"Project 1"}, cat:"design", img:"./images/20230115001331logo-de-la-coupe-dafrique-des-nations-2023.png"},
  {id:2, title:{ar:"مشروع 2", fr:"Projet 2", en:"Project 2"}, cat:"academic", img:"./images/afcon-logo-port-ondark-rgb-fr-897x1024-1.png"},
  {id:3, title:{ar:"مشروع 3", fr:"Projet 3", en:"Project 3"}, cat:"design", img:"./images/carte-visite-recto.png"},
  {id:4, title:{ar:"مشروع 4", fr:"Projet 4", en:"Project 4"}, cat:"design", img:"./images/1.png"},
  {id:5, title:{ar:"مشروع 5", fr:"Projet 5", en:"Project 5"}, cat:"academic", img:"./images/1.png"},
  {id:6, title:{ar:"مشروع 6", fr:"Projet 6", en:"Project 6"}, cat:"admin", img:"./images/2-2.jpg"},
];

const PORTFOLIO_DETAILS = {
1: {
    slug: "20230115001331logo-de-la-coupe-dafrique-des-nations-2023",
    gallery: ["./images/20230115001331logo-de-la-coupe-dafrique-des-nations-2023.png"],
    role: {ar:"مصمم جرافيك", fr:"Graphiste", en:"Graphic Designer"},
    tools: ["Photoshop","Illustrator"],
    date: "2025-07-01",
    desc: { ar:"وصف مختصر للمشروع 1.", fr:"Description courte du projet 1.", en:"Short description of project 1." },
    outcome: { ar:"نتيجة إيجابية للمشروع 1.", fr:"Résultat positif pour le projet 1.", en:"Positive outcome for project 1." }
  },
2: {
    slug: "afcon-logo-port-ondark-rgb-fr-897x1024-1",
    gallery: ["./images/afcon-logo-port-ondark-rgb-fr-897x1024-1.png"],
    role: {ar:"مصمم جرافيك", fr:"Graphiste", en:"Graphic Designer"},
    tools: ["Photoshop","Illustrator"],
    date: "2025-07-01",
    desc: { ar:"وصف مختصر للمشروع 2.", fr:"Description courte du projet 2.", en:"Short description of project 2." },
    outcome: { ar:"نتيجة إيجابية للمشروع 2.", fr:"Résultat positif pour le projet 2.", en:"Positive outcome for project 2." }
  },
3: {
    slug: "carte-visite-recto",
    gallery: ["./images/carte-visite-recto.png"],
    role: {ar:"مصمم جرافيك", fr:"Graphiste", en:"Graphic Designer"},
    tools: ["Photoshop","Illustrator"],
    date: "2025-07-01",
    desc: { ar:"وصف مختصر للمشروع 3.", fr:"Description courte du projet 3.", en:"Short description of project 3." },
    outcome: { ar:"نتيجة إيجابية للمشروع 3.", fr:"Résultat positif pour le projet 3.", en:"Positive outcome for project 3." }
  },
4: {
    slug: "1",
    gallery: ["./images/1.png"],
    role: {ar:"مصمم جرافيك", fr:"Graphiste", en:"Graphic Designer"},
    tools: ["Photoshop","Illustrator"],
    date: "2025-07-01",
    desc: { ar:"وصف مختصر للمشروع 4.", fr:"Description courte du projet 4.", en:"Short description of project 4." },
    outcome: { ar:"نتيجة إيجابية للمشروع 4.", fr:"Résultat positif pour le projet 4.", en:"Positive outcome for project 4." }
  },
5: {
    slug: "1",
    gallery: ["./images/1.png"],
    role: {ar:"مصمم جرافيك", fr:"Graphiste", en:"Graphic Designer"},
    tools: ["Photoshop","Illustrator"],
    date: "2025-07-01",
    desc: { ar:"وصف مختصر للمشروع 5.", fr:"Description courte du projet 5.", en:"Short description of project 5." },
    outcome: { ar:"نتيجة إيجابية للمشروع 5.", fr:"Résultat positif pour le projet 5.", en:"Positive outcome for project 5." }
  },
6: {
    slug: "2-2",
    gallery: ["./images/2-2.jpg"],
    role: {ar:"مصمم جرافيك", fr:"Graphiste", en:"Graphic Designer"},
    tools: ["Photoshop","Illustrator"],
    date: "2025-07-01",
    desc: { ar:"وصف مختصر للمشروع 6.", fr:"Description courte du projet 6.", en:"Short description of project 6." },
    outcome: { ar:"نتيجة إيجابية للمشروع 6.", fr:"Résultat positif pour le projet 6.", en:"Positive outcome for project 6." }
  }
};
