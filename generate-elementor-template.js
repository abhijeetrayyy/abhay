const fs = require('fs');

// ── ID Generator ──
let _id = 0x1a00000;
const uid = () => (_id++).toString(16);

// ── Helpers ──
const px = (s) => ({ unit: 'px', size: s, sizes: [] });
const em = (s) => ({ unit: 'em', size: s, sizes: [] });
const pad = (t, r, b, l) => ({ unit: 'px', top: String(t), right: String(r), bottom: String(b), left: String(l), isLinked: false });

function typo(prefix, o) {
  const r = {}; r[`${prefix}_typography`] = 'custom';
  if (o.f) r[`${prefix}_font_family`] = o.f;
  if (o.s) r[`${prefix}_font_size`] = px(o.s);
  if (o.w) r[`${prefix}_font_weight`] = String(o.w);
  if (o.i) r[`${prefix}_font_style`] = 'italic';
  if (o.t) r[`${prefix}_text_transform`] = o.t;
  if (o.ls) r[`${prefix}_letter_spacing`] = px(o.ls);
  if (o.lh) r[`${prefix}_line_height`] = em(o.lh);
  return r;
}

const sec = (settings, cols, inner = false) => ({ id: uid(), elType: 'section', settings, elements: cols, isInner: inner });
const col = (size, settings, widgets) => ({ id: uid(), elType: 'column', settings: { _column_size: size, _inline_size: size, ...settings }, elements: widgets });
const w = (type, settings) => ({ id: uid(), elType: 'widget', widgetType: type, settings });

const heading = (title, tag, color, typoOpts, extra = {}) => w('heading', { title, header_size: tag, title_color: color, ...typo('typography', typoOpts), ...extra });
const text = (html, color, typoOpts, extra = {}) => w('text-editor', { editor: html, text_color: color, ...typo('typography', typoOpts), ...extra });
const btn = (label, url, bg, txtColor, typoOpts, extra = {}) => w('button', { text: label, link: { url, is_external: 'on', nofollow: '' }, background_color: bg, button_text_color: txtColor, ...typo('typography', typoOpts), border_border: 'none', border_radius: px(4), ...extra });
const spacer = (h) => w('spacer', { space: px(h) });
const dividerW = (color, weight = 1) => w('divider', { style: 'solid', color, weight: px(weight), gap: px(0) });
const img = (url, alt = '') => w('image', { image: { url, id: '' }, image_size: 'full', caption: alt });

// ── Color Constants ──
const GOLD = '#d4a853';
const GOLD_LIGHT = '#f9d58b';
const NAVY = '#0B132B';
const DARK = '#0d1117';
const SAND = '#F9F6F0';
const BEIGE = '#f5f0e8';
const SITE = 'https://abhayoyun.org/wp-content/uploads';

// ── Section Builders ──

function heroSection() {
  return sec({
    stretch_section: 'section-stretched', layout: 'full_width',
    height: 'min-height', custom_height: { unit: 'vh', size: 100 },
    content_position: 'middle',
    background_background: 'classic', background_color: NAVY,
    background_overlay_background: 'gradient',
    background_overlay_color: 'rgba(11,19,43,0.7)',
    background_overlay_color_b: 'rgba(11,19,43,0.3)',
    background_overlay_gradient_angle: { unit: 'deg', size: 180 },
    padding: pad(0, 60, 0, 60),
  }, [
    col(100, { content_position: 'center', align: 'center' }, [
      // Eyebrow
      text(`<p style="display:inline-block;padding:6px 16px;border-radius:100px;border:1px solid rgba(212,168,83,0.3);background:rgba(11,19,43,0.4);font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${GOLD};">Master Abhay Oyun</p>`, '', typo('typography', { f: 'Inter', s: 13 }), { align: 'center' }),
      // H1
      heading(`Ancient Wisdom.<br><em style="background:linear-gradient(135deg,${GOLD_LIGHT},${GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;">for the Modern World</em>`, 'h1', '#FFFFFF', { f: 'Playfair Display', s: 80, w: 400, lh: 1.05, ls: -1 }, { align: 'center', text_shadow_text_shadow_type: 'yes', text_shadow_text_shadow: { horizontal: 0, vertical: 10, blur: 40, color: 'rgba(0,0,0,0.6)' } }),
      // Subtitle
      text(`<p>Experience 35 years of Siberian shamanic mastery. Restore your vital energy, dissolve trauma, and awaken your dormant life force.</p>`, 'rgba(255,255,255,0.75)', typo('typography', { f: 'Inter', s: 18, lh: 1.6 }), { align: 'center' }),
      spacer(20),
      // CTA Buttons as inner section
      sec({ padding: pad(0, 0, 0, 0) }, [
        col(50, { align: 'right' }, [
          btn('Book a Free Session', 'https://calendly.com/hurraymangalam/neues-meeting', `linear-gradient(135deg,${GOLD},#b8893a)`, '#050810', { f: 'Inter', s: 13, w: 700, ls: 2, t: 'uppercase' }, { text_padding: pad(18, 40, 18, 40) })
        ]),
        col(50, { align: 'left' }, [
          btn('Join the Webinar', 'https://forms.gle/jEDaUrKwbyHd8WvUA', 'rgba(255,255,255,0.03)', '#FFFFFF', { f: 'Inter', s: 13, w: 600, ls: 2, t: 'uppercase' }, { text_padding: pad(18, 40, 18, 40), border_border: 'solid', border_width: px(1), border_color: 'rgba(255,255,255,0.2)' })
        ])
      ], true)
    ])
  ]);
}

