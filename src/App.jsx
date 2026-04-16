import { useState } from 'react'

/* ── Image URLs from Pencil design ──────────────────────────────────────── */
const HERO_IMG = 'https://images.unsplash.com/photo-1629977008298-926046be0a8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920'
const WWD_IMG_1 = 'https://images.unsplash.com/photo-1607417306748-8479df424735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
const WWD_IMG_2 = 'https://images.unsplash.com/photo-1603291697926-7e5822ed1ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
const WWD_IMG_3 = 'https://images.unsplash.com/photo-1525436519918-5671ec6c6b50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
const WWD_IMG_4 = 'https://images.unsplash.com/photo-1754546995327-14ac5c848fb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
const INTL_IMG = 'https://images.unsplash.com/photo-1763711692285-d0abc5861b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
const GALLERY_1 = 'https://images.unsplash.com/photo-1559506144-0f4f1a05c4ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
const GALLERY_2 = 'https://images.unsplash.com/photo-1646743934953-d68ede89dd60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
const PROMISES_IMG = 'https://images.unsplash.com/photo-1599446691418-9938936aa43b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
const ACADEMY_IMG = 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
const IMPACT_IMG = 'https://images.unsplash.com/photo-1748803070479-e63a262acbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=800'
const MANIFESTO_IMG = 'https://images.unsplash.com/photo-1535116574766-9a678bf80bf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920'
const PROJ_1_IMG = 'https://images.unsplash.com/photo-1608154119029-53f3c6ad12e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900'
const PROJ_2_IMG = 'https://images.unsplash.com/photo-1598863505577-74750d3b4475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900'
const PROJ_3_IMG = 'https://images.unsplash.com/photo-1661282490410-4023ca233fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900'

/* ── Header ─────────────────────────────────────────────────────────────── */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <span className="header-logo">WOMANGOAL</span>
        <div className="header-right">
          <span className="header-nav">
            Nosotras · Servicios · Internacional · Promises · Academia · Contacto
          </span>
          <span className="header-lang">ES / EN</span>
          <button className="header-cta">Solicitar info</button>
        </div>
        <button
          className="header-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-menu" role="dialog" aria-label="Menú principal">
          <button
            className="mobile-menu-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
          {['Nosotras', 'Servicios', 'Internacional', 'Promises', 'Academia', 'Contacto'].map(item => (
            <span
              key={item}
              className="mobile-menu-link"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </span>
          ))}
          <button className="mobile-menu-cta" onClick={() => setMenuOpen(false)}>
            Solicitar info
          </button>
        </nav>
      )}
    </>
  )
}

/* ── Hero ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <img src={HERO_IMG} alt="Womangoal — fútbol femenino" className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-line">WE LIVE</span>
        <span className="hero-line">WOMEN'S</span>
        <span className="hero-line">FOOTBALL.</span>
        <div className="hero-sub-wrap">
          <p className="hero-sub">
            Agencia internacional de fútbol femenino. Madrid → el mundo.
          </p>
        </div>
      </div>
      <div className="hero-scroll">
        <span className="hero-scroll-txt">SCROLL</span>
        <span className="hero-scroll-icon">↓</span>
      </div>
    </section>
  )
}

/* ── Brand Section ───────────────────────────────────────────────────────── */
function Brand() {
  return (
    <section className="brand" id="nosotras">
      <h2 className="brand-headline">Somos Womangoal.</h2>
      <p className="brand-body">
        Conectamos talento, clubes y oportunidades en el fútbol femenino global desde Madrid.
      </p>
      <div className="brand-rule" />
      <button className="brand-cta">Conócenos →</button>
    </section>
  )
}

