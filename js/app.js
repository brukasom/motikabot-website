document.addEventListener('DOMContentLoaded', () => {
  // --- Translations / Language Selector System ---
  const languageSelector = document.getElementById('language-select');
  const mobileLanguageSelector = document.getElementById('mobile-language-select');
  
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  function detectLanguage() {
    const queryLang = getQueryParam('lang');
    if (queryLang && translations[queryLang]) return queryLang;

    const storedLang = localStorage.getItem('motikabot_lang');
    if (storedLang && translations[storedLang]) return storedLang;

    const browserLang = navigator.language.split('-')[0];
    if (browserLang && translations[browserLang]) return browserLang;

    return 'en'; // default
  }

  function applyTranslations(lang) {
    const dictionary = translations[lang];
    if (!dictionary) return;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dictionary[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dictionary[key];
        } else {
          el.innerHTML = dictionary[key];
        }
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dictionary[key]) {
        el.placeholder = dictionary[key];
      }
    });

    if (languageSelector) languageSelector.value = lang;
    if (mobileLanguageSelector) mobileLanguageSelector.value = lang;
    
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem('motikabot_lang', lang);
    applyTranslations(lang);
  }

  if (languageSelector) {
    languageSelector.addEventListener('change', (e) => setLanguage(e.target.value));
  }
  if (mobileLanguageSelector) {
    mobileLanguageSelector.addEventListener('change', (e) => setLanguage(e.target.value));
  }

  const activeLang = detectLanguage();
  setLanguage(activeLang);


  // --- Mobile Hamburger Menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('open');
    });

    mobileNav.querySelectorAll('a:not(.dropdown-toggle)').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('open');
      });
    });
  }

  const mobileDropdownToggles = document.querySelectorAll('.mobile-nav .dropdown-toggle');
  mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const parent = toggle.parentElement;
      parent.classList.toggle('active');
    });
  });

  // --- Phone Mockup Slider System ---
  const phoneTrack = document.getElementById('phone-slider-track');
  const phonePrevBtn = document.getElementById('phone-arrow-left');
  const phoneNextBtn = document.getElementById('phone-arrow-right');
  const phoneDotsContainer = document.getElementById('phone-slider-dots');

  if (phoneTrack) {
    const slides = Array.from(phoneTrack.children);
    let currentIndex = 0;

    // Create dots indicator
    if (phoneDotsContainer && slides.length > 0) {
      phoneDotsContainer.innerHTML = '';
      slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = `phone-slider-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          goToSlide(index);
        });
        phoneDotsContainer.appendChild(dot);
      });
    }

    const dots = phoneDotsContainer ? Array.from(phoneDotsContainer.children) : [];

    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      
      currentIndex = index;
      // Shift by 100 / slides.length per slide index (e.g. 16.66% per slide when count is 6)
      const shiftPercentage = currentIndex * (100 / slides.length);
      phoneTrack.style.transform = `translateX(-${shiftPercentage}%)`;
      
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
      });
    }

    if (phonePrevBtn) {
      phonePrevBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
      });
    }

    if (phoneNextBtn) {
      phoneNextBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
      });
    }

    // Auto rotate every 4 seconds
    let autoSlideInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 4000);

    const pauseAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };

    if (phonePrevBtn) phonePrevBtn.addEventListener('click', pauseAutoSlide);
    if (phoneNextBtn) phoneNextBtn.addEventListener('click', pauseAutoSlide);
    dots.forEach(dot => dot.addEventListener('click', pauseAutoSlide));
  }
});