function shamanIntroSection() {
  const statsHtml = `<div style="display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid rgba(212,168,83,0.25);margin-top:32px;padding-top:32px;">
    <div style="padding-right:24px;border-right:1px solid rgba(212,168,83,0.18);">
      <div style="font-family:'Playfair Display',serif;font-size:3rem;background:linear-gradient(135deg,${GOLD},#9e7529);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">35+</div>
      <div style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(13,17,23,0.4);margin-top:8px;">Years</div>
    </div>
    <div style="padding:0 24px;border-right:1px solid rgba(212,168,83,0.18);">
      <div style="font-family:'Playfair Display',serif;font-size:3rem;background:linear-gradient(135deg,${GOLD},#9e7529);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">40</div>
      <div style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(13,17,23,0.4);margin-top:8px;">Countries</div>
    </div>
    <div style="padding-left:24px;">
      <div style="font-family:'Playfair Display',serif;font-size:3rem;background:linear-gradient(135deg,${GOLD},#9e7529);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">10K+</div>
      <div style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(13,17,23,0.4);margin-top:8px;">Healed</div>
    </div>
  </div>`;

  return sec({
    background_background: 'classic', background_color: SAND,
    padding: pad(120, 80, 120, 80),
  }, [
    col(50, { content_position: 'center' }, [
      text(`<div style="display:flex;align-items:center;gap:14px;"><div style="width:36px;height:1px;background:linear-gradient(to right,${GOLD},transparent);"></div><span style="font-family:'Inter',sans-serif;font-size:11px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:${GOLD};">The Master Shaman</span></div>`, '', typo('typography', { f: 'Inter', s: 12 })),
      spacer(10),
      heading(`35 Years.<br>40 Countries.<br><em style="color:${GOLD}">One Mission.</em>`, 'h2', DARK, { f: 'Playfair Display', s: 64, w: 400, lh: 0.95, ls: -1 }),
      spacer(10),
      text(`<p>Abhay Oyun is a shamanic elder rooted in the ancient tradition of Siberian shamanism. For over three decades he has traveled to 40 countries offering spiritual guidance, humanitarian support, and direct energetic healing to those in need.</p><p>Through his <strong>SAMPO System</strong> — a map of psycho-energetic practices rooted in this ancient tradition — he helps restore vital energy, dissolve deep trauma, and reconnect people with their true purpose.</p>`, '#555c66', typo('typography', { f: 'Inter', s: 16, lh: 1.9 })),
      text(statsHtml, '', typo('typography', { f: 'Inter', s: 14 })),
      spacer(20),
      btn('Book a Free Session', 'https://calendly.com/hurraymangalam/neues-meeting', 'linear-gradient(135deg,#0d1117,#1a222e)', '#FFFFFF', { f: 'Inter', s: 12, w: 700, ls: 2, t: 'uppercase' }, { text_padding: pad(16, 36, 16, 36) })
    ]),
    col(50, { content_position: 'center' }, [
      img(`${SITE}/IMG_1652-still.jpg`, 'Abhay Oyun Ritual Video'),
      spacer(10),
      img(`${SITE}/abhay_img.png`, 'Master Abhay')
    ])
  ]);
}

