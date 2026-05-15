// ── Sections Part 2: Teachings, Events, Transformation, YouTube, Webinar, Final CTA, Footer ──
// IMMERSIVE MYSTICAL THEME - Mystical, Sacred, Healing, Ancient yet Modern
const {
  px, em, pad, typo, sec, col, w, heading, text, btn, spacer, dividerW, img, anim, eyebrow, sacredCircle, lightRay, particle,
  IVORY, PARCHMENT, DUNE_SAND, WARM_STONE, MOONLIGHT,
  CHARCOAL_WARM, EARTH_BROWN, STONE_GRAY, DUST,
  DIVINE_GOLD, LIGHT_GOLD, PALE_GOLD, EMBER_GLOW, SUNSET_GOLD,
  FOREST_DEEP, MOSS_LIFE, SAGE_CALM, EARTH_TERRA, CLAY_WARM, MIST_ROSE,
  RITUAL_PURPLE, SMOKE_GRAY, LIGHT_RAY, DIVINE_SHADOW, SITE
} = require('./helpers');

// ═══════════════════════════════════════════════════════════════
// SECTION 7: TEACHINGS — Sacred Practices Accordion
// ═══════════════════════════════════════════════════════════════
function teachingsSection() {
  const practices = [
    {
      num: '01',
      tag: 'SAMPO System',
      title: 'Psycho-Energetic Training',
      desc: 'A complete system for accumulating, protecting, and directing your vital energy. Ancient Siberian methods to shield from external influences and awaken your dormant life force.',
      img: 'shaman_birch_forest.png',
      color: DIVINE_GOLD
    },
    {
      num: '02',
      tag: 'Sound Medicine',
      title: 'Sacred Drum Healing',
      desc: "The shaman's drum is a portal. Its frequencies shift brainwave states instantly, dissolve trauma held in the cellular body, and initiate spontaneous healing responses.",
      img: 'drum_moss_forest.png',
      color: FOREST_DEEP
    },
    {
      num: '03',
      tag: 'Personal Healing',
      title: '1-on-1 Shamanic Session',
      desc: 'Direct, private energetic work with Shaman Abhay Oyun. Each session identifies the root cause of imbalance and applies targeted shamanic intervention.',
      img: 'yurt_fire_healing.png',
      color: EARTH_TERRA
    },
  ];

  const toggleTabs = practices.map(p => ({
    tab_title: `${p.num}  —  ${p.title}`,
    tab_content: `<div style="padding:12px 0 20px;">
      <p style="margin-bottom:12px;"><span style="font-family:'Cinzel',serif;font-size:10px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${p.color};background:${p.color}10;padding:8px 18px;border:1px solid ${p.color}30;border-radius:50px;display:inline-block;">${p.tag}</span></p>
      <p style="font-family:'Lato',sans-serif;font-size:16px;line-height:1.8;color:${EARTH_BROWN};max-width:520px;margin-bottom:28px;">${p.desc}</p>
      <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" style="display:inline-flex;align-items:center;gap:12px;font-family:'Cinzel',serif;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#fff;background:linear-gradient(135deg,${p.color},${LIGHT_GOLD});padding:16px 40px;border-radius:50px;text-decoration:none;box-shadow:0 8px 24px ${p.color}30;transition:all 0.3s ease;">Begin Your Journey →</a>
    </div>`
  }));

  return sec({
    background_background: 'classic', background_color: PARCHMENT,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    custom_css: `
@keyframes breathe { 0%,100% { opacity:0.15; } 50% { opacity:0.25; } }
selector { position:relative; }
selector::before {
  content:''; position:absolute; top:-60px; left:0; right:0; height:120px;
  background:linear-gradient(to bottom, ${IVORY}, transparent);
  pointer-events:none; z-index:1;
}
/* Decorative floating orbs */
.teachings-orb {
  position:absolute; border-radius:50%; pointer-events:none;
  animation:float-orb ease-in-out infinite;
}
`
  }, [
    col(48, { content_position: 'center', _column_size_mobile: 100 }, [
      // Mystical image with hover effect
      text(`<div style="position:relative;">
        <img src="${SITE}/${practices[0].img}" alt="Shamanic Practice" style="width:100%;border-radius:20px;border:2px solid ${PALE_GOLD};box-shadow:0 20px 60px rgba(44,36,22,0.08);">
        <div style="position:absolute;top:-12px;right:-12px;width:60px;height:60px;border-radius:50%;background:radial-gradient(circle,${PALE_GOLD} 0%,transparent 70%);opacity:0.6;"></div>
        <div style="position:absolute;bottom:-20px;left:-20px;width:100px;height:100px;border-radius:50%;background:radial-gradient(circle,${MOSS_LIFE}33 0%,transparent 70%);opacity:0.4;animation:float-orb 12s ease-in-out infinite;"></div>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 })),
      spacer(20),
      text(`<p style="font-family:'Cinzel',serif;font-size:12px;color:${STONE_GRAY};text-align:center;letter-spacing:4px;">Ancient Wisdom, Modern Practice</p>`, '', typo('typography', { f: 'Cinzel', s: 12 }), { align: 'center' }),
    ]),
    col(52, { content_position: 'top', _column_size_mobile: 100 }, [
      eyebrow('The Sacred Work'),
      spacer(16),
      heading(`Three Paths to<br><em style="background:linear-gradient(135deg,${DIVINE_GOLD},${FOREST_DEEP});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Awakening</em>`, 'h2', CHARCOAL_WARM,
        { f: 'Cinzel', s: 44, sm: 28, st: 36, w: 400, lh: 1.1, ls: -0.5 },
        { ...anim('fadeInUp') }),
      text(`<p style="font-family:'Lato',sans-serif;font-size:16px;line-height:1.8;color:${EARTH_BROWN};margin-top:16px;">Three sacred practices, refined across 35 years of healing work. Each path meets you where you are — and guides you toward wholeness.</p>`, '',
        typo('typography', { f: 'Lato', s: 16, sm: 14, lh: 1.8 })),
      spacer(28),
      w('toggle', {
        tabs: toggleTabs,
        title_color: STONE_GRAY,
        tab_active_color: CHARCOAL_WARM,
        ...typo('title_typography', { f: 'Cinzel', s: 22, sm: 18, w: 500 }),
        ...typo('tab_content_typography', { f: 'Lato', s: 15, sm: 14 }),
        border_color: 'rgba(196,148,42,0.15)',
        border_width: px(1),
        icon_color: DIVINE_GOLD,
        icon_active_color: DIVINE_GOLD,
        border_radius: px(16),
      })
    ])
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 8: EVENTS — Sacred Gatherings
// ═══════════════════════════════════════════════════════════════
function eventsSection() {
  const events = [
    {
      tag: "Men's Intensive",
      title: 'Reclaim Your Masculine Power',
      date: 'March 25–29, 2025',
      loc: 'Denver, Colorado',
      seats: '18 spots remaining',
      price: 'From $1,200',
      desc: 'A 5-day immersive for men ready to step fully into their energetic sovereignty. Cold exposure, sacred fire ceremony, drum healing, and direct shamanic mentorship.',
      img: 'sao-gallery-img3.jpg',
      color: FOREST_DEEP,
      badge: 'Filling Fast',
      highlights: ['Cold Plunge Ceremony', 'Sacred Fire Ritual', 'Drum Healing', '1-on-1 Session']
    },
    {
      tag: "Women's Gathering",
      title: 'Shamanism — Source of Happiness & Love',
      date: 'March 20–22, 2025',
      loc: 'Denver, Colorado',
      seats: '12 spots remaining',
      price: 'From $890',
      desc: 'A sacred gathering for women. Reconnect with the ancient feminine power of the Earth through ceremony, sound medicine, and shamanic healing circles.',
      img: 'sao-gallery-img1.jpg',
      color: MIST_ROSE,
      badge: 'Limited',
      highlights: ['Sound Ceremony', 'Sisterhood Circle', 'Energy Work', 'Forest Ritual']
    },
    {
      tag: 'Free Webinar',
      title: 'Your First Step Into the SAMPO System',
      date: 'March 19, 2025',
      loc: 'Online · Global',
      seats: 'Open registration',
      price: 'Free',
      desc: 'Experience the SAMPO System from anywhere. A live initiation into the foundations of shamanic energy work. Open to all seekers — no prior experience required.',
      img: 'healing-global-harmony.jpg',
      color: DIVINE_GOLD,
      badge: 'Free Entry',
      highlights: ['Live Q&A', 'Energy Practice', 'SAMPO Intro', 'Worldwide Access']
    },
  ];

  const eventSections = events.map((ev, i) => {
    const highlightHtml = ev.highlights.map(h =>
      `<span style="font-family:'Lato',sans-serif;font-size:10px;font-weight:600;color:${EARTH_BROWN};background:${ev.color}12;border:1px solid ${ev.color}25;border-radius:50px;padding:5px 12px;display:inline-block;margin:3px;">${h}</span>`
    ).join('');

    const contentCol = col(58, { content_position: 'center', padding: pad(48, 56, 48, 56), padding_mobile: pad(32, 20, 32, 20), _column_size_mobile: 100 }, [
      text(`<div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:16px;">
        <span style="font-family:'Cinzel',serif;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${ev.color};background:${ev.color}12;padding:6px 16px;border-radius:50px;border:1px solid ${ev.color}25;">${ev.tag}</span>
        <span style="font-family:'Cinzel',serif;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${STONE_GRAY};background:${PARCHMENT};padding:6px 16px;border-radius:50px;">${ev.badge}</span>
      </div>`, '', typo('typography', { f: 'Cinzel', s: 10 })),
      spacer(12),
      heading(ev.title, 'h3', CHARCOAL_WARM, { f: 'Cinzel', s: 26, sm: 20, w: 600, lh: 1.2 }),
      text(`<p style="font-family:'Lato',sans-serif;font-size:15px;line-height:1.8;color:${EARTH_BROWN};">${ev.desc}</p>`, '', typo('typography', { f: 'Lato', s: 15, sm: 14, lh: 1.8 })),
      text(`<div style="margin-top:16px;display:flex;flex-wrap:wrap;gap:8px;">${highlightHtml}</div>`, '', typo('typography', { f: 'Lato', s: 10 })),
      spacer(20),
      text(`<div style="border-top:1px solid rgba(196,148,42,0.12);padding-top:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">
        <div>
          <div style="font-family:'Lato',sans-serif;font-weight:600;font-size:13px;color:${CHARCOAL_WARM};margin-bottom:4px;">📍 ${ev.date} · ${ev.loc}</div>
          <div style="font-family:'Lato',sans-serif;font-size:11px;color:${STONE_GRAY};">🪑 <span style="color:${ev.color};font-weight:600;">${ev.seats}</span></div>
        </div>
        <div style="font-family:'Cinzel',serif;font-size:28px;font-weight:600;color:${CHARCOAL_WARM};">${ev.price}</div>
      </div>`, '', typo('typography', { f: 'Lato', s: 13 })),
      spacer(24),
      btn('Register →', 'https://forms.gle/jEDaUrKwbyHd8WvUA', `linear-gradient(135deg,${ev.color},${LIGHT_GOLD})`, '#FFFFFF',
        { f: 'Cinzel', s: 11, w: 600, ls: 2, t: 'uppercase' },
        { text_padding: pad(14, 36, 14, 36), border_radius: 50 })
    ]);
    const imageCol = col(42, { content_position: 'stretch', _column_size_mobile: 100 }, [
      img(`${SITE}/${ev.img}`, ev.title)
    ]);
    const cols = i % 2 === 0 ? [contentCol, imageCol] : [imageCol, contentCol];
    return sec({
      background_background: 'classic', background_color: IVORY,
      border_border: 'solid', border_width: px(1), border_color: 'rgba(196,148,42,0.1)',
      border_radius: px(24), box_shadow_box_shadow: { horizontal: 0, vertical: 16, blur: 48, spread: 0, color: 'rgba(44,36,22,0.05)' },
      margin: pad(0, 0, 32, 0), overflow: 'hidden', padding: pad(0, 0, 0, 0),
    }, cols, true);
  });

  return sec({
    background_background: 'classic', background_color: DUNE_SAND,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    custom_css: `
selector { position:relative; }
selector::before {
  content:''; position:absolute; top:-60px; left:0; right:0; height:120px;
  background:linear-gradient(to bottom, ${IVORY}, transparent);
  pointer-events:none; z-index:1;
}
`
  }, [
    col(100, {}, [
      eyebrow('Upcoming Gatherings'),
      spacer(16),
      heading(`Join the<br><em style="background:linear-gradient(135deg,${DIVINE_GOLD},${EARTH_TERRA});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Sacred Circle</em>`, 'h2', CHARCOAL_WARM,
        { f: 'Cinzel', s: 52, sm: 30, st: 42, w: 400, lh: 1.0, ls: -0.5 },
        { ...anim('fadeInUp') }),
      spacer(56),
      ...eventSections,
    ])
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 9: TRANSFORMATION — Global Impact Timeline
// ═══════════════════════════════════════════════════════════════
function transformationSection() {
  const milestones = [
    { year: '2004', loc: 'Mount Fuji, Japan', text: '2,500 people gathered at the base of Mount Fuji under Abhay\'s guidance. Shaman chiefs from North America and Asian tribes united in ceremony for the first time.' },
    { year: '2007', loc: 'South Russia', text: 'Major peace conferences and large spiritual gatherings where prayers and sacred rituals were held to bring peace and healing to the war-torn region.' },
    { year: '2015', loc: 'Chile', text: 'When earthquakes, volcanic ash, and severe drought converged on Chile, Abhay led ceremonies to shift the collective energetic field and support recovery.' },
    { year: '2022', loc: 'Ukraine', text: 'During the New Year\'s Retreat, Abhay received a vision of the invasion. Sacred ceremonies were organized across Europe to focus healing energy on the region.' },
  ];

  const timelineHtml = milestones.map((m, i) => `
    <div style="margin-bottom:48px;padding-left:36px;border-left:2px solid ${PALE_GOLD};position:relative;">
      <div style="position:absolute;left:-11px;top:6px;width:22px;height:22px;border-radius:50%;border:2px solid ${DIVINE_GOLD};background:${IVORY};display:flex;align-items:center;justify-content:center;">
        <div style="width:10px;height:10px;border-radius:50%;background:${DIVINE_GOLD};"></div>
      </div>
      <div style="display:flex;align-items:baseline;gap:20px;margin-bottom:12px;flex-wrap:wrap;">
        <span style="font-family:'Cinzel',serif;font-size:32px;font-weight:600;color:${DIVINE_GOLD};">${m.year}</span>
        <span style="font-family:'Lato',sans-serif;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${STONE_GRAY};">${m.loc}</span>
      </div>
      <p style="font-family:'Lato',sans-serif;font-size:15px;line-height:1.85;color:${EARTH_BROWN};margin:0;">${m.text}</p>
    </div>`).join('');

  return sec({
    background_background: 'classic', background_color: IVORY,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),
  }, [
    col(45, { content_position: 'center', _column_size_mobile: 100 }, [
      eyebrow('Global Impact'),
      spacer(16),
      text(`<blockquote style="margin:0;border-left:3px solid ${DIVINE_GOLD};padding-left:32px;">
        <p style="font-family:'Cinzel',serif;font-style:italic;font-size:34px;line-height:1.35;color:${CHARCOAL_WARM};margin:0 0 24px 0;">"When you reconnect with your wild nature, trauma doesn't just heal — it transforms into power."</p>
        <footer style="font-family:'Lato',sans-serif;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${STONE_GRAY};">— Shaman Abhay Oyun</footer>
      </blockquote>`, '',
        typo('typography', { f: 'Lato', s: 14 }), { ...anim('fadeInLeft') }),
      spacer(32),
      dividerW('rgba(196,148,42,0.15)'),
      spacer(20),
      text(`<p style="font-family:'Lato',sans-serif;font-size:15px;line-height:1.9;color:${EARTH_BROWN};">Called <strong>Guardian of Our Planet</strong>, Abhay Oyun has dedicated his life to responding to global crises through the ancient lens of shamanic intervention.</p>`, '',
        typo('typography', { f: 'Lato', s: 15, sm: 14, lh: 1.9 })),
    ]),
    col(55, { content_position: 'top', _column_size_mobile: 100 }, [
      text(`<div style="padding-top:40px;">${timelineHtml}</div>`, '', typo('typography', { f: 'Lato', s: 15 }), { ...anim('fadeInRight') }),
    ])
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 10: YOUTUBE — Sacred Teachings
// ═══════════════════════════════════════════════════════════════
function youtubeSection() {
  const videos = [
    { id: 'kjFiyWgyvu0', title: 'Abhay Oyun Teaching' },
    { id: 'EqEK-5uJrAA', title: 'Sacred Drum Ceremony' },
    { id: 'MXW78uQR7xg', title: 'Shamanic Initiation' },
    { id: 'rNviNzWV-e4', title: 'Nature Synchronization' },
    { id: '9ftcHfDEjeI', title: 'The SAMPO System' },
  ];

  const mkVid = (v) => w('video', {
    video_type: 'youtube',
    youtube_url: `https://www.youtube.com/watch?v=${v.id}`,
    show_image_overlay: 'yes', lightbox: 'yes',
    image_overlay: { url: `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`, id: '' },
  });

  return sec({
    background_background: 'classic', background_color: PARCHMENT,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    custom_css: `
selector { position:relative; }
selector::before {
  content:''; position:absolute; top:-60px; left:0; right:0; height:120px;
  background:linear-gradient(to bottom, ${IVORY}, transparent);
  pointer-events:none; z-index:1;
}
`
  }, [
    col(100, {}, [
      eyebrow('Sacred Teachings'),
      spacer(16),
      heading(`Watch &<br><em style="color:rgba(44,36,22,0.3)">Learn</em>`, 'h2', CHARCOAL_WARM,
        { f: 'Cinzel', s: 48, sm: 28, st: 38, w: 400, lh: 1.05, ls: -0.5 },
        { ...anim('fadeInUp') }),
      spacer(40),
      sec({ padding: pad(0, 0, 24, 0) }, [
        col(33, { _column_size_mobile: 100 }, [mkVid(videos[0])]),
        col(33, { _column_size_mobile: 100 }, [mkVid(videos[1])]),
        col(34, { _column_size_mobile: 100 }, [mkVid(videos[2])]),
      ], true),
      sec({ padding: pad(0, 0, 0, 0) }, [
        col(50, { _column_size_mobile: 100 }, [mkVid(videos[3])]),
        col(50, { _column_size_mobile: 100 }, [mkVid(videos[4])]),
      ], true),
      spacer(32),
      text(`<p style="text-align:center;"><a href="https://www.youtube.com/@AbhayOyun" target="_blank" style="display:inline-flex;align-items:center;gap:12px;font-family:'Cinzel',serif;padding:16px 36px;background:${IVORY};border:1px solid rgba(196,148,42,0.2);border-radius:50px;font-size:11px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${CHARCOAL_WARM};text-decoration:none;box-shadow:0 6px 24px rgba(44,36,22,0.06);transition:all 0.3s ease;">▶ Subscribe to Channel</a></p>`, '', typo('typography', { f: 'Cinzel', s: 11 }), { align: 'center' })
    ])
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 11: WEBINAR CTA — Your Transformation Starts
// ═══════════════════════════════════════════════════════════════
function webinarCTASection() {
  const benefits = [
    'Live introduction to the SAMPO psycho-energetic system',
    'Discover your unique energy type and its strengths',
    'First steps in shamanic self-healing techniques',
    'Live Q&A with Shaman Abhay Oyun',
  ];

  const benefitsHtml = benefits.map(b => `
    <li style="display:flex;align-items:center;gap:18px;margin-bottom:18px;">
      <div style="width:32px;height:32px;border-radius:50%;border:2px solid ${DIVINE_GOLD};flex-shrink:0;display:flex;align-items:center;justify-content:center;background:${PALE_GOLD};">
        <span style="color:${DIVINE_GOLD};font-size:14px;font-weight:700;">✓</span>
      </div>
      <span style="font-family:'Lato',sans-serif;font-size:16px;color:${EARTH_BROWN};line-height:1.5;">${b}</span>
    </li>`).join('');

  return sec({
    background_background: 'classic', background_color: MOONLIGHT,
    padding: pad(140, 80, 140, 80),
    padding_mobile: pad(60, 20, 60, 20),
    padding_tablet: pad(80, 40, 80, 40),
    custom_css: `
@keyframes pulse-glow { 0%,100% { opacity:0.8; } 50% { opacity:1; } }
selector { position:relative; overflow:hidden; }
selector::before {
  content:''; position:absolute; top:-60px; left:0; right:0; height:120px;
  background:linear-gradient(to bottom, ${IVORY}, transparent);
  pointer-events:none; z-index:1;
}
/* Floating decorative elements */
.webinar-deco { position:absolute; border-radius:50%; pointer-events:none; }
`
  }, [
    col(48, { content_position: 'center', _column_size_mobile: 100 }, [
      eyebrow('Free Webinar'),
      spacer(16),
      heading(`Your Transformation<br><em style="background:linear-gradient(135deg,${DIVINE_GOLD},${SUNSET_GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Starts Free</em>`, 'h2', CHARCOAL_WARM,
        { f: 'Cinzel', s: 44, sm: 28, st: 36, w: 400, lh: 1.0, ls: -0.5 },
        { ...anim('fadeInUp') }),
      spacer(20),
      text(`<p style="font-family:'Lato',sans-serif;font-size:16px;line-height:1.9;color:${EARTH_BROWN};">Join thousands who made their first shift in a single free masterclass. No experience required — only willingness to begin.</p>`, '',
        typo('typography', { f: 'Lato', s: 16, sm: 14, lh: 1.9 })),
      spacer(24),
      text(`<ul style="list-style:none;padding:0;margin:0;">${benefitsHtml}</ul>`, '', typo('typography', { f: 'Lato', s: 16 })),
    ]),
    col(52, { content_position: 'center', _column_size_mobile: 100 }, [
      text(`<div style="background:${IVORY};border-radius:28px;padding:52px;border:1px solid rgba(196,148,42,0.15);box-shadow:0 24px 80px rgba(44,36,22,0.08);position:relative;overflow:hidden;">
        <div style="position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,${DIVINE_GOLD},${FOREST_DEEP},${EARTH_TERRA});"></div>
        <div style="position:absolute;top:-40px;right:-40px;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle,${PALE_GOLD} 0%,transparent 70%);opacity:0.5;"></div>
        <div style="position:absolute;bottom:-30px;left:-30px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,${MOSS_LIFE}22 0%,transparent 70%);opacity:0.4;"></div>

        <div style="margin-bottom:28px;">
          <span style="display:inline-block;font-family:'Cinzel',serif;font-size:10px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${DIVINE_GOLD};background:${PALE_GOLD};padding:8px 16px;border-radius:50px;margin-bottom:16px;">Next Session</span>
          <div style="font-family:'Cinzel',serif;font-size:44px;color:${CHARCOAL_WARM};margin-bottom:8px;">March 19, 2025</div>
          <div style="font-family:'Lato',sans-serif;font-size:14px;color:${STONE_GRAY};">Online · Free Entry · Worldwide</div>
        </div>

        <div style="border-top:1px solid rgba(196,148,42,0.12);padding-top:24px;margin-bottom:28px;">
          <div style="font-family:'Cinzel',serif;font-style:italic;font-size:18px;color:${EARTH_BROWN};line-height:1.7;">"The first step costs nothing but the courage to begin."</div>
        </div>

        <a href="https://forms.gle/jEDaUrKwbyHd8WvUA" target="_blank" style="display:block;text-align:center;padding:18px;background:linear-gradient(135deg,${DIVINE_GOLD},${LIGHT_GOLD});color:#fff;font-family:'Cinzel',serif;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;border-radius:50px;text-decoration:none;margin-bottom:14px;box-shadow:0 8px 28px rgba(196,148,42,0.35);transition:all 0.3s ease;">Reserve Your Spot — Free →</a>
        <a href="https://calendly.com/hurraymangalam/individualsessions" target="_blank" style="display:block;text-align:center;padding:18px;background:transparent;color:${EARTH_BROWN};font-family:'Cinzel',serif;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;border-radius:50px;border:1px solid rgba(196,148,42,0.25);text-decoration:none;">Or Book Private 1-on-1 Session</a>
      </div>`, '', typo('typography', { f: 'Lato', s: 14 }), { ...anim('fadeInRight', 'slow', 200) }),
    ])
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 12: FINAL CTA — Step Into the Sacred Field
// ═══════════════════════════════════════════════════════════════
function finalCTASection() {
  const trustHtml = ['35+ Years of Practice', '40 Countries Served', '10,000+ Transformations'].map(t =>
    `<div style="display:flex;align-items:center;gap:10px;"><div style="width:5px;height:5px;border-radius:50%;background:${DIVINE_GOLD};"></div><span style="font-family:'Cinzel',serif;font-size:11px;letter-spacing:2px;color:${STONE_GRAY};">${t}</span></div>`
  ).join('');

  const socialHtml = [
    ['Instagram', 'https://www.instagram.com/earthforpeace/'],
    ['YouTube', 'https://www.youtube.com/@earthforpeace'],
    ['Facebook', 'https://www.facebook.com/abhayoyun0/'],
  ].map(([l, h]) =>
    `<a href="${h}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:12px 24px;background:${PARCHMENT};border:1px solid rgba(196,148,42,0.12);border-radius:50px;font-family:'Cinzel',serif;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:${EARTH_BROWN};text-decoration:none;transition:all 0.3s ease;">${l}</a>`
  ).join('');

  return sec({
    background_background: 'classic', background_color: DUNE_SAND,
    padding: pad(160, 80, 160, 80),
    padding_mobile: pad(80, 20, 80, 20),
    custom_css: `
@keyframes shimmer { 0% { background-position:-200% center; } 100% { background-position:200% center; } }
selector { position:relative; overflow:hidden; }
selector::before {
  content:''; position:absolute; right:5%; top:0; bottom:0; width:420px;
  background-image:url('${SITE}/abhayoyun-banner-top.png');
  background-size:contain; background-position:right bottom; background-repeat:no-repeat;
  opacity:0.1; pointer-events:none; z-index:0;
}
@media (max-width:1024px) { selector::before { right:-5%; width:360px; } }
@media (max-width:768px) { selector::before { display:none; } }
`
  }, [
    col(100, {}, [
      eyebrow('Your Journey Begins'),
      spacer(20),
      heading(`Step Into the<br><em style="background:linear-gradient(135deg,${DIVINE_GOLD},${FOREST_DEEP});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-style:normal;">Sacred Field</em>`, 'h2', CHARCOAL_WARM,
        { f: 'Cinzel', s: 64, sm: 36, st: 52, w: 400, lh: 0.95, ls: -1 },
        { ...anim('fadeInUp') }),
      spacer(20),
      text(`<p style="max-width:560px;font-family:'Lato',sans-serif;font-size:17px;line-height:1.9;color:${EARTH_BROWN};">Whether you begin with a free webinar or a personal shamanic session — transformation begins with a single decision to show up for yourself.</p>`, '',
        typo('typography', { f: 'Lato', s: 17, sm: 15, lh: 1.9 })),
      spacer(40),
      sec({ padding: pad(0, 0, 0, 0) }, [
        col(50, { align: 'left', align_mobile: 'center', _column_size_mobile: 100 }, [
          btn('Book a Free Session', 'https://calendly.com/hurraymangalam/individualsessions', `linear-gradient(135deg,${DIVINE_GOLD},${LIGHT_GOLD})`, '#FFFFFF',
            { f: 'Cinzel', s: 12, sm: 11, w: 600, ls: 2, t: 'uppercase' },
            { text_padding: pad(18, 48, 18, 48), border_radius: 50, box_shadow_box_shadow: { horizontal: 0, vertical: 12, blur: 36, color: 'rgba(196,148,42,0.3)' } })
        ]),
        col(50, { align: 'left', align_mobile: 'center', _column_size_mobile: 100 }, [
          btn('Watch Free Webinar', 'https://forms.gle/jEDaUrKwbyHd8WvUA', PARCHMENT, CHARCOAL_WARM,
            { f: 'Cinzel', s: 12, sm: 11, w: 600, ls: 2, t: 'uppercase' },
            { text_padding: pad(18, 48, 18, 48), border_border: 'solid', border_width: px(1.5), border_color: `rgba(196,148,42,0.3)`, border_radius: 50 })
        ])
      ], true),
      spacer(40),
      text(`<div style="display:flex;gap:36px;flex-wrap:wrap;">${trustHtml}</div>`, '', typo('typography', { f: 'Cinzel', s: 11 })),
      spacer(28),
      text(`<div style="display:flex;gap:16px;flex-wrap:wrap;">${socialHtml}</div>`, '', typo('typography', { f: 'Cinzel', s: 10 })),
    ])
  ]);
}

// ═══════════════════════════════════════════════════════════════
// SECTION 13: FOOTER — Sacred Closure
// ═══════════════════════════════════════════════════════════════
function footerSection() {
  const navLinks = [['Teachings', '#teachings'], ['Events', '#events'], ['Journey', '#transform'], ['Book Session', 'https://calendly.com/hurraymangalam/individualsessions']].map(([l, h]) =>
    `<li style="margin-bottom:14px;"><a href="${h}" style="font-family:'Lato',sans-serif;font-size:14px;color:${EARTH_BROWN};text-decoration:none;transition:color 0.2s;">${l}</a></li>`
  ).join('');

  const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(l =>
    `<li style="margin-bottom:14px;"><a href="#" style="font-family:'Lato',sans-serif;font-size:14px;color:${EARTH_BROWN};text-decoration:none;">${l}</a></li>`
  ).join('');

  const socialLinks = [
    ['FB', 'https://www.facebook.com/abhayoyun0/'],
    ['IG', 'https://www.instagram.com/abhayoyun/'],
    ['YT', 'https://www.youtube.com/@earthforpeace'],
  ].map(([s, h]) =>
    `<a href="${h}" target="_blank" style="width:40px;height:40px;border-radius:50%;background:${PARCHMENT};border:1px solid rgba(196,148,42,0.12);display:inline-flex;align-items:center;justify-content:center;font-family:'Cinzel',serif;font-size:10px;font-weight:600;color:${EARTH_BROWN};text-decoration:none;transition:all 0.3s ease;">${s}</a>`
  ).join('');

  return sec({
    background_background: 'classic', background_color: WARM_STONE,
    border_border: 'solid', border_width: { unit: 'px', top: '1', right: '0', bottom: '0', left: '0', isLinked: false }, border_color: 'rgba(196,148,42,0.15)',
    padding: pad(80, 48, 32, 48),
    padding_mobile: pad(48, 20, 32, 20),
  }, [
    col(30, { _column_size_mobile: 100 }, [
      text(`<span style="font-family:'Cinzel',serif;font-size:24px;font-weight:600;color:${CHARCOAL_WARM};">ABHAY <span style="background:linear-gradient(135deg,${DIVINE_GOLD},${LIGHT_GOLD});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">OYUN</span></span>`, '', typo('typography', { f: 'Cinzel', s: 24 })),
      text(`<p style="font-family:'Lato',sans-serif;font-size:14px;line-height:1.9;color:${EARTH_BROWN};max-width:280px;margin-top:12px;">Master Shaman. Global Healer. Awakening the world to the raw power of ancient Siberian traditions.</p>`, '', typo('typography', { f: 'Lato', s: 14 })),
      text(`<div style="display:flex;flex-direction:column;gap:8px;margin-top:16px;">
        <a href="mailto:energeticalmaster@gmail.com" style="font-family:'Lato',sans-serif;font-size:12px;color:${STONE_GRAY};text-decoration:none;">✉ energeticalmaster@gmail.com</a>
        <a href="tel:+12122561366" style="font-family:'Lato',sans-serif;font-size:12px;color:${STONE_GRAY};text-decoration:none;">☎ (212) 256 1366</a>
      </div>`, '', typo('typography', { f: 'Lato', s: 12 })),
      spacer(20),
      text(`<div style="display:flex;gap:10px;">${socialLinks}</div>`, '', typo('typography', { f: 'Cinzel', s: 11 })),
    ]),
    col(20, { _column_size_mobile: 50 }, [
      text(`<p style="font-family:'Cinzel',serif;font-size:15px;font-weight:600;color:${CHARCOAL_WARM};margin-bottom:20px;">Navigate</p><ul style="list-style:none;padding:0;margin:0;">${navLinks}</ul>`, '', typo('typography', { f: 'Lato', s: 14 })),
    ]),
    col(20, { _column_size_mobile: 50 }, [
      text(`<p style="font-family:'Cinzel',serif;font-size:15px;font-weight:600;color:${CHARCOAL_WARM};margin-bottom:20px;">Legal</p><ul style="list-style:none;padding:0;margin:0;">${legalLinks}</ul>`, '', typo('typography', { f: 'Lato', s: 14 })),
    ]),
    col(30, { _column_size_mobile: 100 }, [
      text(`<p style="font-family:'Cinzel',serif;font-size:15px;font-weight:600;color:${CHARCOAL_WARM};margin-bottom:8px;">Receive Weekly Wisdom</p><p style="font-family:'Lato',sans-serif;font-size:14px;color:${EARTH_BROWN};line-height:1.7;margin-bottom:16px;">Sacred insights and practices directly from the shaman.</p>`, '', typo('typography', { f: 'Lato', s: 14 })),
      text(`<div style="display:flex;">
        <input type="email" placeholder="Your email" style="flex:1;padding:14px 18px;background:${IVORY};border:1px solid rgba(196,148,42,0.2);border-right:none;border-radius:50px 0 0 50px;font-family:'Lato',sans-serif;font-size:14px;color:${CHARCOAL_WARM};outline:none;" disabled />
        <div style="padding:14px 22px;background:linear-gradient(135deg,${DIVINE_GOLD},${LIGHT_GOLD});color:#fff;border-radius:0 50px 50px 0;font-family:'Cinzel',sans-serif;font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;display:flex;align-items:center;cursor:pointer;">Join</div>
      </div>`, '', typo('typography', { f: 'Cinzel', s: 11 })),
    ]),
  ]);
}

module.exports = {
  teachingsSection, eventsSection, transformationSection,
  youtubeSection, webinarCTASection, finalCTASection, footerSection
};
