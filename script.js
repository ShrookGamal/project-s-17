const PHONE = '0546344727';
const PHONE_INTL = '966546344727';

const services = [
  { id:'painting', title:'الدهانات والديكورات', shortDesc:'دهانات داخلية وخارجية بلاستيكية وزيتية مع ديكورات حائط ثلاثية الأبعاد وتدرجات لونية احترافية.', features:['دهانات بلاستيكية داخلية','دهانات زيتية خارجية','ديكورات حائط ثلاثية الأبعاد','دهانات مضادة للرطوبة','تظليل وتدرجات لونية','معالجة وتجهيز الحوائط'], keywords:'دهانات جدة • دهانات بلاستيك • دهانات زيتية • ديكورات حائط جدة • دهانات داخلية • دهانات خارجية • دهانات ثلاثية الأبعاد • تظليل حوائط' },
  { id:'plastering', title:'التلييس والتنعيم', shortDesc:'تلييس الجدران والأسقف وتنعيم الأسطح بمواد عالية الجودة لتمهيد الجدران للدهانات.', features:['تلييس جدران','تلييس أسقف','تنعيم الأسطح','معالجة الشقوق','تجهيز للدهانات','تلييس ديكوري'], keywords:'تلييس جدة • تلييس جدران • تلييس أسقف • تنعيم أسطح جدة • معالجة شقوق • تلييس وتنعيم • تجهيز جدران' },
  { id:'restoration', title:'الترميم والتجميل', shortDesc:'ترميم وتجديد المنشآت القديمة ومعالجة التشققات والصدع وإعادة الحياة لها باحترافية.', features:['معالجة التشققات الإنشائية','ترميم الأسقف والجدران','تجديد الواجهات','ترميم الحمامات والمطابخ','هدم وإزالة آمنة','تقوية الهيكل الإنشائي'], keywords:'ترميم جدة • تجديد شقق جدة • ترميم منشآت • معالجة تشققات • ترميم واجهات • هدم وإزالة • تجديد فلل جدة • ترميم حمامات' },
  { id:'ceramic', title:'تركيب السيراميك والبورسلين', shortDesc:'تركيب سيراميك وبورسلين للأرضيات والجدران بأعلى معايير الجودة والدقة في التركيب.', features:['تركيب سيراميك أرضيات','تركيب بورسلين كبير الحجم','تركيب سيراميك جدران','معالجة الفواصل','عزل أرضيات قبل التركيب','تلميع وتنظيف نهائي'], keywords:'تركيب سيراميك جدة • سيراميك وبورسلين جدة • تركيب بورسلين • سيراميك أرضيات • سيراميك جدران • تركيب سيراميك حمامات • تركيب سيراميك مطابخ' },
  { id:'plumbing', title:'أعمال السباكة', shortDesc:'تمديدات صحية كاملة وتركيب أدوات صحية وصيانة أنابيب المياه والصرف بأحدث المعدات.', features:['تمديد أنابيب مياه','تركيب أدوات صحية','صيانة وتسليك المجاري','معالجة تسربات المياه','تركيب سخانات','تركيب طلمبات'], keywords:'سباكة جدة • تمديدات صحية جدة • تركيب أدوات صحية • تسليك مجاري • تسربات مياه جدة • تركيب سخانات • صيانة سباكة' },
  { id:'electrical', title:'التمديدات الكهربائية', shortDesc:'تمديدات كهربائية كاملة وتركيب الإنارة والمفاتيح واللوحات الكهربائية بمعايير الأمان.', features:['تمديد أسلاك وكابلات','تركيب لوحات كهربائية','تركيب إنارة وإضاءة','تركيب مفاتيح وبرايز','صيانة وتركيب تكييفات','أنظمة إنذار وكاميرات'], keywords:'تمديدات كهربائية جدة • كهرباء جدة • تركيب لوحات كهربائية • تركيب إنارة • صيانة كهرباء • تركيب تكييفات جدة • كاميرات مراقبة' },
  { id:'gypsum', title:'الجبس والأسقف المعلقة', shortDesc:'تركيب ألواح الجبس والأسقف المعلقة والديكورات الجبسية بتصاميم عصرية وأنيقة.', features:['أسقف معلقة جبسية','جبس بورد للجدران','ديكورات جبسية','تقسيم مساحات','أسقف بإضاءة مخفية','ديكورات تلفزيون'], keywords:'جبس بورد جدة • أسقف معلقة جدة • ديكورات جبس جدة • جبس بورد • أسقف جبسية • تقسيم مساحات • أسقف بإضاءة مخفية' },
  { id:'insulation', title:'العزل المائي والحراري', shortDesc:'عزل مائي وحراري للأسطح والخزانات والحمامات بمواد عازلة عالية الجودة ومضمونة.', features:['عزل مائي للأسطح','عزل حراري للأسطح','عزل الخزانات','عزل الحمامات والمطابخ','عزل أرضيات','عزل واجهات'], keywords:'عزل مائي جدة • عزل حراري جدة • عزل أسطح جدة • عزل خزانات • عزل حمامات • عزل أرضيات • عزل الرطوبة' },
];