function socialReelSection() {
  const reels = [
    { src: 'sao-gallery-img1.jpg', label: 'Shamanic Ceremony', platform: 'Instagram' },
    { src: 'sao-gallery-img2.jpg', label: 'Healing Ritual Fire', platform: 'Instagram' },
    { src: 'sao-gallery-img3.jpg', label: 'SAMPO Teaching', platform: 'YouTube' },
    { src: 'sao-gallery-img4.jpg', label: 'Sacred Drum Journey', platform: 'Instagram' },
    { src: 'sao-gallery-img5.jpg', label: 'Nature Synchronization', platform: 'YouTube' },
  ];
  const gallery = reels.map(r => ({ id: '', url: `${SITE}/${r.src}` }));

  return sec({
    background_background: 'classic', background_color: BEIGE,
    padding: pad(120, 80, 100, 80),
  }, [
    col(100, {}, [
      text(`<div style="display:flex;align-items:center;gap:14px;"><div style="width:28px;height:1px;background:linear-gradient(to right,${GOLD},transparent);"></div><span style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:${GOLD};">@EarthForPeace</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(10),
      heading(`In the Field.<br><em style="color:rgba(13,17,23,0.25)">Live Moments.</em>`, 'h2', DARK, { f: 'Playfair Display', s: 56, w: 700, lh: 0.95, ls: -1 }),
      spacer(30),
      w('image-gallery', { gallery, gallery_columns: 5, gallery_link: 'none', gallery_rand: '' }),
      spacer(10),
      text(`<p style="text-align:center;font-size:12px;color:rgba(13,17,23,0.3);letter-spacing:2px;">Click to explore · Follow @earthforpeace</p>`, '', typo('typography', { f: 'Inter', s: 12 }), { align: 'center' })
    ])
  ]);
}

function gallerySection() {
  const images = ['sao-gallery-img1.jpg','sao-gallery-img2.jpg','sao-gallery-img3.jpg','sao-gallery-img4.jpg','sao-gallery-img5.jpg','sao-gallery-img6.jpg','sao-gallery-img7.jpg','sao-gallery-img8.jpg','visited-countries-img.png']
    .map(f => ({ id: '', url: `${SITE}/${f}` }));

  return sec({
    background_background: 'classic', background_color: SAND,
    padding: pad(100, 80, 100, 80),
  }, [
    col(100, {}, [
      text(`<div style="display:flex;align-items:center;gap:14px;"><div style="width:36px;height:1px;background:linear-gradient(to right,${GOLD},transparent);"></div><span style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:${GOLD};">Global Footprint</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(10),
      heading(`40 Countries.<br><em style="color:rgba(13,17,23,0.35)">One Sacred Mission.</em>`, 'h2', DARK, { f: 'Playfair Display', s: 52, w: 400, lh: 1.0, ls: -1 }),
      spacer(30),
      w('image-gallery', { gallery: images, gallery_columns: 5, gallery_link: 'none' })
    ])
  ]);
}

function testimonialsSection() {
  const testimonials = [
    { q: 'After one session with Abhay, I felt a weight lift from my chest that I had been carrying for 20 years. It was like my cells remembered how to breathe again.', n: 'Maria K.', l: 'Berlin, Germany' },
    { q: 'The Sampo System completely rewired how I experience stress. What used to cripple me now passes through me. I have never felt more sovereign in my own body.', n: 'James R.', l: 'London, UK' },
    { q: 'I traveled to three continents seeking healing. What Abhay achieved in a single masterclass surpassed everything. This is ancient wisdom in its purest form.', n: 'Elena V.', l: 'Moscow, Russia' },
    { q: 'What people remember most after a personal encounter with the shaman is the special inner feeling — an all-embracing love that truly touches the heart.', n: 'Priya S.', l: 'Mumbai, India' },
  ];

  return sec({
    background_background: 'classic', background_color: BEIGE,
    padding: pad(140, 80, 140, 80),
  }, [
    col(50, { content_position: 'center' }, [
      heading(`Lives Changed<br><em style="color:${GOLD}">Across the World</em>`, 'h2', DARK, { f: 'Playfair Display', s: 52, w: 400, lh: 0.95, ls: -1 }),
      spacer(10),
      text(`<p>Over 10,000 individuals across 40 countries have experienced direct healing from Master Abhay Oyun's practices.</p>`, '#666c76', typo('typography', { f: 'Inter', s: 15, lh: 1.8 })),
    ]),
    col(50, { content_position: 'center' }, [
      ...testimonials.map(t => text(
        `<div style="background:#ffffff;border-radius:24px;padding:48px;box-shadow:0 20px 60px rgba(13,17,23,0.04);border:1px solid rgba(13,17,23,0.03);margin-bottom:16px;">
          <p style="font-family:'Playfair Display',serif;font-style:italic;font-size:18px;line-height:1.6;color:#0d1117;margin:0 0 32px 0;">&ldquo;${t.q}&rdquo;</p>
          <div style="display:flex;align-items:center;gap:16px;">
            <div style="width:32px;height:1px;background:linear-gradient(to right,${GOLD},transparent);"></div>
            <div>
              <div style="font-family:'Inter',sans-serif;font-size:15px;font-weight:700;color:#0d1117;">${t.n}</div>
              <div style="font-family:'Inter',sans-serif;font-size:10px;letter-spacing:3px;text-transform:uppercase;color:rgba(13,17,23,0.4);margin-top:6px;">${t.l}</div>
            </div>
          </div>
        </div>`, '', typo('typography', { f: 'Inter', s: 14 })
      ))
    ])
  ]);
}

function teachingsSection() {
  const practices = [
    { num: '01', tag: 'SAMPO System', title: 'Psycho-Energetic Training', desc: 'A complete system for accumulating, protecting and directing your vital energy. Ancient Siberian methods to shield from external influences and awaken your dormant life force.', img: 'shaman_birch_forest.png' },
    { num: '02', tag: 'Sound Medicine', title: 'Sacred Drum Healing', desc: "The shaman's drum is a portal. Its frequencies shift brainwave states instantly, dissolve trauma held in the cellular body, and initiate spontaneous healing responses.", img: 'drum_moss_forest.png' },
    { num: '03', tag: 'Personal Healing', title: '1-on-1 Shamanic Session', desc: 'Direct, private energetic work with Master Abhay Oyun. Each session identifies the root cause of imbalance — physical, emotional, or ancestral — and applies targeted shamanic intervention.', img: 'yurt_fire_healing.png' },
  ];

  const toggleTabs = practices.map(p => ({
    tab_title: `${p.num}  —  ${p.title}`,
    tab_content: `<p style="margin-bottom:8px;"><span style="font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:${GOLD};padding:4px 12px;border:1px solid rgba(212,168,83,0.3);border-radius:4px;display:inline-block;">${p.tag}</span></p><p style="font-size:17px;line-height:1.6;color:rgba(13,17,23,0.7);max-width:500px;margin-bottom:24px;">${p.desc}</p><a href="https://calendly.com/hurraymangalam/neues-meeting" target="_blank" style="display:inline-flex;align-items:center;gap:12px;font-size:13px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#050505;background:${GOLD};padding:16px 40px;border-radius:4px;text-decoration:none;">Book Session →</a>`
  }));

  return sec({
    background_background: 'classic', background_color: SAND,
    padding: pad(120, 40, 120, 40),
  }, [
    col(50, { content_position: 'top' }, [
      img(`${SITE}/${practices[0].img}`, 'Shamanic Practice')
    ]),
    col(50, { content_position: 'top' }, [
      text(`<div style="display:flex;align-items:center;gap:16px;"><div style="width:40px;height:1px;background:${GOLD};"></div><span style="font-family:'Inter',sans-serif;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${GOLD};">The Work</span></div>`, '', typo('typography', { f: 'Inter', s: 12 })),
      spacer(10),
      heading(`Ancient Practices.<br><em style="color:rgba(13,17,23,0.4)">Modern Mastery.</em>`, 'h2', DARK, { f: 'Playfair Display', s: 52, w: 400, lh: 1.1, ls: -1 }),
      text(`<p>Three pillars of the SAMPO system, refined across 35 years and 40 countries of direct energetic healing work.</p>`, '#666c76', typo('typography', { f: 'Inter', s: 17, lh: 1.6 })),
      spacer(20),
      w('toggle', {
        tabs: toggleTabs,
        title_color: 'rgba(13,17,23,0.4)',
        tab_active_color: DARK,
        ...typo('title_typography', { f: 'Playfair Display', s: 28, w: 400 }),
        ...typo('tab_content_typography', { f: 'Inter', s: 15 }),
        border_color: 'rgba(13,17,23,0.1)',
        border_width: px(1),
        icon_color: GOLD,
        icon_active_color: GOLD,
      })
    ])
  ]);
}

function eventsSection() {
  const events = [
    { tag: "Men's Intensive", title: 'Reclaim Your Masculine Power', date: 'March 25–29, 2025', loc: 'Denver, Colorado', seats: '18 spots remaining', price: 'From $1,200', desc: 'A 5-day immersive for men ready to step fully into their energetic sovereignty. Cold exposure, sacred fire ceremony, drum healing, and direct shamanic mentorship with Master Abhay.', img: 'sao-gallery-img3.jpg', color: '#00d280', badge: 'Filling Fast', highlights: ['Cold Plunge Ceremony', 'Sacred Fire Ritual', 'Drum Healing', '1-on-1 Session'] },
    { tag: "Women's Gathering", title: 'Shamanism — Source of Happiness & Love', date: 'March 20–22, 2025', loc: 'Denver, Colorado', seats: '12 spots remaining', price: 'From $890', desc: 'A sacred gathering for women. Reconnect with the ancient feminine power of the Earth through ceremony, sound medicine, and shamanic healing circles in an intimate group setting.', img: 'sao-gallery-img1.jpg', color: GOLD, badge: 'Limited', highlights: ['Sound Ceremony', 'Sisterhood Circle', 'Energy Work', 'Forest Ritual'] },
    { tag: 'Free Webinar', title: 'Your First Step Into the SAMPO System', date: 'March 19, 2025', loc: 'Online · Global', seats: 'Open registration', price: 'Free', desc: 'Experience the SAMPO System from anywhere in the world. A live initiation into the foundations of shamanic energy work. Open to all seekers — no prior experience required.', img: 'healing-global-harmony.jpg', color: '#00a8ff', badge: 'Free Entry', highlights: ['Live Q&A', 'Energy Practice', 'SAMPO Intro', 'Worldwide Access'] },
  ];

  const eventSections = events.map((ev, i) => {
    const highlightHtml = ev.highlights.map(h => `<span style="font-size:11px;font-weight:600;letter-spacing:1px;color:rgba(13,17,23,0.5);background:rgba(13,17,23,0.04);border:1px solid rgba(13,17,23,0.08);border-radius:99px;padding:5px 12px;display:inline-block;margin:3px;">${h}</span>`).join('');
    const contentCol = col(60, { content_position: 'center', padding: pad(56, 64, 56, 64) }, [
      text(`<span style="font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:${ev.color};background:${ev.color}16;padding:5px 14px;border-radius:99px;border:1px solid ${ev.color}30;">${ev.tag}</span> <span style="font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:rgba(13,17,23,0.4);background:rgba(13,17,23,0.04);padding:5px 12px;border-radius:99px;">${ev.badge}</span>`, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(10),
      heading(ev.title, 'h3', DARK, { f: 'Playfair Display', s: 32, w: 700, lh: 1.1 }),
      text(`<p>${ev.desc}</p>`, '#666e78', typo('typography', { f: 'Inter', s: 15, lh: 1.9 })),
      text(highlightHtml, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(10),
      text(`<div style="border-top:1px solid rgba(13,17,23,0.06);padding-top:28px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;"><div><div style="font-weight:700;font-size:12px;color:#0d1117;margin-bottom:4px;">${ev.date}</div><div style="font-size:11px;color:rgba(13,17,23,0.4);">📍 ${ev.loc} &nbsp; 🪑 <span style="color:${ev.color};font-weight:600;">${ev.seats}</span></div></div><div style="display:flex;align-items:center;gap:12px;"><span style="font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#0d1117;">${ev.price}</span></div></div>`, '', typo('typography', { f: 'Inter', s: 12 })),
      spacer(10),
      btn('Register →', 'https://forms.gle/jEDaUrKwbyHd8WvUA', 'linear-gradient(135deg,#0d1117,#1a222e)', '#FFFFFF', { f: 'Inter', s: 11, w: 800, ls: 2, t: 'uppercase' }, { text_padding: pad(16, 32, 16, 32) })
    ]);
    const imageCol = col(40, { content_position: 'stretch' }, [
      img(`${SITE}/${ev.img}`, ev.title)
    ]);
    const cols = i % 2 === 0 ? [contentCol, imageCol] : [imageCol, contentCol];
    return sec({
      background_background: 'classic', background_color: '#FFFFFF',
      border_border: 'solid', border_width: px(1), border_color: 'rgba(13,17,23,0.04)',
      border_radius: px(24), box_shadow_box_shadow: { horizontal: 0, vertical: 20, blur: 60, spread: 0, color: 'rgba(13,17,23,0.06)' },
      margin: pad(0, 0, 24, 0), overflow: 'hidden', padding: pad(0, 0, 0, 0),
    }, cols, true);
  });

  return sec({
    background_background: 'classic', background_color: BEIGE,
    padding: pad(140, 80, 140, 80),
  }, [
    col(100, {}, [
      text(`<div style="display:flex;align-items:center;gap:14px;"><div style="width:28px;height:1px;background:${GOLD};"></div><span style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:${GOLD};">Upcoming Events</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(8),
      heading(`Join Abhay<br><em style="color:${GOLD}">in the Field.</em>`, 'h2', DARK, { f: 'Playfair Display', s: 60, w: 700, lh: 0.92, ls: -1 }),
      spacer(40),
      ...eventSections,
    ])
  ]);
}

function transformationSection() {
  const milestones = [
    { year: '2004', loc: 'Japan — Mount Fuji', text: '2,500 people gathered at the base of Mount Fuji under Abhay\'s guidance. Shaman chiefs from North America and Asian tribes united in ceremony for the first time.' },
    { year: '2007', loc: 'South Russia', text: 'Major peace conferences and large spiritual gatherings where prayers and sacred rituals were held to bring peace and healing to the war-torn region.' },
    { year: '2015', loc: 'Chile', text: 'When earthquakes, volcanic ash, and severe drought converged on Chile, Abhay led ceremonies to shift the collective energetic field and support recovery.' },
    { year: '2022', loc: 'Ukraine', text: 'During the New Year\'s Retreat 2021–2022, Abhay received a vision of the invasion. Sacred ceremonies were organized across Europe to focus healing energy on the region.' },
  ];
  const timelineHtml = milestones.map(m => `
    <div style="margin-bottom:48px;padding-left:32px;border-left:1px solid rgba(13,17,23,0.06);position:relative;">
      <div style="position:absolute;left:-8px;top:8px;width:16px;height:16px;border-radius:50%;border:1px solid rgba(212,168,83,0.3);background:${SAND};display:flex;align-items:center;justify-content:center;">
        <div style="width:6px;height:6px;border-radius:50%;background:rgba(212,168,83,0.6);"></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:16px;margin-bottom:12px;">
        <span style="font-family:'Playfair Display',serif;font-size:24px;color:${GOLD};">${m.year}</span>
        <span style="font-size:10px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:rgba(13,17,23,0.35);">${m.loc}</span>
      </div>
      <p style="font-size:15px;line-height:1.85;color:rgba(13,17,23,0.6);margin:0;">${m.text}</p>
    </div>`).join('');

  return sec({
    background_background: 'classic', background_color: SAND,
    padding: pad(140, 80, 140, 80),
  }, [
    col(50, { content_position: 'center' }, [
      text(`<div style="display:flex;align-items:center;gap:16px;"><div style="width:36px;height:1px;background:rgba(212,168,83,0.6);"></div><span style="font-size:10px;font-weight:600;letter-spacing:4px;text-transform:uppercase;color:rgba(212,168,83,0.8);">Global Impact</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(15),
      text(`<blockquote style="margin:0;"><p style="font-family:'Playfair Display',serif;font-style:italic;font-size:36px;line-height:1.2;letter-spacing:-0.5px;color:rgba(13,17,23,0.8);margin:0 0 24px 0;">&ldquo;When you reconnect with your wild nature, trauma doesn&apos;t just heal — it transforms into power.&rdquo;</p><footer style="font-size:11px;letter-spacing:4px;text-transform:uppercase;color:rgba(13,17,23,0.4);">— Master Abhay Oyun</footer></blockquote>`, '', typo('typography', { f: 'Inter', s: 14 })),
      spacer(20),
      dividerW('rgba(13,17,23,0.05)'),
      spacer(10),
      text(`<p>Called the <strong>World Shaman and Guardian of Our Planet</strong>, Abhay Oyun has dedicated his life to responding to global crises — natural disasters, wars, humanitarian emergencies — through the ancient lens of shamanic intervention.</p>`, 'rgba(13,17,23,0.6)', typo('typography', { f: 'Inter', s: 15, lh: 1.95 })),
    ]),
    col(50, { content_position: 'top' }, [
      text(timelineHtml, '', typo('typography', { f: 'Inter', s: 14 })),
    ])
  ]);
}

function youtubeSection() {
  const videos = [
    { id: 'kjFiyWgyvu0', title: 'Abhay Oyun Teaching', sub: 'First Steps of SAMPO' },
    { id: 'EqEK-5uJrAA', title: 'Sacred Drum Ceremony', sub: 'Sound Healing Practice' },
    { id: 'MXW78uQR7xg', title: 'Shamanic Initiation', sub: 'Psycho-Energetic Training' },
    { id: 'rNviNzWV-e4', title: 'Nature Synchronization', sub: 'Siberian Forest Ritual' },
    { id: '9ftcHfDEjeI', title: 'The SAMPO System', sub: 'Ancient Energy Mastery' },
  ];

  const makeVideoWidget = (v) => w('video', {
    video_type: 'youtube',
    youtube_url: `https://www.youtube.com/watch?v=${v.id}`,
    show_image_overlay: 'yes',
    lightbox: 'yes',
    image_overlay: { url: `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`, id: '' },
  });

  return sec({
    background_background: 'classic', background_color: BEIGE,
    padding: pad(140, 80, 140, 80),
  }, [
    col(100, {}, [
      text(`<div style="display:flex;align-items:center;gap:14px;"><div style="width:28px;height:1px;background:${GOLD};"></div><span style="font-family:'Inter',sans-serif;font-size:10px;font-weight:700;letter-spacing:5px;text-transform:uppercase;color:${GOLD};">Watch & Learn</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(8),
      heading(`Abhay Oyun<br><em style="color:rgba(13,17,23,0.3)">Teaching</em>`, 'h2', DARK, { f: 'Playfair Display', s: 56, w: 700, lh: 0.95, ls: -1 }),
      spacer(30),
      // Top row: 3 videos
      sec({ padding: pad(0, 0, 20, 0) }, [
        col(33, {}, [makeVideoWidget(videos[0])]),
        col(33, {}, [makeVideoWidget(videos[1])]),
        col(34, {}, [makeVideoWidget(videos[2])]),
      ], true),
      // Bottom row: 2 videos
      sec({ padding: pad(0, 0, 0, 0) }, [
        col(50, {}, [makeVideoWidget(videos[3])]),
        col(50, {}, [makeVideoWidget(videos[4])]),
      ], true),
      spacer(20),
      text(`<p style="text-align:center;"><a href="https://www.youtube.com/@AbhayOyun" target="_blank" style="display:inline-flex;align-items:center;gap:12px;padding:14px 28px;background:rgba(13,17,23,0.06);border:1px solid rgba(13,17,23,0.1);border-radius:4px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#0d1117;text-decoration:none;">▶ View Channel</a></p>`, '', typo('typography', { f: 'Inter', s: 12 }), { align: 'center' })
    ])
  ]);
}

function webinarCTASection() {
  const benefits = [
    'Live introduction to the SAMPO psycho-energetic system',
    'Discover your unique energy type and its strengths',
    'First steps in shamanic self-healing techniques',
    'Live Q&A with Master Abhay Oyun',
  ];
  const benefitsHtml = benefits.map(b => `<li style="display:flex;align-items:center;gap:16px;margin-bottom:16px;"><div style="width:24px;height:24px;border-radius:50%;border:1px solid rgba(212,168,83,0.3);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><span style="color:rgba(212,168,83,0.8);font-size:10px;font-weight:700;">✓</span></div><span style="font-size:15px;color:rgba(13,17,23,0.7);line-height:1.5;">${b}</span></li>`).join('');

  return sec({
    background_background: 'classic', background_color: SAND,
    padding: pad(140, 80, 140, 80),
  }, [
    col(50, { content_position: 'center' }, [
      text(`<div style="display:flex;align-items:center;gap:16px;"><div style="width:36px;height:1px;background:rgba(212,168,83,0.8);"></div><span style="font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(212,168,83,0.8);">Free Webinar</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(15),
      heading(`Your Transformation<br><em style="background:linear-gradient(135deg,${GOLD_LIGHT},${GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Starts Free</em>`, 'h2', DARK, { f: 'Playfair Display', s: 52, w: 400, lh: 0.95, ls: -1 }),
      spacer(10),
      text(`<p>Join thousands of people who made their first shift in a single free masterclass. No experience required — only willingness.</p>`, 'rgba(13,17,23,0.6)', typo('typography', { f: 'Inter', s: 16, lh: 1.85 })),
      spacer(10),
      text(`<ul style="list-style:none;padding:0;margin:0;">${benefitsHtml}</ul>`, '', typo('typography', { f: 'Inter', s: 14 })),
    ]),
    col(50, { content_position: 'center' }, [
      text(`<div style="background:#ffffff;border-radius:24px;padding:48px;border:1px solid rgba(13,17,23,0.06);box-shadow:0 40px 80px rgba(13,17,23,0.06);position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(212,168,83,0.4),transparent);"></div>
        <div style="margin-bottom:28px;">
          <div style="font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(212,168,83,0.8);margin-bottom:8px;">Next Session</div>
          <div style="font-family:'Playfair Display',serif;font-size:36px;color:#0d1117;">March 19, 2025</div>
          <div style="font-size:14px;color:rgba(13,17,23,0.45);margin-top:8px;">Online · Free Entry · Global</div>
        </div>
        <div style="border-top:1px solid rgba(13,17,23,0.08);padding-top:28px;margin-bottom:32px;">
          <div style="font-family:'Playfair Display',serif;font-style:italic;font-size:18px;color:rgba(13,17,23,0.65);line-height:1.6;">&ldquo;The first step costs nothing but the courage to begin.&rdquo;</div>
        </div>
        <a href="https://forms.gle/jEDaUrKwbyHd8WvUA" target="_blank" style="display:flex;align-items:center;justify-content:center;padding:16px;background:${GOLD};color:#ffffff;font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;border-radius:4px;text-decoration:none;margin-bottom:10px;">Reserve Your Spot — Free →</a>
        <a href="https://calendly.com/hurraymangalam/neues-meeting" target="_blank" style="display:flex;align-items:center;justify-content:center;padding:16px;background:transparent;color:rgba(13,17,23,0.6);font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;border-radius:4px;border:1px solid rgba(13,17,23,0.15);text-decoration:none;">Book Private 1-on-1 Session</a>
      </div>`, '', typo('typography', { f: 'Inter', s: 14 })),
    ])
  ]);
}

function finalCTASection() {
  const trustHtml = ['35+ Years of Practice', '40 Countries Served', '10,000+ Transformations'].map(t =>
    `<div style="display:flex;align-items:center;gap:10px;"><div style="width:4px;height:4px;border-radius:50%;background:rgba(212,168,83,0.6);"></div><span style="font-size:11px;letter-spacing:2px;color:rgba(13,17,23,0.4);text-transform:uppercase;">${t}</span></div>`
  ).join('');
  const socialHtml = [['Instagram','https://www.instagram.com/earthforpeace/'],['YouTube','https://www.youtube.com/@earthforpeace'],['Facebook','#'],['TikTok','#']].map(([l,h]) =>
    `<a href="${h}" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:12px 20px;background:rgba(13,17,23,0.03);border:1px solid rgba(13,17,23,0.08);border-radius:4px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(13,17,23,0.45);text-decoration:none;">${l}</a>`
  ).join(' ');

  return sec({
    background_background: 'classic', background_color: BEIGE,
    background_overlay_background: 'classic', background_overlay_color: 'rgba(245,240,232,0.92)',
    padding: pad(160, 80, 160, 80),
  }, [
    col(100, {}, [
      text(`<div style="display:flex;align-items:center;gap:16px;"><div style="width:36px;height:1px;background:rgba(212,168,83,0.8);"></div><span style="font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(212,168,83,0.8);">Begin Your Path</span></div>`, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(15),
      heading(`The Ancient<br><em style="background:linear-gradient(135deg,${GOLD_LIGHT},${GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Path</em><br>Awaits You.`, 'h2', DARK, { f: 'Playfair Display', s: 80, w: 400, lh: 0.9, ls: -2 }),
      spacer(10),
      text(`<p style="max-width:480px;">Whether you begin with a free webinar or a personal shamanic session — transformation begins with a single decision to show up.</p>`, 'rgba(13,17,23,0.55)', typo('typography', { f: 'Inter', s: 17, lh: 1.85 })),
      spacer(20),
      sec({ padding: pad(0, 0, 0, 0) }, [
        col(50, { align: 'left' }, [
          btn('Book a Free Session', 'https://calendly.com/hurraymangalam/neues-meeting', GOLD, '#FFFFFF', { f: 'Inter', s: 12, w: 800, ls: 2, t: 'uppercase' }, { text_padding: pad(18, 44, 18, 44) }),
        ]),
        col(50, { align: 'left' }, [
          btn('Watch Free Webinar', 'https://forms.gle/jEDaUrKwbyHd8WvUA', 'rgba(13,17,23,0.03)', 'rgba(13,17,23,0.8)', { f: 'Inter', s: 12, w: 700, ls: 2, t: 'uppercase' }, { text_padding: pad(18, 44, 18, 44), border_border: 'solid', border_width: px(1), border_color: 'rgba(13,17,23,0.15)' }),
        ])
      ], true),
      spacer(30),
      text(`<div style="display:flex;gap:40px;flex-wrap:wrap;">${trustHtml}</div>`, '', typo('typography', { f: 'Inter', s: 11 })),
      spacer(20),
      text(`<div style="display:flex;gap:16px;flex-wrap:wrap;">${socialHtml}</div>`, '', typo('typography', { f: 'Inter', s: 10 })),
    ])
  ]);
}

function footerSection() {
  const navLinks = [['Teachings','#teachings'],['Events','#events'],['Transform','#transformation'],['Book Session','https://calendly.com/hurraymangalam/neues-meeting']].map(([l,h]) => `<li style="margin-bottom:12px;"><a href="${h}" style="font-size:14px;color:rgba(13,17,23,0.55);text-decoration:none;">${l}</a></li>`).join('');
  const legalLinks = ['Privacy Policy','Terms of Service','Cookie Policy'].map(l => `<li style="margin-bottom:12px;"><a href="#" style="font-size:14px;color:rgba(13,17,23,0.55);text-decoration:none;">${l}</a></li>`).join('');
  const socialLinks = [['FB','https://facebook.com/'],['IG','https://www.instagram.com/earthforpeace/'],['YT','https://www.youtube.com/@earthforpeace'],['TK','https://tiktok.com/']].map(([s,h])=>`<a href="${h}" target="_blank" style="width:36px;height:36px;border-radius:8px;border:1px solid rgba(13,17,23,0.12);display:inline-flex;align-items:center;justify-content:center;font-size:10px;font-weight:600;color:rgba(13,17,23,0.6);text-decoration:none;">${s}</a>`).join(' ');

  return sec({
    background_background: 'classic', background_color: SAND,
    border_border: 'solid', border_width: { unit: 'px', top: '1', right: '0', bottom: '0', left: '0', isLinked: false }, border_color: 'rgba(13,17,23,0.06)',
    padding: pad(72, 48, 24, 48),
  }, [
    col(30, {}, [
      text(`<span style="font-family:'Playfair Display',serif;font-size:18px;color:#0d1117;">ABHAY <span style="background:linear-gradient(135deg,${GOLD_LIGHT},${GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;">OYUN</span></span>`, '', typo('typography', { f: 'Playfair Display', s: 18 })),
      text(`<p style="font-size:14px;line-height:1.85;color:rgba(13,17,23,0.6);max-width:260px;">Master Shaman. Global Healer. Awakening the world to the raw power of ancient Siberian traditions.</p>`, '', typo('typography', { f: 'Inter', s: 14 })),
      text(`<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;"><a href="mailto:energeticalmaster@gmail.com" style="font-size:12px;color:rgba(13,17,23,0.5);text-decoration:none;">✉ energeticalmaster@gmail.com</a><a href="tel:+12122561366" style="font-size:12px;color:rgba(13,17,23,0.5);text-decoration:none;">☎ (212) 256 1366</a></div>`, '', typo('typography', { f: 'Inter', s: 12 })),
      text(`<div style="display:flex;gap:8px;">${socialLinks}</div>`, '', typo('typography', { f: 'Inter', s: 10 })),
    ]),
    col(20, {}, [
      text(`<p style="font-family:'Playfair Display',serif;font-size:15px;color:#0d1117;margin-bottom:20px;">Navigate</p><ul style="list-style:none;padding:0;margin:0;">${navLinks}</ul>`, '', typo('typography', { f: 'Inter', s: 14 })),
    ]),
    col(20, {}, [
      text(`<p style="font-family:'Playfair Display',serif;font-size:15px;color:#0d1117;margin-bottom:20px;">Legal</p><ul style="list-style:none;padding:0;margin:0;">${legalLinks}</ul>`, '', typo('typography', { f: 'Inter', s: 14 })),
    ]),
    col(30, {}, [
      text(`<p style="font-family:'Playfair Display',serif;font-size:15px;color:#0d1117;margin-bottom:8px;">Awaken Weekly</p><p style="font-size:14px;color:rgba(13,17,23,0.6);line-height:1.7;margin-bottom:16px;">Receive potent insights and practices directly from Abhay.</p>`, '', typo('typography', { f: 'Inter', s: 14 })),
      text(`<div style="display:flex;"><input type="email" placeholder="Your email" style="flex:1;padding:12px 16px;background:rgba(13,17,23,0.03);border:1px solid rgba(13,17,23,0.12);border-right:none;border-radius:6px 0 0 6px;font-size:14px;color:#0d1117;outline:none;" disabled /><div style="padding:12px 20px;background:${GOLD};color:#ffffff;border-radius:0 6px 6px 0;font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;display:flex;align-items:center;">Join</div></div>`, '', typo('typography', { f: 'Inter', s: 12 })),
    ]),
  ]);
}

// ── Assemble Template ──
const template = {
  title: 'Abhay Oyun Homepage',
  type: 'page',
  version: '0.4',
  page_settings: {},
  content: [
    heroSection(),
    shamanIntroSection(),
    socialReelSection(),
    gallerySection(),
    testimonialsSection(),
    teachingsSection(),
    eventsSection(),
    transformationSection(),
    youtubeSection(),
    webinarCTASection(),
    finalCTASection(),
    footerSection(),
  ],
};

fs.writeFileSync('abhay-oyun-homepage.json', JSON.stringify(template, null, 2));
console.log('✅ Generated: abhay-oyun-homepage.json');
console.log(`   ${template.content.length} sections created`);
console.log('   Ready to import into WordPress → Elementor → Templates → Import');
