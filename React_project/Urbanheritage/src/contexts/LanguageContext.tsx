import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Language = "en" | "ar" | "ti";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.activities": "Our Activities",
    "nav.heritage": "Heritage of Massawa",
    "nav.contact": "Contact",
    
    // Hero
    "hero.tagline": "Preserving History • Building Future",
    "hero.title1": "Urban",
    "hero.title2": "Heritage",
    "hero.description": "Dedicated to the preservation, documentation, and celebration of Massawa's extraordinary architectural and cultural heritage.",
    "hero.cta1": "Explore Our Mission",
    "hero.cta2": "View Heritage Sites",
    
    // About
    "about.label": "About Us",
    "about.title1": "Guardians of",
    "about.title2": "Cultural Legacy",
    "about.description": "Urban Heritage is a non-profit organization committed to preserving the rich architectural and cultural heritage of Massawa, one of the oldest cities on the Red Sea coast. Our mission spans restoration, education, and community development, ensuring that future generations can experience the beauty and history of this remarkable city.",
    "about.feature1.title": "Architectural Preservation",
    "about.feature1.desc": "Documenting and restoring the unique Ottoman and Italian colonial architecture that defines Massawa's historic character.",
    "about.feature2.title": "Community Engagement",
    "about.feature2.desc": "Working closely with local communities to ensure heritage preservation reflects and respects cultural traditions.",
    "about.feature3.title": "Cultural Documentation",
    "about.feature3.desc": "Creating comprehensive archives of oral histories, traditions, and artistic expressions of Massawa's diverse heritage.",
    
    // Activities
    "activities.label": "What We Do",
    "activities.title": "Our",
    "activities.title2": "Activities",
    "activities.learnMore": "Learn More",
    "activities.act1.title": "Restoration Projects",
    "activities.act1.desc": "Active restoration of historic buildings and monuments in Massawa's old town, preserving their original character while ensuring structural integrity.",
    "activities.act2.title": "Educational Programs",
    "activities.act2.desc": "Workshops and courses for local artisans and youth, teaching traditional building techniques and heritage conservation methods.",
    "activities.act3.title": "Research & Documentation",
    "activities.act3.desc": "Comprehensive surveys and digital archiving of architectural features, historical records, and oral traditions.",
    
    // Heritage
    "heritage.label": "Featured Heritage",
    "heritage.title1": "The Pearl of the",
    "heritage.title2": "Red Sea",
    "heritage.p1": "Massawa, known as the \"Pearl of the Red Sea,\" boasts an extraordinary architectural heritage that reflects centuries of diverse cultural influences. From Ottoman coral-block buildings to Italian Renaissance-inspired structures, the city stands as a living testament to the region's rich history.",
    "heritage.p2": "The old town, with its narrow winding streets and historic buildings, represents one of the most significant urban heritage sites in East Africa. Despite challenges from natural disasters and conflict, the city's architectural treasures continue to inspire preservation efforts.",
    "heritage.cta": "Discover Massawa's Heritage",
    "heritage.years": "Years of History",
    
    // Footer
    "footer.description": "Preserving the architectural and cultural heritage of Massawa for future generations through restoration, education, and community engagement.",
    "footer.quickLinks": "Quick Links",
    "footer.contactUs": "Contact Us",
    "footer.rights": "All rights reserved.",
    
    // Contact
    "contact.label": "Get in Touch",
    "contact.title": "Contact",
    "contact.title2": "Us",
    "contact.description": "Have questions about our work or want to get involved? We'd love to hear from you.",
    "contact.connect": "Let's",
    "contact.connect2": "Connect",
    "contact.address": "Address",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.hours": "Hours",
    "contact.hoursValue": "Mon-Fri: 9AM - 5PM EAT",
    "contact.form.name": "Name",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subjectPlaceholder": "How can we help?",
    "contact.form.message": "Message",
    "contact.form.messagePlaceholder": "Your message...",
    "contact.form.send": "Send Message",
    "contact.form.success": "Message sent!",
    "contact.form.successDesc": "Thank you for reaching out. We'll respond shortly.",
    
    // About Page
    "aboutPage.story": "Our",
    "aboutPage.story2": "Story",
    "aboutPage.storyText": "Founded in 2015, Urban Heritage emerged from a collective vision to safeguard Massawa's extraordinary architectural legacy. What began as a small group of passionate historians and architects has grown into a dedicated organization working across multiple fronts to preserve the \"Pearl of the Red Sea.\"",
    "aboutPage.mission": "Our",
    "aboutPage.mission2": "Mission",
    "aboutPage.missionText": "To preserve, protect, and promote the architectural and cultural heritage of Massawa through professional restoration, comprehensive documentation, community education, and international collaboration.",
    "aboutPage.vision": "Our",
    "aboutPage.vision2": "Vision",
    "aboutPage.visionText": "A future where Massawa's heritage sites are fully restored, accessible to all, and serve as a source of pride, education, and sustainable economic development for local communities.",
    "aboutPage.values": "Our",
    "aboutPage.values2": "Values",
    "aboutPage.passion": "Passion",
    "aboutPage.passionDesc": "Deep commitment to preserving cultural identity and architectural beauty.",
    "aboutPage.community": "Community",
    "aboutPage.communityDesc": "Engaging local stakeholders as partners in heritage preservation.",
    "aboutPage.excellence": "Excellence",
    "aboutPage.excellenceDesc": "Maintaining the highest standards in restoration and documentation.",
    "aboutPage.integrity": "Integrity",
    "aboutPage.integrityDesc": "Transparent operations and ethical practices in all endeavors.",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.activities": "أنشطتنا",
    "nav.heritage": "تراث مصوع",
    "nav.contact": "اتصل بنا",
    
    // Hero
    "hero.tagline": "نحافظ على التاريخ • نبني المستقبل",
    "hero.title1": "التراث",
    "hero.title2": "الحضري",
    "hero.description": "مكرسون للحفاظ على التراث المعماري والثقافي الاستثنائي لمصوع وتوثيقه والاحتفاء به.",
    "hero.cta1": "اكتشف رسالتنا",
    "hero.cta2": "مشاهدة المواقع التراثية",
    
    // About
    "about.label": "من نحن",
    "about.title1": "حراس",
    "about.title2": "الإرث الثقافي",
    "about.description": "التراث الحضري منظمة غير ربحية ملتزمة بالحفاظ على التراث المعماري والثقافي الغني لمصوع، إحدى أقدم المدن على ساحل البحر الأحمر. تمتد مهمتنا لتشمل الترميم والتعليم وتنمية المجتمع، مما يضمن أن تتمكن الأجيال القادمة من تجربة جمال وتاريخ هذه المدينة الرائعة.",
    "about.feature1.title": "الحفاظ على المعمار",
    "about.feature1.desc": "توثيق وترميم العمارة العثمانية والاستعمارية الإيطالية الفريدة التي تحدد الطابع التاريخي لمصوع.",
    "about.feature2.title": "المشاركة المجتمعية",
    "about.feature2.desc": "العمل عن كثب مع المجتمعات المحلية لضمان أن يعكس الحفاظ على التراث التقاليد الثقافية ويحترمها.",
    "about.feature3.title": "التوثيق الثقافي",
    "about.feature3.desc": "إنشاء أرشيفات شاملة للتاريخ الشفوي والتقاليد والتعبيرات الفنية لتراث مصوع المتنوع.",
    
    // Activities
    "activities.label": "ماذا نفعل",
    "activities.title": "أنشطتنا",
    "activities.title2": "",
    "activities.learnMore": "اقرأ المزيد",
    "activities.act1.title": "مشاريع الترميم",
    "activities.act1.desc": "ترميم نشط للمباني التاريخية والمعالم الأثرية في البلدة القديمة بمصوع، مع الحفاظ على طابعها الأصلي وضمان السلامة الهيكلية.",
    "activities.act2.title": "البرامج التعليمية",
    "activities.act2.desc": "ورش عمل ودورات للحرفيين المحليين والشباب، لتعليم تقنيات البناء التقليدية وأساليب الحفاظ على التراث.",
    "activities.act3.title": "البحث والتوثيق",
    "activities.act3.desc": "مسوحات شاملة وأرشفة رقمية للميزات المعمارية والسجلات التاريخية والتقاليد الشفوية.",
    
    // Heritage
    "heritage.label": "تراث مميز",
    "heritage.title1": "لؤلؤة",
    "heritage.title2": "البحر الأحمر",
    "heritage.p1": "تفتخر مصوع، المعروفة بـ\"لؤلؤة البحر الأحمر\"، بتراث معماري استثنائي يعكس قروناً من التأثيرات الثقافية المتنوعة. من المباني العثمانية المرجانية إلى الهياكل المستوحاة من عصر النهضة الإيطالية، تقف المدينة شاهداً حياً على تاريخ المنطقة الغني.",
    "heritage.p2": "تمثل البلدة القديمة، بشوارعها الضيقة المتعرجة ومبانيها التاريخية، أحد أهم مواقع التراث الحضري في شرق أفريقيا. على الرغم من التحديات الناجمة عن الكوارث الطبيعية والصراعات، تستمر الكنوز المعمارية للمدينة في إلهام جهود الحفظ.",
    "heritage.cta": "اكتشف تراث مصوع",
    "heritage.years": "سنة من التاريخ",
    
    // Footer
    "footer.description": "الحفاظ على التراث المعماري والثقافي لمصوع للأجيال القادمة من خلال الترميم والتعليم والمشاركة المجتمعية.",
    "footer.quickLinks": "روابط سريعة",
    "footer.contactUs": "اتصل بنا",
    "footer.rights": "جميع الحقوق محفوظة.",
    
    // Contact
    "contact.label": "تواصل معنا",
    "contact.title": "اتصل",
    "contact.title2": "بنا",
    "contact.description": "هل لديك أسئلة حول عملنا أو تريد المشاركة؟ نحب أن نسمع منك.",
    "contact.connect": "دعنا",
    "contact.connect2": "نتواصل",
    "contact.address": "العنوان",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.hours": "ساعات العمل",
    "contact.hoursValue": "الاثنين-الجمعة: 9 صباحاً - 5 مساءً",
    "contact.form.name": "الاسم",
    "contact.form.namePlaceholder": "اسمك",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.emailPlaceholder": "بريدك@email.com",
    "contact.form.subject": "الموضوع",
    "contact.form.subjectPlaceholder": "كيف يمكننا مساعدتك؟",
    "contact.form.message": "الرسالة",
    "contact.form.messagePlaceholder": "رسالتك...",
    "contact.form.send": "إرسال الرسالة",
    "contact.form.success": "تم إرسال الرسالة!",
    "contact.form.successDesc": "شكراً لتواصلك. سنرد عليك قريباً.",
    
    // About Page
    "aboutPage.story": "قصتنا",
    "aboutPage.story2": "",
    "aboutPage.storyText": "تأسس التراث الحضري في عام 2015، وانبثق من رؤية جماعية لحماية الإرث المعماري الاستثنائي لمصوع. ما بدأ كمجموعة صغيرة من المؤرخين والمهندسين المعماريين المتحمسين نما ليصبح منظمة مكرسة تعمل على جبهات متعددة للحفاظ على \"لؤلؤة البحر الأحمر\".",
    "aboutPage.mission": "مهمتنا",
    "aboutPage.mission2": "",
    "aboutPage.missionText": "الحفاظ على التراث المعماري والثقافي لمصوع وحمايته وتعزيزه من خلال الترميم المهني والتوثيق الشامل وتعليم المجتمع والتعاون الدولي.",
    "aboutPage.vision": "رؤيتنا",
    "aboutPage.vision2": "",
    "aboutPage.visionText": "مستقبل يتم فيه ترميم مواقع تراث مصوع بالكامل، وتكون في متناول الجميع، وتكون مصدر فخر وتعليم وتنمية اقتصادية مستدامة للمجتمعات المحلية.",
    "aboutPage.values": "قيمنا",
    "aboutPage.values2": "",
    "aboutPage.passion": "الشغف",
    "aboutPage.passionDesc": "التزام عميق بالحفاظ على الهوية الثقافية والجمال المعماري.",
    "aboutPage.community": "المجتمع",
    "aboutPage.communityDesc": "إشراك أصحاب المصلحة المحليين كشركاء في الحفاظ على التراث.",
    "aboutPage.excellence": "التميز",
    "aboutPage.excellenceDesc": "الحفاظ على أعلى المعايير في الترميم والتوثيق.",
    "aboutPage.integrity": "النزاهة",
    "aboutPage.integrityDesc": "العمليات الشفافة والممارسات الأخلاقية في جميع المساعي.",
  },
  ti: {
    // Navigation
    "nav.home": "መበገሲ ገጽ",
    "nav.about": "ብዛዕባና",
    "nav.activities": "ንጥፈታትና",
    "nav.heritage": "ውርሻ ምጽዋዕ",
    "nav.contact": "ርኸቡና",
    
    // Hero
    "hero.tagline": "ታሪኽ ንሕሉ • መጻኢ ንሃንጽ",
    "hero.title1": "ከተማዊ",
    "hero.title2": "ውርሻ",
    "hero.description": "ነቲ ፍሉይ ስነ-ህንጻዊን ባህላዊን ውርሻ ምጽዋዕ ምሕላው፣ ምስናድን ምኽባርን ዝወፈና ትካል።",
    "hero.cta1": "ዕላማና ርኣዩ",
    "hero.cta2": "ቦታታት ውርሻ ርኣዩ",
    
    // About
    "about.label": "ብዛዕባና",
    "about.title1": "ሓለውቲ",
    "about.title2": "ባህላዊ ውርሻ",
    "about.description": "ከተማዊ ውርሻ ነቲ ሃብታም ስነ-ህንጻዊን ባህላዊን ውርሻ ምጽዋዕ ንምሕላው ዝወፈነ ትካል እዩ። ምጽዋዕ ኣብ ገማግም ቀይሕ ባሕሪ ካብ ዝጸንሐት ከተማታት ሓንቲ እያ። ዕላማና ምሕዳስ፣ ትምህርትን ማሕበረሰባዊ ልምዓትን ዝሓቁፍ ኮይኑ፣ ዝመጽእ ወለዶ ጽባቐን ታሪኽን እዛ ዓባይ ከተማ ክፈልጥ ንምግባር እዩ።",
    "about.feature1.title": "ምሕላው ስነ-ህንጻ",
    "about.feature1.desc": "ነቲ ፍሉይ ዓሰማዊን ጥልያናዊን ስነ-ህንጻ ምጽዋዕ ምስናድን ምሕዳስን።",
    "about.feature2.title": "ማሕበረሰባዊ ተሳትፎ",
    "about.feature2.desc": "ምስ ከባቢ ማሕበረሰብ ብቐረባ ብምስራሕ ውርሻ ምሕላው ባህላዊ ልምድታት ከንጸባርቕ ምግባር።",
    "about.feature3.title": "ባህላዊ ምስናድ",
    "about.feature3.desc": "ናይ ምጽዋዕ ዝተፈላለየ ውርሻ ታሪኽ፣ ልምድታትን ስነ-ጥበባዊ መግለጺታትን ምኽዛን።",
    
    // Activities
    "activities.label": "እንታይ ንገብር",
    "activities.title": "ንጥፈታትና",
    "activities.title2": "",
    "activities.learnMore": "ተወሳኺ ኣንብቡ",
    "activities.act1.title": "ፕሮጀክትታት ምሕዳስ",
    "activities.act1.desc": "ኣብ እንዳዕ ከተማ ምጽዋዕ ንዝርከቡ ታሪኻውያን ህንጻታትን መዘከርታታትን ምሕዳስ።",
    "activities.act2.title": "ትምህርታዊ መደባት",
    "activities.act2.desc": "ንከባቢ ሰብ ሞያን መንእሰያትን ልምዳዊ ቴክኒክ ህንጻን ሜላታት ምሕላው ውርሻን ዝምህሩ ኮርሳትን ወርክሾፕታትን።",
    "activities.act3.title": "ምርምርን ምስናድን",
    "activities.act3.desc": "ሰፊሕ መጽናዕትን ዲጂታላዊ ምኽዛንን ስነ-ህንጻዊ ባህርያት፣ ታሪኻዊ መዛግብትን ኣፋዊ ልምድታትን።",
    
    // Heritage
    "heritage.label": "ፍሉይ ውርሻ",
    "heritage.title1": "ዕንቊ",
    "heritage.title2": "ቀይሕ ባሕሪ",
    "heritage.p1": "ምጽዋዕ፣ \"ዕንቊ ቀይሕ ባሕሪ\" ተባሂላ ትፍለጥ፣ ናይ ዘመናት ዝተፈላለየ ባህላዊ ጽልዋታት ዘንጸባርቕ ፍሉይ ስነ-ህንጻዊ ውርሻ ኣለዋ። ካብ ዓሰማዊ ናይ ማርጃን ህንጻታት ክሳብ ብጥልያናዊ ረነሳንስ ዝተጸልወ ኣቃውማታት፣ እታ ከተማ ህያው መስካርነት ሃብታም ታሪኽ ከባቢ እያ።",
    "heritage.p2": "እታ ዕድመ ዝደፍአት ከተማ፣ ብጸቢብ ዝተጠውየ ጎደናታታን ታሪኻውያን ህንጻታታን፣ ኣብ ምብራቕ ኣፍሪቃ ካብ ዝዓበዩ ከተማዊ ውርሻ ቦታታት ሓንቲ እያ።",
    "heritage.cta": "ውርሻ ምጽዋዕ ኣስተማቕሩ",
    "heritage.years": "ዓመታት ታሪኽ",
    
    // Footer
    "footer.description": "ነቲ ስነ-ህንጻዊን ባህላዊን ውርሻ ምጽዋዕ ንዝመጽእ ወለዶ ብምሕዳስ፣ ትምህርትን ማሕበረሰባዊ ተሳትፎን ምሕላው።",
    "footer.quickLinks": "ቅልጡፍ ሊንክታት",
    "footer.contactUs": "ርኸቡና",
    "footer.rights": "ኩሉ መሰላት ዝተሓዘ።",
    
    // Contact
    "contact.label": "ርኸቡና",
    "contact.title": "ርኸቡና",
    "contact.title2": "",
    "contact.description": "ብዛዕባ ስራሕና ሕቶታት ኣለኩም ወይ ክትሳተፉ ትደልዩ? ክንሰምዓኩም ንደሊ።",
    "contact.connect": "ንራኸብ",
    "contact.connect2": "",
    "contact.address": "ኣድራሻ",
    "contact.email": "ኢመይል",
    "contact.phone": "ቴለፎን",
    "contact.hours": "ሰዓታት ስራሕ",
    "contact.hoursValue": "ሰኑይ-ዓርቢ: 9 ንግሆ - 5 ድሕሪ ቀትሪ",
    "contact.form.name": "ስም",
    "contact.form.namePlaceholder": "ስምኩም",
    "contact.form.email": "ኢመይል",
    "contact.form.emailPlaceholder": "ኢመይልኩም",
    "contact.form.subject": "ኣርእስቲ",
    "contact.form.subjectPlaceholder": "ብኸመይ ክንሕግዘኩም ንኽእል?",
    "contact.form.message": "መልእኽቲ",
    "contact.form.messagePlaceholder": "መልእኽትኹም...",
    "contact.form.send": "መልእኽቲ ስደዱ",
    "contact.form.success": "መልእኽቲ ተሰዲዱ!",
    "contact.form.successDesc": "ስለ ዝተራኸብኩምና ነመስግን። ቀልጢፍና ክንምልስ ኢና።",
    
    // About Page
    "aboutPage.story": "ታሪኽና",
    "aboutPage.story2": "",
    "aboutPage.storyText": "ኣብ 2015 ዝተመስረተ፣ ከተማዊ ውርሻ ነቲ ፍሉይ ስነ-ህንጻዊ ውርሻ ምጽዋዕ ንምሕላው ካብ ሓባራዊ ራእይ ዝወጸ እዩ። ብንእሽተይ ጉጅለ ተባዓት ታሪኸኛታትን ስነ-ህንጸኛታትን ዝጀመረ፣ ሕጂ \"ዕንቊ ቀይሕ ባሕሪ\" ንምሕላው ኣብ ብዙሕ ግንባራት ዝሰርሕ ዝወፈነ ትካል ኮይኑ ኣሎ።",
    "aboutPage.mission": "ዕላማና",
    "aboutPage.mission2": "",
    "aboutPage.missionText": "ነቲ ስነ-ህንጻዊን ባህላዊን ውርሻ ምጽዋዕ ብሞያዊ ምሕዳስ፣ ሰፊሕ ምስናድ፣ ማሕበረሰባዊ ትምህርትን ኣህጉራዊ ምትሕብባርን ምሕላው፣ ምሕላውን ምድንፋዕን።",
    "aboutPage.vision": "ራእይና",
    "aboutPage.vision2": "",
    "aboutPage.visionText": "መጻኢ ኣብኡ ቦታታት ውርሻ ምጽዋዕ ብምሉኡ ዝሓደሱ፣ ንኹሉ ዝበጽሑ፣ ምንጪ ኩርዓት፣ ትምህርትን ዘላቒ ቁጠባዊ ልምዓትን ንከባቢ ማሕበረሰባት ዝኾኑሉ።",
    "aboutPage.values": "ክብርታትና",
    "aboutPage.values2": "",
    "aboutPage.passion": "ህርፋን",
    "aboutPage.passionDesc": "ንባህላዊ መንነትን ስነ-ህንጻዊ ጽባቐን ንምሕላው ዓሚቕ ቅዱስ ተወፋይነት።",
    "aboutPage.community": "ማሕበረሰብ",
    "aboutPage.communityDesc": "ከባቢ ኣካላት ከም መሻርኽቲ ኣብ ምሕላው ውርሻ ምስታፍ።",
    "aboutPage.excellence": "ብሉጽነት",
    "aboutPage.excellenceDesc": "ኣብ ምሕዳስን ምስናድን ልዑል መለክዒታት ምሓዝ።",
    "aboutPage.integrity": "ቅንዕና",
    "aboutPage.integrityDesc": "ግሉጽ ስራሓትን ስነ-ምግባራዊ ተግባራትን ኣብ ኩሉ ጻዕርታት።",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });

  const dir = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language, dir]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