const serviceIcons = {
  painting:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/><path d="M9 8c-2 3-4 3.5-7 4l8 10 2-2 2 2 5-7"/><path d="M2 22 5 19"/></svg>',
  plastering:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
  restoration:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  ceramic:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>',
  plumbing:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  electrical:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  gypsum:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  insulation:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
};

const portfolioItems = [
  { id:1, type:'image', src:'https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title:'دهانات وديكورات', category:'دهانات' },
  { id:2, type:'image', src:'https://images.pexels.com/photos/11806490/pexels-photo-11806490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title:'تركيب سيراميك', category:'سيراميك' },
  { id:3, type:'image', src:'https://images.pexels.com/photos/5691550/pexels-photo-5691550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title:'ترميم وتجديد', category:'ترميم' },
  { id:4, type:'image', src:'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title:'أعمال السباكة', category:'سباكة' },
  { id:5, type:'image', src:'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title:'تمديدات كهربائية', category:'كهرباء' },
  { id:6, type:'image', src:'https://images.pexels.com/photos/39238328/pexels-photo-39238328.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title:'عزل مائي وحراري', category:'عزل' },
  { id:7, type:'image', src:'https://images.pexels.com/photos/6764270/pexels-photo-6764270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title:'دهانات داخلية', category:'دهانات' },
  { id:8, type:'image', src:'https://images.pexels.com/photos/12092231/pexels-photo-12092231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title:'أسقف معلقة', category:'جبس' },
  { id:9, type:'image', src:'https://images.pexels.com/photos/260046/pexels-photo-260046.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', title:'ديكور داخلي', category:'دهانات' },
];

const blogPosts = [
  { id:'painting-trends', title:'أحدث اتجاهات الدهانات والتلييس لعام 2026', excerpt:'اكتشف أحدث صيحات الدهانات والديكورات الحائطية لعام 2026 من الألوان الباردة إلى التأثيرات ثلاثية الأبعاد وكيف تختار ما يناسب مساحتك.', category:'الدهانات والتلييس', date:'8 يناير 2026', readTime:'7 دقائق', image:'https://images.pexels.com/photos/6474133/pexels-photo-6474133.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id:'ceramic-guide', title:'دليلك الشامل لتركيب السيراميك والبورسلين', excerpt:'تعرف على كل ما تحتاج معرفته عن تركيب السيراميك والبورسلين من اختيار النوع المناسب إلى خطوات التركيب الصحيحة والمعالجة النهائية.', category:'تركيب السيراميك', date:'15 يناير 2026', readTime:'8 دقائق', image:'https://images.pexels.com/photos/11806490/pexels-photo-11806490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { id:'restoration-importance', title:'أهمية الترميم المبكر للمنشآت', excerpt:'تعرف على لماذا الترميم المبكر للمنشآت أمر حاسم وكيف يمكن للكشف ومعالجة المشاكل الإنشائية مبكراً أن يوفر عليك آلاف الريالات.', category:'الترميم والتجميل', date:'2 يناير 2026', readTime:'6 دقائق', image:'https://images.pexels.com/photos/5691550/pexels-photo-5691550.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

const blogContents = {
  'painting-trends': `<h2>مقدمة عن عالم الدهانات الحديثة</h2><p>عالم الدهانات والديكورات الحائطية يشهد ثورة حقيقية في عام 2026، حيث لم تعد الدهانات مجرد طبقة لونية تغطي الحائط بل أصبحت وسيلة تعبير فني وتصميم داخلي تخلق أجواء وتأثيرات بصرية مذهلة. في جدة والمملكة العربية السعودية، يبحث العملاء عن دهانات تعكس شخصيتهم وتضيف لمسة عصرية لمساحاتهم.</p><p>في هذا المقال نستعرض أحدث اتجاهات الدهانات والديكورات الحائطية لعام 2026، من الألوان الرائجة إلى التقنيات الحديثة وكيفية اختيار ما يناسب مساحتك.</p><h2>الألوان الرائجة في 2026</h2><h3>الألوان الترابية الدافئة</h3><p>الألوان الترابية مثل البيج والبني الفاتح والطين المخبوز تعود بقوة في 2026. هذه الألوان تخلق دفئاً وانتماء للمساحة وتناسب خصوصية المنازل السعودية التي تبحث عن الأصالة مع لمسة عصرية.</p><h3>الأخضر الزيتوني والزمردي</h3><p>الأخضر بدرجاته الزيتونية والزمردي يتصدر قائمة الألوان الرائجة. يضفي حيوية وانتعاشاً على المساحات ويتناغم بشكل رائع مع الأثاث الخشبي والنباتات الداخلية.</p><h3>الأزرق الداكن والكحلي</h3><p>الأزرق الداكن والكحلي يحل محل الأسود التقليدي كخيار جريء للجدران الرئيسية. يضفي عمقاً ورقياً على المساحات ويتناسب مع الأثاث الذهبي والنحاسي.</p><h2>تقنيات التلييس والتنعيم</h2><p>قبل أي دهان، يجب أن يكون الجدار ملساً ومجهزاً بشكل احترافي. التلييس والتلييس والتنعيم يضمنان أن الدهان النهائي يظهر بشكل مثالي دون عيوب أو unevenness. نستخدم مواد تلييس عالية الجودة تملأ الشقوق وتنعم السطح تماماً.</p><h2>تقنيات الدهانات الحديثة</h2><h3>الدهانات ثلاثية الأبعاد</h3><p>الدهانات ثلاثية الأبعاد تخلق تأثيرات بصرية مذهلة على الجدران. نستخدم تقنيات خاصة لإضافة عمق وملمس للحائط يتفاعل مع الإضاءة ويخلق ظلالاً وأبعاداً متغيرة على مدار اليوم.</p><h3>التدرجات اللونية</h3><p>التدرجات اللونية من لون إلى آخر على نفس الحائط تخلق تأثيراً فنياً ساحراً. نستخدم تقنية الرش الهوائي لدمج الألوان بسلاسة تامة دون خطوط فاصلة.</p><h2>اختيار الدهان المناسب لكل غرفة</h2><p>لصالات المعيشة الكبيرة ننصح بألوان دافئة تخلق جو ترحيبي. غرف النوم تحتاج ألواناً هادئة تساعد على الاسترخاء. الحمامات والمطابخ في جدة تتطلب دهانات مقاومة للرطوبة والعفن.</p><h2>نصائح لتجهيز الحوائط قبل الدهان</h2><ul><li>تنظيف الحائط تماماً من أي غبار أو شحم</li><li>معالجة أي تشققات أو ثقوب بمادة معالجة مناسبة</li><li>صنفرة الحائط لتنعيم السطح</li><li>وضع طبقة أساس (برايمر) لضمان ثبات اللون</li><li>انتظار جفاف طبقة الأساس تماماً قبل وضع الدهان النهائي</li></ul><h2>لماذا تختار شركة رونق للدهانات في جدة</h2><p>شركة رونق تقدم خدمات دهانات وتلييس احترافية في جدة بفريق متخصص يستخدم أحدث المعدات والتقنيات العالمية. نقدم ضماناً على جميع أعمالنا ونستخدم دهانات عالية الجودة من ماركات عالمية موثوقة. خبرتنا أكثر من 15 عاماً في دهانات الفلل والشقق والمنشآت التجارية في جدة تجعلنا الخيار الأمثل لتحقيق رؤيتك.</p><h2>الخلاصة</h2><p>عالم الدهانات في 2026 يقدم خيارات لا حصر لها لتحويل مساحتك. من الألوان الترابية الدافئة إلى التقنيات ثلاثية الأبعاد المذهلة، الاختيار الصحيح يعتمد على ذوقك واحتياجات مساحتك. استشر فريقنا المتخصص لمساعدتك في اختيار الحل المثالي.</p>`,
  'ceramic-guide': `<h2>مقدمة عن عالم السيراميك والبورسلين</h2><p>يعد تركيب السيراميك والبورسلين من أهم مراحل تشطيب المباني والمنشآت السكنية والتجارية في جدة والمملكة العربية السعودية. فالأرضيات والجدران المكسوة بالسيراميك ليست مجرد عنصر جمالي بل هي استثمار طويل الأمد يحمي المبنى من الرطوبة والتآكل ويضيف قيمة جمالية واقتصادية كبيرة للعقار.</p><p>في هذا الدليل الشامل سنتناول كل ما يتعلق بتركيب السيراميك والبورسلين من اختيار النوع المناسب إلى خطوات التركيب الاحترافية والمعالجة النهائية، مع التركيز على المعايير التي تضمن نتائج تدوم لعقود طويلة دون تشققات أو تلف.</p><h2>الفرق بين السيراميك والبورسلين</h2><p>كثير من العملاء في جدة يخلطون بين السيراميك والبورسلين، لكن الفروق بينهما جوهرية وتؤثر على قرار الاختيار:</p><h3>السيراميك التقليدي</h3><p>السيراميك مصنوع من خليط الطين والرمل والمواد المعدنية ويتم حرقه في أفران درجات حرارتها عالية. يتميز بتنوع ألوانه وأشكاله وسعره الاقتصادي، لكنه أقل كثافة من البورسلين وأكثر عرضة لامتصاص الماء.</p><h3>البورسلين الفاخر</h3><p>البورسلين مصنوع من خليط أكثر نقاء ويتم حرقه في درجات حرارة أعلى بكثير، مما يجعله أكثر كثافة وأقل امتصاصاً للماء وأقوى بكثير من السيراميك العادي. البورسلين مثالي للأماكن ذات الكثافة العالية والمناطق المعرضة للرطوبة المستمرة.</p><h2>اختيار النوع المناسب لكل مساحة</h2><h3>أرضيات المعيشة والصالات</h3><p>لأرضيات غرف المعيشة والصالات الكبيرة في الفلل والشقق بجدة، ننصح باستخدام بورسلين كبير الحجم بقياس 60×60 أو 80×80 سم بمظهر رخامي أو خشبي حسب الديكور العام للمساحة.</p><h3>الحمامات والمطابخ</h3><p>الحمامات والمطابخ تتطلب سيراميك أو بورسلين بمعامل امتصاص منخفض ومقاومة عالية للانزلاق. ننصح باستخدام سيراميك بنسيج خشن نسبياً للأرضيات وسيراميك أملس للجدران.</p><h2>خطوات التركيب الاحترافية</h2><h3>1. تجهيز السطح</h3><p>تجهيز السطح هو أهم خطوة في عملية التركيب. يجب أن يكون السطح نظيفاً وجافاً ومستوياً تماماً. أي unevenness في السطح سيؤدي إلى تشققات لاحقة في السيراميك. نستخدم مادة لاتكسية لعزل الأرضية قبل التركيب لمنع الرطوبة من الصعود.</p><h3>2. اختيار المونة اللاصقة</h3><p>نستخدم مونة لاصقة عالية الجودة من نوع C2TE للأرضيات العادية و C2TES1 للأماكن المعرضة للحرارة العالية. المونة الجيدة تضمن ثبات السيراميك لعقود دون تفاوت أو انفصال.</p><h3>3. التركيب والتسوية</h3><p>نبدأ التركيب من المنتصف باتجاه الأطراف لضمان تناظر التوزيع. نستخدم فاصل بلاستيكي موحد لضمان استواء الفواصل. كل بلاطة يتم ضغطها وتسويتها مع المونة بمطرقة مطاطية.</p><h3>4. المعالجة والفواصل</h3><p>بعد جفاف المونة تماماً (24-48 ساعة) يتم ملء الفواصل بمادة معالجة مقاومة للرطوبة والعفن. نستخدم معالجة إيبوكسية للحمامات والمطابخ ومعالجة سيليكونية للمناطق الجافة.</p><h2>نصائح للحفاظ على السيراميك</h2><ul><li>تنظيف السيراميك دورياً بمواد متعادلة لا تحتوي على أحماض قوية</li><li>معالجة أي تشققات في الفواصل فوراً لمنع تسرب المياه</li><li>تجنب استخدام أدوات حادة قد تخدش السطح</li><li>وضع فواصل مطاطية تحت الأثاث الثقيل لمنع الخدوش</li><li>إعادة معالجة الفواصل كل 3-5 سنوات حسب الاستخدام</li></ul><h2>لماذا تختار شركة رونق لتركيب السيراميك في جدة</h2><p>نحن في شركة رونق نمتلك خبرة أكثر من 15 عاماً في تركيب السيراميك والبورسلين في جدة والمملكة العربية السعودية. فريقنا من الفنيين المدربين يستخدم أحدث المعدات والتقنيات العالمية لضمان نتائج مثالية تدوم لعقود. نقدم ضماناً على جميع أعمالنا ونستخدم فقط مواد عالية الجودة من موردين موثوقين.</p><h2>الخلاصة</h2><p>تركيب السيراميك والبورسلين استثمار طويل الأمد في منزلك أو منشأتك التجارية. الاختيار الصحيح للنوع والمادة اللاصقة والفني المحترف يضمن لك نتائج تدوم لعقود دون مشاكل. لا تتهاون في أي من هذه العوامل فالتكلفة الأولية لتركيب سيراميك رديء ستضاعف مرتين عند إعادة التركيب.</p>`,
  'restoration-importance': `<h2>مقدمة عن أهمية الترميم</h2><p>كثير من ملاك العقارات في جدة والمملكة العربية السعودية يتجاهلون علامات التحذير المبكرة للمشاكل الإنشائية حتى تتفاقم وتتطلب إصلاحات مكلفة. الترميم المبكر للمنشآت ليس مجرد إجراء تجميلي بل هو استثمار حاسم يحمي قيمة عقارك ويضمن سلامة شاغليه.</p><p>في هذا المقال نستعرض أهمية الترميم المبكر، العلامات التحذيرية التي يجب الانتباه لها، وكيف يمكن للكشف الدوري والمعالجة المبكرة أن توفر عليك آلاف الريالات.</p><h2>العلامات التحذيرية التي لا يجب تجاهلها</h2><h3>التشققات في الجدران</h3><p>ليست كل التشققات خطيرة، لكن يجب الانتباه لها. التشققات الأفقية عادة أقل خطورة من التشققات المائلة التي قد تشير إلى مشكلة في الأساسات. أي تشقق بعرض أكبر من 3 ملم يستلزم فحصاً فورياً من مختص.</p><h3>بقع الرطوبة والعفن</h3><p>بقع الرطوبة والعفن على الجدران والأسقف تشير إلى تسرب مياه أو مشكلة في العزل. تجاهل هذه العلامات يؤدي إلى تآكل الحديد الإنشائي وتلف الدهانات والسيراميك.</p><h3>هبوط الأرضيات</h3><p>إذا لاحظت أن أرضيات منزلك بدأت تتمايل أو تهبوط في مناطق معينة، فهذا قد يشير إلى مشكلة في الأساسات أو تآكل في الخرسانة. يجب معالجة هذا فوراً قبل تفاقم المشكلة.</p><h2>مراحل الترميم الاحترافية</h2><h3>المرحلة الأولى: الكشف والتقييم</h3><p>نبدأ بفحص شامل للمنشأة لتحديد جميع المشاكل الإنشائية والتجميلية. نستخدم معدات حديثة للكشف عن التشققات الخفية ومشاكل الأساسات.</p><h3>المرحلة الثانية: إزالة التلف</h3><p>إزالة جميع الأجزاء التالفة من دهانات وبلاط وجبس بورد متضرر. هذه المرحلة حاسمة لضمان أن الترميم يعالج المشكلة من جذورها وليس فقط الأعراض.</p><h3>المرحلة الثالثة: المعالجة الإنشائية</h3><p>معالجة التشققات الإنشائية بمواد حقن خاصة، تقوية الحديد الإنشائي، وإصلاح أي تآكل في الخرسانة. هذه المرحلة تضمن سلامة المبنى لسنوات قادمة.</p><h3>المرحلة الرابعة: العزل والمعالجة</h3><p>عزل الأسطح والجدران ضد الرطوبة والحرارة. هذه المرحلة تمنع تكرار المشاكل وتضمن حماية المبنى من العوامل البيئية.</p><h3>المرحلة الخامسة: التشطيب النهائي</h3><p>إعادة التشطيب النهائي من تلييس ودهانات وسيراميك وديكورات حسب رغبة العميل. هذه المرحلة تعيد للمبنى مظهره الجمالي وقيمته السوقية.</p><h2>فوائد الترميم المبكر</h2><ul><li>توفير مالي كبير - ترميم تشقق صغير اليوم يكلف بضع مئات من الريالات، بينما تجاهله قد يؤدي إلى إصلاحات إنشائية تكلف عشرات الآلاف</li><li>حماية قيمة العقار - العقارات المهملة تفقد من قيمتها السوقية الكثير</li><li>سلامة الشاغلين - المشاكل الإنشائية غير المعالجة قد تؤدي إلى انهيارات</li><li>راحة بال دائمة - الشعور بأن منزلك في حالة جيدة يمنح راحة بال لا تقدر بثمن</li></ul><h2>متى يجب الترميم</h2><p>ننصح بإجراء فحص دوري للمنشأة كل 3-5 سنوات، وفحص فوري عند ملاحظة أي من العلامات التحذيرية المذكورة. في جدة، المناخ الحار والرطوبة العالية يسرعان من تلف المباني، لذا ننصح بفحص دوري كل سنتين.</p><h2>لماذا تختار شركة رونق للترميم في جدة</h2><p>شركة رونق تقدم خدمات ترميم شاملة للمنشآت في جدة بفريق متخصص يمتلك خبرة أكثر من 15 عاماً. نستخدم أحدث المعدات والتقنيات للكشف الدقيق عن المشاكل ومعالجتها من جذورها. نقدم ضماناً على جميع أعمالنا ونضمن نتائج تدوم لعقود.</p><h2>الخلاصة</h2><p>الترميم المبكر للمنشآت استثمار حقيقي يحمي عقارك وعائلتك. لا تنتظر تفاقم المشاكل، فالكشف الدوري والمعالجة المبكرة توفر عليك الكثير وتضمن سلامة منشأتك لعقود قادمة.</p>`,
};

const testimonials = [
  { name:'أبو عبدالله', role:'صاحب فيلا - جدة', text:'فريق محترف وملتزم بالمواعيد. قاموا بدهانات الفيلا بالكامل بجودة عالية وتشطيب ممتاز. أنصح بهم بشدة.', rating:5 },
  { name:'م. خالد الشهري', role:'مدير مشروع تجاري', text:'تعاملت معهم في تشطيب مكتب تجاري وكان الأداء فوق التوقعات. الالتزام بالوقت والجودة ممتاز والأسعار منافسة.', rating:5 },
  { name:'أم محمد', role:'صاحبة شقة - جدة', text:'جددت شقتي بالكامل معهم من دهانات وتلييس وسيراميك. النتيجة فاقت توقعاتي والتعامل راقي جداً.', rating:5 },
  { name:'أبو نورة', role:'صاحب فيلا - شمال جدة', text:'أعمال العزل المائي للسطح تمت بدقة واحترافية. انتهت مشكلة التسرب التي عانيت منها سنوات.', rating:5 },
  { name:'سعد الغامدي', role:'مستثمر عقاري', text:'تشطيب عدة شقق للإيجار معهم. الجودة ثابتة في كل مشروع والالتزام بالمواعيد ممتاز. تعامل دائم معهم.', rating:5 },
  { name:'فهد العتيبي', role:'صاحب محل تجاري', text:'دهانات المحل التجاري بديكور ثلاثي الأبعاد خرج بشكل رائع. زبائني يمدحون الديكور باستمرار.', rating:5 },
  { name:'أم خالد', role:'صاحبة شقة - جدة', text:'تركيب جبس بورد وأسقف معلقة بإضاءة مخفية في الصالة. النتيجة تحفة فنية والأسعار معقولة جداً.', rating:5 },
  { name:'أبو سارة', role:'صاحب فيلا - جدة', text:'ترميم الفيلا القديمة وإعادة الحياة لها. شغل احترافي من فريق محترم ومحترف. شكراً لكم.', rating:5 },
  { name:'ماجد القرني', role:'مدير شركة', text:'صيانة تكييف مركزي للمكتب. خدمة سريعة ودقيقة والأسعار منافسة. أصبحوا مزود الخدمة الدائم لنا.', rating:5 },
  { name:'أم عبدالرحمن', role:'صاحبة منزل - جدة', text:'تلييس وتنعيم جدران المنزل قبل الدهانات. السطح خرج ناعم جداً والدهان ظهر بشكل مثالي.', rating:5 },
  { name:'بدر الحربي', role:'صاحب استراحة', text:'تشطيب استراحة بالكامل من دهانات وسيراميك وديكور. النتيجة رائعة والاستراحة صارت وجهة العائلة.', rating:5 },
  { name:'أبو فهد', role:'صاحب عمارة سكنية', text:'أعمال السباكة والكهرباء للعمارة بالكامل. شغل نظيف ومنظم وبدون أي مشاكل. أنصح بهم بشدة.', rating:5 },
];

const faqItems = [
  { id:1, question:'ما هي المناطق التي تقدمون فيها خدماتكم؟', answer:'نقدم خدماتنا في جميع أحياء جدة والمملكة العربية السعودية. سواء كنت في شمال أو جنوب أو شرق أو غرب جدة، فريقنا جاهز للوصول إليك وتقديم خدماتنا بأعلى جودة.' },
  { id:2, question:'هل تقدمون ضمان على الأعمال؟', answer:'نعم، نقدم ضماناً على جميع أعمالنا. نحن واثقون من جودة عملنا والمواد التي نستخدمها، لذا نقدم ضماناً يختلف مدده حسب نوع الخدمة. تفاصيل الضمان يتم توضيحها قبل بدء العمل.' },
  { id:3, question:'كم تستغرق مدة تنفيذ المشروع؟', answer:'تختلف مدة التنفيذ حسب حجم وطبيعة المشروع. المشاريع الصغيرة قد تستغرق أياماً معدودة بينما المشاريع الكبيرة كتشطيب فيلا كاملة قد تستغرق أسابيع. نقدم جدولاً زمنياً واضحاً قبل بدء العمل ونلتزم به.' },
  { id:4, question:'هل تقدمون استشارة وتقييم مجاني؟', answer:'نعم، نقدم زيارة معاينة وتقييم أولي مجاني للمشروع. خلال هذه الزيارة يتم تقييم الموقع وتحديد المتطلبات وتقديم تصور مبدئي للعمل والتكلفة المتوقعة.' },
  { id:5, question:'ما هي طرق الدفع المتاحة؟', answer:'نوفر طرق دفع مرنة ومتنوعة تناسب العملاء. يتم الاتفاق على طريقة الدفع وشروط الدفع قبل بدء العمل، وغالباً ما تكون على دفعات مرتبطة بمراحل تقدم المشروع.' },
  { id:6, question:'هل تستخدمون مواد عالية الجودة؟', answer:'نعم، نحرص على استخدام مواد عالية الجودة من موردين موثوقين ومعروفين. نحن نؤمن أن جودة المواد هي أساس جودة العمل النهائي، لذا لا نهاون في اختيار أفضل المواد لكل مشروع.' },
  { id:7, question:'هل يمكنكم تنفيذ مشاريع سكنية وتجارية؟', answer:'نعم، لدينا خبرة في تنفيذ المشاريع السكنية والتجارية على حد سواء. من الشقق والفلل السكنية إلى المكاتب والمحلات التجارية والمنشآت الكبيرة، فريقنا مؤهل للتعامل مع جميع أنواع المشاريع.' },
  { id:8, question:'كيف يمكنني التواصل معكم وطلب الخدمة؟', answer:'يمكنك التواصل معنا عبر الاتصال المباشر على الرقم المخصص، أو عبر الواتساب، أو من خلال نموذج التواصل في الموقع. فريقنا جاهز للرد على استفساراتك وتلبية طلبك في أسرع وقت.' },
];

const features = [
  { icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', title:'ضمان على الأعمال', desc:'نقدم ضماناً شاملاً على جميع أعمالنا لراحة بالك التامة. نحن واثقون من جودة عملنا والمواد التي نستخدمها.' },
  { icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>', title:'فريق محترف', desc:'فريق من الفنيين والمختصين المدربين على أعلى المعايير العالمية بخبرة تزيد عن 15 عاماً في خدمة العملاء.' },
  { icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>', title:'سرعة في التنفيذ', desc:'نلتزم بالمواعيد المتفق عليها ونلتزم بجدول زمني واضح لكل مشروع. وقتك ثمين ونحن نحترم ذلك.' },
  { icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>', title:'مواد عالية الجودة', desc:'نستخدم فقط مواد عالية الجودة من موردين موثوقين ومعروفين. جودة المواد هي أساس جودة العمل النهائي.' },
  { icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20M3 22V8l9-6 9 6v14M9 22v-6h6v6"/></svg>', title:'خدمات متنوعة', desc:'نقدم خدمات متنوعة في مجال التشطيب والترميم. تحت سقف واحد ستجد كل ما تحتاجه لمشروعك.' },
  { icon:'<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>', title:'تصاميم عصرية', desc:'نواكب أحدث التصاميم والاتجاهات العالمية في عالم الديكور والتشطيب لنقدم لك مساحات ساحرة وعصرية.' },
];

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;
  grid.innerHTML = services.map((s, i) => `
    <div class="glass-card reveal" style="transition-delay:${i*80}ms">
      <div class="service-card-header">
        <div class="service-icon-box">${serviceIcons[s.id] || serviceIcons.painting}</div>
        <div>
          <h3>${s.title}</h3>
          <p>${s.shortDesc}</p>
        </div>
      </div>
      <div class="service-tags">
        ${s.features.slice(0,4).map(f => `<span class="service-tag">${f}</span>`).join('')}
      </div>
      <div class="service-keywords"><p>${s.keywords}</p></div>
    </div>
  `).join('');
}

function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  const filtersEl = document.getElementById('portfolio-filters');
  if (!grid || !filtersEl) return;
  const categories = ['الكل', ...new Set(portfolioItems.map(p => p.category))];
  filtersEl.innerHTML = categories.map(c => `<button class="filter-btn${c==='الكل'?' active':''}" data-filter="${c}">${c}</button>`).join('');
  grid.innerHTML = portfolioItems.map((item, i) => `
    <div class="portfolio-item reveal-scale" style="transition-delay:${i*80}ms" data-category="${item.category}">
      <img src="${item.src}" alt="${item.title} - ${item.category} في جدة">
      <div class="portfolio-overlay">
        <div><span class="cat">${item.category}</span><h3>${item.title}</h3></div>
      </div>
    </div>
  `).join('');
  filtersEl.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filtersEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      grid.querySelectorAll('.portfolio-item').forEach(item => {
        if (filter === 'الكل' || item.dataset.category === filter) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

function renderBlog() {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;
  grid.innerHTML = blogPosts.map((post, i) => `
    <article class="blog-card reveal" style="transition-delay:${i*120}ms" onclick="openBlog('${post.id}')">
      <div class="blog-card-img">
        <img src="${post.image}" alt="${post.title} - ${post.category} في جدة">
        <span class="blog-card-cat">${post.category}</span>
      </div>
      <div class="blog-card-body">
        <div class="blog-meta">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${post.date}</span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${post.readTime}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <span class="read-more">اقرا المزيد<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg></span>
      </div>
    </article>
  `).join('');
}

function renderFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;
  list.innerHTML = faqItems.map((item, i) => `
    <div class="faq-item${i===0?' open':''} reveal" style="transition-delay:${i*60}ms" data-id="${item.id}">
      <button class="faq-question" onclick="toggleFAQ(${item.id})">
        <span>${item.question}</span>
        <div class="faq-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>
      </button>
      <div class="faq-answer"><p>${item.answer}</p></div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = testimonials.map((t, i) => `
    <div class="testimonial-card reveal" style="transition-delay:${(i%4)*80}ms">
      <div class="testimonial-header">
        <div class="testimonial-quote"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg></div>
        <div class="testimonial-stars">${'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'.repeat(t.rating)}</div>
      </div>
      <p class="testimonial-text">${t.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div>
          <p class="testimonial-name">${t.name}</p>
          <p class="testimonial-role">${t.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderWhyUs() {
  const grid = document.getElementById('why-grid');
  if (!grid) return;
  grid.innerHTML = features.map((f, i) => `
    <div class="why-card reveal" style="transition-delay:${i*100}ms">
      <span class="why-number">${i+1}</span>
      <div class="why-card-content">
        <div class="why-icon">${f.icon}</div>
        <h3>${f.title}</h3>
        <p>${f.desc}</p>
      </div>
    </div>
  `).join('');
}

function navigateTo(href) {
  closeMobileMenu();
  if (href === '#home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}

function openMobileMenu() {
  document.getElementById('mobile-menu').classList.add('open');
  document.getElementById('mobile-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function toggleFAQ(id) {
  const item = document.querySelector(`.faq-item[data-id="${id}"]`);
  if (item) item.classList.toggle('open');
}

function openBlog(postId) {
  window.location.href = `details.html?id=${postId}`;
}

let statsAnimated = false;
function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  document.querySelectorAll('.stat-number').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, 25);
  });
}

function initScrollSpy() {
  const sections = ['home','about','services','portfolio','blog','faq','testimonials','why','contact'];
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;
    let current = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        if (scrollY >= top) current = id;
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.section === current);
    });
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 30);
    document.getElementById('scroll-top').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if (entry.target.closest('#stats-grid') || entry.target.classList.contains('stat-card')) {
          setTimeout(animateStats, 300);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderPortfolio();
  renderBlog();
  renderFAQ();
  renderTestimonials();
  renderWhyUs();
  initScrollSpy();
  initRevealObserver();
});
