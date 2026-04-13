const defaultConfig = {
      background_color: '#0a0a0f',
      surface_color: '#15151e',
      text_color: '#e8e6e1',
      primary_action: '#c8f45c',
      secondary_action: '#6e6bff',
      font_family: 'Syne',
      font_size: 16,
      hero_name: 'Ahmad Haedar',
      hero_tagline: 'Developer',
      hero_description: 'Saya membangun pengalaman digital yang indah, fungsional, dan berkesan. Mari bekerja sama untuk mewujudkan ide Anda.',
      about_text: 'Saya adalah seorang developer dan desainer dengan pengalaman 1+ tahun menciptakan website dan aplikasi yang tidak hanya terlihat indah, tetapi juga memberikan pengalaman pengguna yang luar biasa. Saya percaya pada kekuatan desain yang bersih dan kode yang efisien.',
      contact_email: 'hadid03012001@email.com'
    };
    const themePalettes = {
      dark: {
        background_color: '#0a0a0f',
        surface_color: '#15151e',
        text_color: '#e8e6e1',
        primary_action: '#c8f45c',
        secondary_action: '#6e6bff'
      },
      light: {
        background_color: '#f8f8f4',
        surface_color: '#ffffff',
        text_color: '#111418',
        primary_action: '#2f6fed',
        secondary_action: '#17a086'
      }
    };
    const themeStorageKey = 'portfolio-theme';
    const savedTheme = (() => {
      try {
        return localStorage.getItem(themeStorageKey);
      } catch (err) {
        return null;
      }
    })();
    let currentTheme = savedTheme === 'light' ? 'light' : 'dark';
    let runtimeConfig = { ...defaultConfig, ...themePalettes[currentTheme] };

    const projects = [
      {
        title: 'RumahData Kelurahan Kapasa',
        desc: 'Website profil kelurahan dengan data dinamis berbasis CSV, partial rendering, dan formulir POKTAN terintegrasi Google Apps Script.',
        tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'Google Apps Script'],
        icon: 'building-2',
        images: [
          { src: 'assets/images/projects/rumahdataku-home.png', alt: 'Halaman utama RumahDataku' },
          { src: 'assets/images/projects/rumahdataku-form.png', alt: 'Form input data RumahDataku' },
          { src: 'assets/images/projects/rumahdataku-poktan.png', alt: 'Halaman POKTAN RumahDataku' }
        ],
        highlight: 'Data kelurahan bisa diupdate non-teknis via Excel/CSV',
        proof: 'Project aktif di folder: C:/laragon/www/Hadid512.github.io/rumahdata',
        demoUrl: 'https://rumahdataku-kapasa.vercel.app/'
      },
      {
        title: 'Dokumentasi Kegiatan RumahData',
        desc: 'Galeri kegiatan lapangan sebagai bukti implementasi nyata, memperkuat kredibilitas website profil kelurahan.',
        tags: ['Dokumentasi', 'Konten Lapangan', 'Publikasi'],
        icon: 'image',
        image: 'assets/images/projects/rumahdata-kegiatan.jpeg',
        imageAlt: 'Dokumentasi kegiatan lapangan RumahData',
        highlight: 'Konten aktual dari kegiatan warga dan kelurahan',
        proof: 'Sumber gambar asli dari folder assets/images/foto_kegiatan',
        demoUrl: 'https://rumahdataku-kapasa.vercel.app/'
      },
      {
        title: 'SIMRS V2 (Sistem Informasi RS)',
        desc: 'Sistem informasi rumah sakit berbasis PHP dengan modul layanan klinis, integrasi BPJS, dan alur kerja operasional harian.',
        tags: ['PHP 7', 'MySQL', 'Composer', 'Bootstrap'],
        icon: 'hospital',
        image: 'assets/images/projects/simrs-v2-panel.png',
        imageAlt: 'Panel instalasi dan dokumentasi SIMRS V2',
        highlight: 'Dikembangkan pada codebase enterprise multi-modul',
        proof: 'Project aktif di folder: C:/laragon/www/Kerja/v2',
        demoUrl: '/Kerja/v2/index.php'
      }
    ];

    const skills = [
      'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Next.js', 'Node.js',
      'Tailwind CSS', 'Figma', 'Python', 'PostgreSQL', 'Git', 'Docker',
      'GraphQL', 'AWS', 'UI/UX Design'
    ];

    function renderProjects(cfg) {
      const grid = document.getElementById('projects-grid');
      grid.innerHTML = '';
      projects.forEach((p, i) => {
        const slides = Array.isArray(p.images) && p.images.length > 0
          ? p.images
          : [{ src: p.image, alt: p.imageAlt || p.title }];
        const carouselId = `project-carousel-${i}`;
        const card = document.createElement('div');
        card.className = 'project-card rounded-3xl p-6 scroll-reveal border';
        card.style.background = cfg.surface_color;
        card.style.borderColor = cfg.secondary_action + '15';
        card.style.boxShadow = `0 0 0 0 transparent`;
        card.onmouseenter = () => card.style.boxShadow = `0 30px 80px ${cfg.primary_action}15`;
        card.onmouseleave = () => card.style.boxShadow = `0 0 0 0 transparent`;
        card.innerHTML = `
          <div class="project-cover mb-5" id="${carouselId}" data-carousel data-total="${slides.length}">
            <div class="project-slides">
              ${slides.map((s, idx) => `
                <div class="project-slide ${idx === 0 ? 'active' : ''}" data-slide="${idx}">
                  <img src="${s.src}" alt="${s.alt}" class="project-cover-img" loading="lazy">
                </div>
              `).join('')}
            </div>
            ${slides.length > 1 ? `
              <button class="project-carousel-btn project-carousel-prev" type="button" data-carousel-prev="${carouselId}" aria-label="Gambar sebelumnya">
                <i data-lucide="chevron-left" style="width:16px;height:16px;"></i>
              </button>
              <button class="project-carousel-btn project-carousel-next" type="button" data-carousel-next="${carouselId}" aria-label="Gambar berikutnya">
                <i data-lucide="chevron-right" style="width:16px;height:16px;"></i>
              </button>
              <div class="project-carousel-dots">
                ${slides.map((_, idx) => `
                  <button class="project-dot ${idx === 0 ? 'active' : ''}" type="button" data-carousel-dot="${carouselId}" data-index="${idx}" aria-label="Lihat gambar ${idx + 1}"></button>
                `).join('')}
              </div>
            ` : ''}
          </div>
          <div class="project-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center mb-4" style="background:${cfg.primary_action}18; color:${cfg.primary_action}; transition: transform 0.4s ease;">
            <i data-lucide="${p.icon}" style="width:22px;height:22px;"></i>
          </div>
          <h3 class="font-heading font-700 text-xl mb-2" style="color:${cfg.text_color}">${p.title}</h3>
          <p class="text-sm opacity-70 mb-3" style="color:${cfg.text_color}">${p.desc}</p>
          <p class="text-xs font-semibold mb-2" style="color:${cfg.primary_action}">${p.highlight}</p>
          <p class="text-xs opacity-60 mb-5" style="color:${cfg.text_color}">${p.proof}</p>
          <div class="flex flex-wrap gap-2 mb-5">
            ${p.tags.map(t => `<span class="text-xs px-3 py-1 rounded-full font-medium transition hover:scale-110" style="background:${cfg.secondary_action}18; color:${cfg.secondary_action}">${t}</span>`).join('')}
          </div>
          <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border project-link" style="color:${cfg.text_color}; border-color:${cfg.text_color}35;">
            Lihat Proyek
            <i data-lucide="external-link" style="width:14px;height:14px;"></i>
          </a>
        `;
        card.onmouseenter = () => {
          card.style.boxShadow = `0 30px 80px ${cfg.primary_action}15`;
          const iconWrap = card.querySelector('.project-icon-wrap');
          if (iconWrap) {
            iconWrap.style.transform = 'rotateY(180deg) scale(1.2)';
          }
        };
        card.onmouseleave = () => {
          card.style.boxShadow = `0 0 0 0 transparent`;
          const iconWrap = card.querySelector('.project-icon-wrap');
          if (iconWrap) {
            iconWrap.style.transform = 'rotateY(0deg) scale(1)';
          }
        };
        grid.appendChild(card);
      });
      initProjectCarousels();
    }

    function initProjectCarousels() {
      document.querySelectorAll('[data-carousel]').forEach((root) => {
        if (root.dataset.bound === '1') return;
        root.dataset.bound = '1';

        const slides = Array.from(root.querySelectorAll('.project-slide'));
        const dots = Array.from(root.querySelectorAll('.project-dot'));
        if (slides.length <= 1) return;

        const carouselId = root.id;
        let activeIndex = 0;
        let startX = null;

        const setActive = (nextIndex) => {
          activeIndex = (nextIndex + slides.length) % slides.length;
          slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === activeIndex);
          });
          dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === activeIndex);
          });
        };

        const prevBtn = document.querySelector(`[data-carousel-prev="${carouselId}"]`);
        const nextBtn = document.querySelector(`[data-carousel-next="${carouselId}"]`);

        if (prevBtn) {
          prevBtn.addEventListener('click', () => setActive(activeIndex - 1));
        }
        if (nextBtn) {
          nextBtn.addEventListener('click', () => setActive(activeIndex + 1));
        }
        dots.forEach((dot) => {
          dot.addEventListener('click', () => {
            setActive(Number(dot.dataset.index || 0));
          });
        });

        root.addEventListener('pointerdown', (event) => {
          startX = event.clientX;
        });
        root.addEventListener('pointerup', (event) => {
          if (startX === null) return;
          const deltaX = event.clientX - startX;
          if (Math.abs(deltaX) > 40) {
            setActive(activeIndex + (deltaX < 0 ? 1 : -1));
          }
          startX = null;
        });
        root.addEventListener('pointercancel', () => {
          startX = null;
        });
      });
    }

    function renderSkills(cfg) {
      const container = document.getElementById('skills-container');
      container.innerHTML = '';
      skills.forEach(s => {
        const pill = document.createElement('span');
        pill.className = 'skill-pill px-5 py-2.5 rounded-full text-sm font-medium border cursor-default';
        pill.style.background = cfg.surface_color;
        pill.style.color = cfg.text_color;
        pill.style.borderColor = cfg.text_color + '15';
        pill.textContent = s;
        pill.onmouseenter = () => { pill.style.background = cfg.primary_action; pill.style.color = cfg.background_color; pill.style.borderColor = cfg.primary_action; };
        pill.onmouseleave = () => { pill.style.background = cfg.surface_color; pill.style.color = cfg.text_color; pill.style.borderColor = cfg.text_color + '15'; };
        container.appendChild(pill);
      });
    }

    function applyConfig(cfg) {
      const bg = cfg.background_color || defaultConfig.background_color;
      const sf = cfg.surface_color || defaultConfig.surface_color;
      const tx = cfg.text_color || defaultConfig.text_color;
      const pa = cfg.primary_action || defaultConfig.primary_action;
      const sa = cfg.secondary_action || defaultConfig.secondary_action;
      const ff = cfg.font_family || defaultConfig.font_family;
      const fs = cfg.font_size || defaultConfig.font_size;

      document.body.style.background = bg;
      document.body.style.color = tx;

      // Heading font
      document.querySelectorAll('.font-heading').forEach(el => el.style.fontFamily = `${ff}, Syne, sans-serif`);
      document.querySelectorAll('.font-body, body').forEach(el => el.style.fontFamily = `DM Sans, ${ff}, sans-serif`);

      // Font sizes
      const heroName = document.getElementById('hero-name');
      heroName.textContent = cfg.hero_name || defaultConfig.hero_name;

      const heroTag = document.getElementById('hero-tagline');
      heroTag.textContent = cfg.hero_tagline || defaultConfig.hero_tagline;

      const heroDesc = document.getElementById('hero-description');
      heroDesc.textContent = cfg.hero_description || defaultConfig.hero_description;
      heroDesc.style.fontSize = `${fs}px`;

      const aboutText = document.getElementById('about-text');
      aboutText.textContent = cfg.about_text || defaultConfig.about_text;
      aboutText.style.fontSize = `${fs}px`;

      const email = cfg.contact_email || defaultConfig.contact_email;
      document.getElementById('contact-email-text').textContent = email;
      document.getElementById('contact-email-link').href = `mailto:${email}`;

      // Nav
      document.getElementById('navbar').style.background = bg + 'dd';

      // Blobs
      document.getElementById('blob1').style.background = pa;
      document.getElementById('blob2').style.background = sa;

      // Hero badge
      const badge = document.getElementById('hero-badge');
      badge.style.borderColor = tx + '20';
      badge.style.color = tx;

      // CTAs
      const cta = document.getElementById('hero-cta');
      cta.style.background = pa;
      cta.style.color = bg;

      const cta2 = document.getElementById('hero-cta2');
      cta2.style.borderColor = tx + '30';
      cta2.style.color = tx;

      // About section
      document.getElementById('about-img-bg').style.background = sf;
      document.getElementById('about-img-bg').style.color = sa;
      const expBadge = document.getElementById('about-exp-badge');
      expBadge.style.background = pa;
      expBadge.style.color = bg;

      [document.getElementById('stat1'), document.getElementById('stat2'), document.getElementById('stat3')].forEach(s => {
        s.style.background = sf;
      });

      // Contact button
      const contactBtn = document.getElementById('contact-email-link');
      contactBtn.style.background = pa;
      contactBtn.style.color = bg;

      // Nav link underlines
      document.querySelectorAll('.nav-link').forEach(l => {
        l.style.color = tx;
      });
      document.documentElement.style.setProperty('--nav-underline', pa);

      const themeToggleBtn = document.getElementById('theme-toggle-btn');
      if (themeToggleBtn) {
        themeToggleBtn.style.borderColor = tx + '30';
        themeToggleBtn.style.color = tx;
        themeToggleBtn.style.background = sf;
      }

      renderProjects(cfg);
      renderSkills(cfg);

      lucide.createIcons();
      initScrollReveal();
    }

    function initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
      }, { threshold: 0.1 });
      document.querySelectorAll('.scroll-reveal').forEach(el => {
        if (!el.classList.contains('visible')) observer.observe(el);
      });
    }

    function createParticles() {
      const container = document.getElementById('app-wrapper');
      const particleCount = 12;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 8 + 12;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.top = '-10px';
        particle.style.animation = `particleFall ${duration}s linear ${delay}s infinite`;
        particle.style.background = `rgba(200, 244, 92, ${Math.random() * 0.3 + 0.1})`;
        container.appendChild(particle);
      }
    }

    function updateThemeToggleUI() {
      const themeText = document.getElementById('theme-toggle-text');
      const themeIcon = document.getElementById('theme-toggle-icon');
      const themeButton = document.getElementById('theme-toggle-btn');
      const isLight = currentTheme === 'light';

      if (themeText) {
        themeText.textContent = isLight ? 'Terang' : 'Gelap';
      }
      if (themeIcon) {
        themeIcon.setAttribute('data-lucide', isLight ? 'sun' : 'moon');
      }
      if (themeButton) {
        themeButton.setAttribute('aria-label', isLight ? 'Mode terang aktif. Klik untuk pindah ke mode gelap' : 'Mode gelap aktif. Klik untuk pindah ke mode terang');
      }
    }

    function setTheme(mode, syncSdk = true) {
      currentTheme = mode === 'light' ? 'light' : 'dark';
      runtimeConfig = { ...runtimeConfig, ...themePalettes[currentTheme] };
      updateThemeToggleUI();
      applyConfig(runtimeConfig);
      try {
        localStorage.setItem(themeStorageKey, currentTheme);
      } catch (err) {
        // Ignore localStorage write failures
      }
      if (syncSdk && window.elementSdk && typeof window.elementSdk.setConfig === 'function') {
        window.elementSdk.setConfig(themePalettes[currentTheme]);
      }
    }

    // Mobile menu
    document.getElementById('mobile-menu-btn').addEventListener('click', () => {
      const m = document.getElementById('mobile-menu');
      m.classList.toggle('hidden');
    });
    document.querySelectorAll('#mobile-menu a').forEach(a => {
      a.addEventListener('click', () => document.getElementById('mobile-menu').classList.add('hidden'));
    });

    // Initialize particles on load
    createParticles();
    updateThemeToggleUI();
    setTheme(currentTheme, false);

    const themeToggleButton = document.getElementById('theme-toggle-btn');
    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
      });
    }

    // Element SDK
    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => {
        runtimeConfig = { ...runtimeConfig, ...config, ...themePalettes[currentTheme] };
        applyConfig(runtimeConfig);
      },
      mapToCapabilities: (config) => ({
        recolorables: [
          { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
          { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
          { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
          { get: () => config.primary_action || defaultConfig.primary_action, set: (v) => { config.primary_action = v; window.elementSdk.setConfig({ primary_action: v }); } },
          { get: () => config.secondary_action || defaultConfig.secondary_action, set: (v) => { config.secondary_action = v; window.elementSdk.setConfig({ secondary_action: v }); } }
        ],
        borderables: [],
        fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },
        fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }
      }),
      mapToEditPanelValues: (config) => new Map([
        ['hero_name', config.hero_name || defaultConfig.hero_name],
        ['hero_tagline', config.hero_tagline || defaultConfig.hero_tagline],
        ['hero_description', config.hero_description || defaultConfig.hero_description],
        ['about_text', config.about_text || defaultConfig.about_text],
        ['contact_email', config.contact_email || defaultConfig.contact_email]
      ])
    });
