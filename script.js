/**
 * El Hamed Company - Bilingual (Arabic / English)
 * Smooth scroll, scroll animations, nav behavior, footer year, language switch
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'elhamed-lang';

  const translations = {
    en: {
      pageTitle: 'El Hamed Company | Premium Poultry & Agricultural Farms',
      metaDescription: 'El Hamed Company - Premium poultry sales and high-tech agricultural farm construction.',
      nav: {
        home: 'Home',
        services: 'Services',
        features: 'Features',
        contact: 'Contact',
        ariaLogo: 'El Hamed Company Home',
        ariaToggle: 'Toggle menu'
      },
      hero: {
        label: 'Premium Poultry & Farm Solutions',
        title1: 'El Hamed',
        title2: 'Excellence in Agriculture',
        subtitle: 'From premium chickens to state-of-the-art farm construction — El Hamed delivers quality and innovation for modern agriculture.',
        ctaServices: 'Our Services',
        ctaContact: 'Get in Touch',
        scroll: 'Scroll',
        imgAlt: 'El Hamed poultry farm'
      },
      section: {
        whatWeOffer: 'What We Offer',
        subtitlePillars: 'Two pillars of agricultural excellence'
      },
      poultry: {
        title: 'Poultry Sales',
        text: 'Premium chickens bred for health and productivity. We supply farms and businesses with top-tier poultry backed by strict quality standards.',
        learnMore: 'Learn More',
        imgAlt: 'Premium poultry from El Hamed'
      },
      construction: {
        title: 'Farm Construction',
        text: 'Design and build high-tech agricultural facilities. From climate control to automation — we deliver farms built for the future.',
        learnMore: 'Learn More',
        imgAlt: 'High-tech agricultural farm'
      },
      constructionModal: {
        title: 'Farm Construction Details',
        subtitle: 'Additional services for farm construction and setup.',
        closeAria: 'Close farm construction details',
        coolingFilter: 'Cooling filter cardboard',
        irrigation: 'Irrigation network setup (desert land)',
        solar: 'Solar energy',
        labor: 'Labor supply for projects that follow us only'
      },
      modal: {
        title: 'Poultry Sales Details',
        subtitle: 'High-line & Lohmann chickens, plus high-capacity batteries for your farm.',
        closeAria: 'Close poultry details',
        typesHeading: 'Chicken Types & Pricing',
        types1: '<strong>Types</strong>: High Line and Lohmann.',
        types2: '<strong>Age</strong>: 100 days and more.',
        types3: '<strong>Price</strong>: Based on the agreed day price.',
        types4: '',
        batteryHeading: 'Battery Systems',
        battery1: '<strong>3-floor battery</strong>: width 150 cm, length 2 m. Holds up to 150 white chickens or 120 brown chickens.',
        battery2: '<strong>4-floor battery</strong>: width 150 cm, length 2 m. Holds up to 200 white chickens or 180 brown chickens.',
        battery3: '<strong>Structure thickness</strong>: 3.5 mm.',
        battery4: '<strong>Turkish nipple</strong>: 360° drinking system.',
        battery5: '<strong>Drinking cups</strong>: pure plastic that does not rust.',
        battery6: '<strong>Operation</strong>: available in both automatic and manual options.',
        batteryImgAlt: 'Battery cage system for egg production at El Hamed',
        batteryCaption: 'Our battery cage system in operation'
      },
      features: {
        title: 'Why Choose El Hamed',
        subtitle: 'Built on expertise and trust'
      },
      feature: {
        biosecurity: {
          title: 'Biosecurity',
          text: 'Rigorous health protocols and controlled environments ensure safe, disease-free poultry and facilities.'
        },
        engineering: {
          title: 'Expert Engineering',
          text: 'Our team designs and builds farms with precision — ventilation, automation, and scalability in mind.'
        },
        support: {
          title: '24/7 Support',
          text: "From installation to operation, we're here around the clock to keep your farm running smoothly."
        }
      },
      contact: {
        title: 'Ready to Grow With Us?',
        text: "Whether you need premium poultry or a new high-tech farm — let's build something great together.",
        cta: 'Contact Us'
      },
      footer: {
        desc: 'Premium poultry and high-tech agricultural farm construction.',
        quickLinks: 'Quick Links',
        services: 'Services',
        contact: 'Contact',
        copyright: 'El Hamed Company. All rights reserved.'
      }
    },
    ar: {
      pageTitle: 'شركة الحمد | دواجن مميزة ومزارع زراعية',
      metaDescription: 'شركة الحمد - مبيعات دواجن مميزة وإنشاء مزارع زراعية عالية التقنية.',
      nav: {
        home: 'الرئيسية',
        services: 'الخدمات',
        features: 'المميزات',
        contact: 'اتصل بنا',
        ariaLogo: 'الصفحة الرئيسية لشركة الحمد',
        ariaToggle: 'فتح القائمة'
      },
      hero: {
        label: 'حلول دواجن ومزارع مميزة',
        title1: 'الحمد',
        title2: 'التميز في صناعة الدواجن',
        subtitle: 'الدواجن المميزة و إنشاء المزارع بأحدث التقنيات — الحمد يقدم الجودة والابتكار للتربية الحديثة.',
        ctaServices: 'خدماتنا',
        ctaContact: 'تواصل معنا',
        scroll: 'تمرير',
        imgAlt: 'مزرعة دواجن الحمد'
      },
      section: {
        whatWeOffer: 'ما نقدمه',
        subtitlePillars: 'ركيزة  للتميز الزراعي'
      },
      poultry: {
        title: 'مبيعات الدواجن',
        text: 'نورد الدجاح للمزارع و المؤسسسات بأعلى المستويات وفق معاير و جودة صارمة',
        learnMore: 'اعرف المزيد',
        imgAlt: 'دواجن مميزة من الحمد'
      },
      construction: {
        title: 'إنشاء المزارع',
        text: 'تصميم شبكات الري عالية الجودة بأفضل خامات',
        learnMore: 'اعرف المزيد',
        imgAlt: 'مزرعة زراعية عالية التقنية'
      },
      constructionModal: {
        title: 'تفاصيل إنشاء المزارع',
        subtitle: 'خدمات إضافية لإنشاء وتجهيز المزارع.',
        closeAria: 'إغلاق تفاصيل إنشاء المزارع',
        coolingFilter: 'فلتر تبريد ورق مقوى',
        irrigation: 'تجهيز شبكات الري (الاراضي الصحراوية)',
        solar: 'طاقة شمسية',
        labor: 'توريد عمالة للمشاريع التي تتبع لنا فقط'
      },
      modal: {
        title: 'تفاصيل مبيعات الدواجن',
        subtitle: 'دجاج هاي لاين ولوهمان، وبطاريات عالية السعة لمزرعتك.',
        closeAria: 'إغلاق تفاصيل الدواجن',
        typesHeading: 'أنواع الدجاج والأسعار',
        types1: '<strong>الأنواع:</strong> هاي لاين ولوهمان.',
        types2: '<strong>العمر:</strong> 100 يوم فأكثر.',
        types3: '<strong>السعر:</strong> حسب سعر يوم الاتفاق.',
        types4: '',
        batteryHeading: 'أنظمة البطاريات',
        battery1: '<strong>بطارية 3 طوابق:</strong> العرض 150 سم، الطول 2 م. تتسع حتى 150 دجاجة بيضاء أو 120 بنية.',
        battery2: '<strong>بطارية 4 طوابق:</strong> العرض 150 سم، الطول 2 م. تتسع حتى 200 دجاجة بيضاء أو 180 بنية.',
        battery3: '<strong>سمك الهيكل:</strong> 3.5 مم.',
        battery4: '<strong>نبل تركي(نقاط مياه:</strong> نظام شرب 360 درجة.',
        battery5: '<strong>أكواب الشرب:</strong> بلاستيك نقي لا يصدأ.',
        battery6: '<strong>التشغيل:</strong> متاح يدويًا وآليًا.',
        batteryImgAlt: 'نظام بطاريات لإنتاج البيض في الحمد',
        batteryCaption: 'دجاج هاي لاين ولوهمان — ١٠٠ يوم وأكثر'
      },
      features: {
        title: 'لماذا تختار الحمد',
        subtitle: 'قائم على الخبرة والثقة'
      },
      feature: {
        biosecurity: {
          title: 'الأمان الحيوي',
          text: 'بروتوكولات صحية صارمة وبيئات خاضعة للرقابة لضمان دواجن ومنشآت آمنة وخالية من الأمراض.'
        },
        engineering: {
          title: 'هندسة خبراء',
          text: 'يصمم فريقنا المزارع ويبنيها بدقة — مع مراعاة التهوية والاعتمادية والقابلية للتوسع.'
        },
        support: {
          title: 'دعم على مدار الساعة',
          text: 'من التركيب إلى التشغيل، نحن معك على مدار الساعة لإبقاء مزرعتك تعمل بسلاسة. حتى بعد الانشاء الخدمة على مدار الساعة.'
        }
      },
      contact: {
        title: 'مستعد للنمو معنا؟',
        text: 'سواء كنت تحتاج دواجن مميزة أو مزرعة جديدة عالية التقنية — لِنبنِ معًا شيئًا رائعًا.',
        cta: 'اتصل بنا'
      },
      footer: {
        desc: 'مبيعات دواجن مميزة وإنشاء مزارع زراعية عالية التقنية.',
        quickLinks: 'روابط سريعة',
        services: 'الخدمات',
        contact: 'اتصل بنا',
        copyright: 'شركة الحمد. جميع الحقوق محفوظة.'
      }
    }
  };

  function getNested(obj, path) {
    return path.split('.').reduce(function (o, k) { return (o && o[k] !== undefined) ? o[k] : undefined; }, obj);
  }

  function getLang() {
    var stored = typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY);
    return (stored === 'en' || stored === 'ar') ? stored : 'ar';
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'ar') return;
    if (typeof localStorage !== 'undefined') localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('lang-ar', lang === 'ar');
    document.documentElement.classList.toggle('lang-en', lang === 'en');
    applyLanguage(lang);
    updateLangSwitcher(lang);
  }

  function applyLanguage(lang) {
    var t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = getNested(t, key);
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = getNested(t, key);
      if (val !== undefined) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      var val = getNested(t, key);
      if (val !== undefined) el.setAttribute('alt', val);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      var val = getNested(t, key);
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    var titleEl = document.getElementById('page-title');
    if (titleEl && t.pageTitle) titleEl.textContent = t.pageTitle;

    var metaDesc = document.getElementById('meta-description');
    if (metaDesc && t.metaDescription) metaDesc.setAttribute('content', t.metaDescription);
  }

  function updateLangSwitcher(lang) {
    var wrapper = document.getElementById('lang-switcher');
    if (!wrapper) return;
    wrapper.querySelectorAll('.lang-switcher__opt').forEach(function (opt) {
      opt.classList.remove('is-active');
      if ((opt.classList.contains('lang-switcher__opt--en') && lang === 'en') ||
          (opt.classList.contains('lang-switcher__opt--ar') && lang === 'ar')) {
        opt.classList.add('is-active');
      }
    });
  }

  // ----- Init: apply saved language first -----
  var currentLang = getLang();
  setLang(currentLang);

  // ----- Language switcher -----
  var langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    langSwitcher.querySelector('.lang-switcher__opt--en').addEventListener('click', function () {
      setLang('en');
    });
    langSwitcher.querySelector('.lang-switcher__opt--ar').addEventListener('click', function () {
      setLang('ar');
    });
  }

  // ----- Rest of app -----
  var header = document.getElementById('header');
  var navToggle = document.getElementById('nav-toggle');
  var navMenu = document.getElementById('nav-menu');
  var navLinks = document.querySelectorAll('.nav__link');
  var animateTargets = document.querySelectorAll('[data-animate]');
  var yearEl = document.getElementById('year');

  function updateHeaderScroll() {
    if (window.scrollY > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderScroll, { passive: true });
  updateHeaderScroll();

  function openMenu() {
    navMenu.classList.add('is-open');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navMenu.classList.contains('is-open')) closeMenu();
      else openMenu();
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () { closeMenu(); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('is-open')) closeMenu();
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (this.dataset.modalTrigger) return;
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  var poultryModal = document.getElementById('poultry-modal');
  var poultryTrigger = document.querySelector('[data-modal-trigger="poultry-modal"]');
  var poultryCloseEls = document.querySelectorAll('[data-modal-close="poultry-modal"]');

  function openPoultryModal() {
    if (!poultryModal) return;
    poultryModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closePoultryModal() {
    if (!poultryModal) return;
    poultryModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (poultryTrigger && poultryModal) {
    poultryTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      openPoultryModal();
    });
  }

  if (poultryCloseEls.length) {
    poultryCloseEls.forEach(function (el) {
      el.addEventListener('click', function () { closePoultryModal(); });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && poultryModal && poultryModal.classList.contains('is-open')) {
      closePoultryModal();
    }
  });

  var constructionModal = document.getElementById('construction-modal');
  var constructionTrigger = document.querySelector('[data-modal-trigger="construction-modal"]');
  var constructionCloseEls = document.querySelectorAll('[data-modal-close="construction-modal"]');

  function openConstructionModal() {
    if (!constructionModal) return;
    constructionModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeConstructionModal() {
    if (!constructionModal) return;
    constructionModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (constructionTrigger && constructionModal) {
    constructionTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      openConstructionModal();
    });
  }

  if (constructionCloseEls.length) {
    constructionCloseEls.forEach(function (el) {
      el.addEventListener('click', function () { closeConstructionModal(); });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && constructionModal && constructionModal.classList.contains('is-open')) {
      closeConstructionModal();
    }
  });

  var observerOptions = { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.15 };
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('animate-in');
    });
  }, observerOptions);
  animateTargets.forEach(function (el) { observer.observe(el); });

  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