/* ── What We Do ──────────────────────────────────────────────────────────── */
function WhatWeDo() {
  const cards = [
    {
      num: '01.',
      img: WWD_IMG_1,
      title: 'INTERNATIONAL DRAFTS',
      desc: 'Conectamos jugadoras con clubes internacionales en Europa, USA y México.',
    },
    {
      num: '02.',
      img: WWD_IMG_2,
      title: 'PROMISES DRAFT NACIONAL',
      desc: 'Programa de detección de jóvenes talentos a nivel nacional.',
    },
    {
      num: '03.',
      img: WWD_IMG_3,
      title: 'WOMANGOAL ACADEMY',
      desc: 'Formación integral para jugadoras con proyección internacional.',
    },
    {
      num: '04.',
      img: WWD_IMG_4,
      title: 'REPRESENTACIÓN & ASESORÍA',
      desc: 'Gestión integral de carrera, contratos, imagen y asesoría legal.',
    },
  ]

  return (
    <section className="wwd" id="servicios">
      <span className="wwd-label">WHAT WE DO</span>
      <div className="wwd-grid">
        {cards.map(card => (
          <article className="wwd-card" key={card.num}>
            <span className="wwd-card-num">{card.num}</span>
            <img src={card.img} alt={card.title} className="wwd-card-img" />
            <span className="wwd-card-title">{card.title}</span>
            <p className="wwd-card-desc">{card.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ── International Section ───────────────────────────────────────────────── */
function International() {
  return (
    <section className="intl" id="internacional">
      <div className="intl-split">
        <img src={INTL_IMG} alt="Drafts Internacionales" className="intl-photo" />
        <div className="intl-txt">
          <span className="intl-eyebrow">Línea Internacional</span>
          <div>
            <div className="intl-h1">DRAFTS</div>
            <div className="intl-h2">INTERNACIONALES</div>
          </div>
          <p className="intl-desc">
            Conectamos el talento del fútbol femenino español con los mejores clubes
            internacionales. Un proceso de scouting riguroso, showcase events exclusivos
            y acompañamiento personalizado en cada etapa.
          </p>
          <div className="intl-arrows">
            {[
              '→  Scouting global',
              '→  Conexión con clubes top Europa / USA / México',
              '→  Showcase events exclusivos',
              '→  Acompañamiento integral en cada etapa',
            ].map(item => (
              <span className="intl-arrow-item" key={item}>{item}</span>
            ))}
          </div>
          <button className="intl-cta">Solicitar información →</button>
        </div>
      </div>
      <div className="intl-gallery">
        <img src={GALLERY_1} alt="Galería 1" className="intl-gallery-img" />
        <img src={GALLERY_2} alt="Galería 2" className="intl-gallery-img" />
        <img src={GALLERY_2} alt="Galería 3" className="intl-gallery-img" />
        <img src={GALLERY_1} alt="Galería 4" className="intl-gallery-img" />
      </div>
    </section>
  )
}

/* ── Promises Section ────────────────────────────────────────────────────── */
function Promises() {
  const pillars = [
    {
      num: '01',
      title: 'DETECTAR',
      desc: 'Identificamos talento emergente en toda España a través de showcases y red de scouts.',
    },
    {
      num: '02',
      title: 'FORMAR',
      desc: 'Metodología Womangoal de alto rendimiento: técnica, táctica, mentalidad y desarrollo personal.',
    },
    {
      num: '03',
      title: 'PROYECTAR',
      desc: 'Conectamos a las mejores jugadoras con clubes, ligas y oportunidades profesionales.',
    },
  ]

  return (
    <section className="promises" id="promises">
      <div className="promises-inner">
        <span className="promises-eyebrow">LÍNEA NACIONAL · NUEVO PROYECTO</span>
        <div className="promises-lockup">
          <div className="promises-badge">
            <span className="promises-badge-letter">P</span>
          </div>
          <div className="promises-subbrand">
            <span className="promises-title1">PROMISES</span>
            <span className="promises-title2">by Womangoal</span>
          </div>
        </div>
        <div className="promises-spacer" />
        <h2 className="promises-headline">
          EL FUTURO DEL FÚTBOL FEMENINO ESPAÑOL
        </h2>
        <p className="promises-body">
          Promises es nuestro programa nacional para detectar, formar y proyectar el talento
          del fútbol femenino español. Un proyecto cercano, ambicioso y hecho por y para
          jugadoras españolas.
        </p>
        <div className="promises-content-row">
          <img src={PROMISES_IMG} alt="Promises" className="promises-photo" />
          <div className="promises-pillars">
            {pillars.map(p => (
              <div className="promises-pillar" key={p.num}>
                <div className="promises-pillar-border" />
                <span className="promises-pillar-num">{p.num}</span>
                <span className="promises-pillar-title">{p.title}</span>
                <p className="promises-pillar-desc">{p.desc}</p>
              </div>
            ))}
            <div className="promises-pillar-border" />
          </div>
        </div>
        <div className="promises-cta-row">
          <button className="promises-cta-btn">Quiero info sobre Promises →</button>
          <span className="promises-sec-link">Ver ediciones anteriores</span>
        </div>
      </div>
    </section>
  )
}

/* ── Academy Section ─────────────────────────────────────────────────────── */
function Academy() {
  const steps = [
    {
      num: '01',
      title: 'MODELO DE FRANQUICIA',
      desc: 'Sistema probado de licencia con soporte operativo, legal y de marketing desde el primer día.',
    },
    {
      num: '02',
      title: 'METODOLOGÍA',
      desc: 'Formación de entrenadores certificados con metodología Womangoal de alto rendimiento.',
    },
    {
      num: '03',
      title: 'SOPORTE DE MARCA',
      desc: 'Marketing, identidad visual, eventos y comunicación gestionados centralmente.',
    },
  ]

  return (
    <section className="academy" id="academia">
      <div className="academy-inner">
        <span className="academy-eyebrow">WOMANGOAL ACADEMY</span>
        <img src={ACADEMY_IMG} alt="Womangoal Academy" className="academy-visual" />
        <h2 className="academy-headline">
          OPEN A WOMANGOAL ACADEMY ANYWHERE IN THE WORLD.
        </h2>
        <p className="academy-body">
          Nuestro modelo de franquicia permite abrir una Womangoal Academy en cualquier
          parte del mundo. Metodología probada, soporte de marca completo y comunidad global
          de entrenadores.
        </p>
        <div className="academy-steps-row">
          {steps.map(s => (
            <div className="academy-step" key={s.num}>
              <span className="academy-step-num">{s.num}</span>
              <span className="academy-step-title">{s.title}</span>
              <p className="academy-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="academy-cta-row">
          <button className="academy-cta-btn">Abrir una academia →</button>
          <span className="academy-cta-secondary">Ver academias actuales</span>
        </div>
      </div>
    </section>
  )
}

/* ── Partners Section ────────────────────────────────────────────────────── */
function Partners() {
  const partners = ['UEFA', 'RFEF', 'KAPPA', 'YouTube', 'FOREO', 'EVEROY', 'EVERTON FC']

  return (
    <section className="partners">
      <div className="partners-divider" />
      <div className="partners-inner">
        <span className="partners-label">WE WORK WITH</span>
        <div className="partners-row">
          {partners.map(p => (
            <div className="partner-item" key={p}>
              <span className="partner-name">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Featured Projects ───────────────────────────────────────────────────── */
function FeaturedProjects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects-header">
        <span className="projects-title">PROYECTOS DESTACADOS</span>
        <span className="projects-view-all">Ver todos →</span>
      </div>

      {/* Project 1: photo left */}
      <div className="project-row">
        <img src={PROJ_1_IMG} alt="Draft USA 2025" className="project-photo" />
        <div className="project-content project-content--light">
          <span className="project-num">01</span>
          <span className="project-tag">INTERNACIONAL · 2025</span>
          <h3 className="project-name">Draft USA 2025</h3>
          <p className="project-desc">
            32 jugadoras españolas proyectadas hacia la NWSL y ligas universitarias americanas.
            El mayor draft internacional de la historia de Womangoal.
          </p>
          <span className="project-cta">Ver proyecto →</span>
        </div>
      </div>

      {/* Project 2: content left, photo right */}
      <div className="project-row">
        <div className="project-content project-content--lighter">
          <span className="project-num">02</span>
          <span className="project-tag">NACIONAL · 2024</span>
          <h3 className="project-name">Promises Madrid — Primera Edición</h3>
          <p className="project-desc">
            Más de 200 jugadoras seleccionadas de toda España. 18 clubs nacionales presentes.
            El lanzamiento del programa de captación de talento más ambicioso del fútbol femenino español.
          </p>
          <span className="project-cta">Ver proyecto →</span>
        </div>
        <img src={PROJ_2_IMG} alt="Promises Madrid" className="project-photo" />
      </div>

      {/* Project 3: photo left */}
      <div className="project-row">
        <img src={PROJ_3_IMG} alt="Womangoal Academy México" className="project-photo" />
        <div className="project-content project-content--light">
          <span className="project-num">03</span>
          <span className="project-tag">ACADEMIA · MÉXICO · 2024</span>
          <h3 className="project-name">Womangoal Academy México</h3>
          <p className="project-desc">
            Primera academia Womangoal fuera de España. 120 jugadoras formadas en la primera
            temporada con metodología oficial Womangoal.
          </p>
          <span className="project-cta">Ver proyecto →</span>
        </div>
      </div>
    </section>
  )
}

/* ── Impact Section ──────────────────────────────────────────────────────── */
function Impact() {
  const stats = [
    { num: '+350', label: 'jugadoras representadas y proyectadas' },
    { num: '+25', label: 'países con presencia activa' },
    { num: '+80', label: 'clubes partners en todo el mundo' },
  ]

  return (
    <section className="impact" id="impacto">
      <div className="impact-inner">
        <div className="impact-left">
          <img src={IMPACT_IMG} alt="Equipo Womangoal" className="impact-team-photo" />
          <span className="impact-eyebrow">NUESTRO IMPACTO</span>
          <p className="impact-manifesto">
            Llevamos años construyendo el futuro del fútbol femenino, jugadora a jugadora,
            club a club, país a país.
          </p>
          <p className="impact-body">
            Fundada en Madrid, Womangoal opera hoy en cuatro continentes. Nuestro equipo
            combina experiencia en alto rendimiento deportivo, gestión de clubes y marketing
            internacional.
          </p>
          <span className="impact-cta-team">Conoce al equipo →</span>
        </div>
        <div className="impact-right">
          {stats.map((s, i) => (
            <div className="impact-stat" key={i}>
              <div className="impact-stat-border" />
              <span className="impact-stat-num">{s.num}</span>
              <span className="impact-stat-label">{s.label}</span>
            </div>
          ))}
          <div className="impact-stat-border" />
        </div>
      </div>
    </section>
  )
}

/* ── Manifesto Section ───────────────────────────────────────────────────── */
function Manifesto() {
  return (
    <section className="manifesto">
      <img src={MANIFESTO_IMG} alt="" className="manifesto-bg" aria-hidden="true" />
      <div className="manifesto-overlay" aria-hidden="true" />
      <div className="manifesto-content">
        <span className="manifesto-label">WOMANGOAL</span>
        <span className="manifesto-line1">WE PLAY</span>
        <span className="manifesto-line2">for the ones</span>
        <span className="manifesto-line3">who come next.</span>
      </div>
    </section>
  )
}

/* ── Contact Form ────────────────────────────────────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({
    nombre: '', email: '', club: '', pais: '', interes: '', mensaje: '', rgpd: false,
  })

  const handleChange = e => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    alert('¡Gracias! Nuestro equipo te responde en menos de 48 horas.')
  }

  return (
    <section className="contact" id="contacto">
      <div className="contact-inner">
        <div className="contact-left">
          <span className="contact-eyebrow">CONTACTO</span>
          <h2 className="contact-headline">¿Hablamos? Cuéntanos tu proyecto.</h2>
          <p className="contact-subtitle">
            Nuestro equipo te responde en menos de 48 horas. Todos los mensajes son leídos
            y respondidos personalmente.
          </p>
          <span className="contact-offices-label">OFICINAS</span>
          <p className="contact-office">Madrid (HQ) — Calle Serrano, 41</p>
          <p className="contact-office">Londres · Ciudad de México · Miami</p>
        </div>

        <form className="contact-right" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="nombre">Nombre *</label>
            <input
              id="nombre"
              name="nombre"
              className="form-input"
              type="text"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              className="form-input"
              type="email"
              placeholder="tu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label" htmlFor="club">Club / Organización</label>
              <input
                id="club"
                name="club"
                className="form-input"
                type="text"
                placeholder="Tu club"
                value={form.club}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="pais">País</label>
              <input
                id="pais"
                name="pais"
                className="form-input"
                type="text"
                placeholder="España"
                value={form.pais}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="interes">Estoy interesada/o en *</label>
            <select
              id="interes"
              name="interes"
              className="form-select"
              value={form.interes}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="internacional">Drafts Internacionales</option>
              <option value="promises">Promises — Draft Nacional</option>
              <option value="academy">Womangoal Academy</option>
              <option value="representacion">Representación & Asesoría</option>
              <option value="otros">Otros</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="form-textarea"
              placeholder="Cuéntanos tu proyecto..."
              value={form.mensaje}
              onChange={handleChange}
            />
          </div>
          <div className="form-rgpd">
            <input
              type="checkbox"
              id="rgpd"
              name="rgpd"
              className="form-rgpd-box"
              checked={form.rgpd}
              onChange={handleChange}
              required
            />
            <label htmlFor="rgpd" className="form-rgpd-text">
              He leído y acepto la Política de Privacidad y el uso de mis datos.
            </label>
          </div>
          <button type="submit" className="form-submit">
            CONTACT US / ENVIAR
          </button>
        </form>
      </div>
    </section>
  )
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">WOMANGOAL</span>
          <p className="footer-tagline">
            Agencia internacional de fútbol femenino.{'\n'}Madrid → el mundo.
          </p>
          <div className="footer-newsletter">
            <span className="footer-newsletter-label">NEWSLETTER</span>
            <div className="footer-newsletter-row">
              <input
                className="footer-nl-input"
                type="email"
                placeholder="tu@email.com"
                aria-label="Email para newsletter"
              />
              <button className="footer-nl-btn">Suscribirse</button>
            </div>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Pie de página">
          <div className="footer-nav-col">
            <span className="footer-nav-col-title">AGENCIA</span>
            {['Nosotras', 'Servicios', 'Internacional', 'Promises'].map(l => (
              <span className="footer-link" key={l}>{l}</span>
            ))}
          </div>
          <div className="footer-nav-col">
            <span className="footer-nav-col-title">ACADEMIAS</span>
            {['Abrir academia', 'México', 'Metodología'].map(l => (
              <span className="footer-link" key={l}>{l}</span>
            ))}
          </div>
          <div className="footer-nav-col">
            <span className="footer-nav-col-title">CONTACTO</span>
            {['Instagram', 'YouTube', 'LinkedIn', 'Contacto'].map(l => (
              <span className="footer-link" key={l}>{l}</span>
            ))}
          </div>
        </nav>
      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copyright">
          © 2025 Womangoal. Todos los derechos reservados.
        </span>
        <div className="footer-legal">
          {['Términos y condiciones', 'Privacidad', 'Cookies'].map(l => (
            <span className="footer-legal-link" key={l}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  )
}

/* ── App ─────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brand />
        <WhatWeDo />
        <International />
        <Promises />
        <Academy />
        <Partners />
        <FeaturedProjects />
        <Impact />
        <Manifesto />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
