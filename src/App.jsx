import { useState } from 'react'

/* ── Imágenes oficiales Womangoal ───────────────────────────────────────── */
const IMG_STADIUM      = '/images/stadium-seats.jpg'
const IMG_DRAFT_INTL   = '/images/match-yellow.jpg'
const IMG_PROMISES_ACT = '/images/promises-action.jpg'
const IMG_ACADEMY      = '/images/player-portrait.jpg'
const IMG_REPRESENT    = '/images/player-spain.jpg'
const IMG_DOCUSERIE    = '/images/docuserie.jpg'
const IMG_GROUP_STANDS = '/images/group-stands.jpg'
const IMG_GROUP_PANAMA = '/images/group-panama.jpg'
const IMG_PLAYERS_CLOSE= '/images/players-closeup.jpg'
const IMG_WORLD_MAP    = '/images/world-map.jpg'
const IMG_ACADEMY_NEW  = '/images/academy-new.jpg'
const BALL             = '/images/ball-icon.png'

const BallIcon = () => <img src={BALL} alt="" className="ball-icon" />

/* ── Header ─────────────────────────────────────────────────────────────── */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <a href="#hero" className="header-logo">
          <img src="/logo-womangoal.png" alt="Womangoal" className="header-logo-img" />
        </a>
        <div className="header-right">
          <span className="header-nav">
            Nosotras · Servicios · Draft Internacional · Promises · Academia · Contacto
          </span>
          <span className="header-lang">ES / EN</span>
          <button className="header-cta">Solicitar info</button>
        </div>
        <button className="header-hamburger" onClick={() => setMenuOpen(true)} aria-label="Abrir menú">☰</button>
      </header>

      {menuOpen && (
        <nav className="mobile-menu" role="dialog" aria-label="Menú principal">
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Cerrar menú">✕</button>
          {['Nosotras', 'Servicios', 'Draft Internacional', 'Promises', 'Academia', 'Contacto'].map(item => (
            <span key={item} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>{item}</span>
          ))}
          <button className="mobile-menu-cta" onClick={() => setMenuOpen(false)}>Solicitar info</button>
        </nav>
      )}
    </>
  )
}

/* ── Hero ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" id="hero">
      <video className="hero-video" src="/video-hero.mp4" autoPlay muted loop playsInline />
      <div className="hero-overlay" />
      <div className="hero-content hero-content--bottom-left">
        <span className="hero-line hero-line--small">MORE WOMEN,</span>
        <span className="hero-line hero-line--small">MORE FOOTBALL.</span>
      </div>
    </section>
  )
}

/* ── Somos Womangoal ─────────────────────────────────────────────────────── */
function Brand() {
  return (
    <section className="brand" id="nosotras" style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.88)), url(${IMG_STADIUM})`,
      backgroundSize: 'cover', backgroundPosition: 'center',
    }}>
      <h2 className="brand-headline">Somos Womangoal.</h2>
      <p className="brand-body">
        Somos una compañía especializada en captación de talento, formación, creación de activos
        y construcción de negocio del fútbol femenino a nivel global. Cuidamos a nuestras jugadoras
        tanto personal como profesionalmente, ofreciendo un compromiso 360º desde la gestión
        deportiva hasta la creación de academias y programas formativos.
      </p>
      <div className="brand-rule" />
      <button className="brand-cta"><BallIcon /> Conócenos</button>
    </section>
  )
}

/* ── Qué hacemos ─────────────────────────────────────────────────────────── */
function WhatWeDo() {
  const cards = [
    { num: '01.', img: IMG_DRAFT_INTL, title: 'DRAFT INTERNACIONAL',
      desc: 'El primer draft mundial de fútbol femenino. Recorremos los 5 continentes y 17 países buscando al mejor talento para conectarlo con clubes de élite.' },
    { num: '02.', img: IMG_PROMISES_ACT, title: 'PROMISES — DRAFT NACIONAL',
      desc: 'Circuito nacional de detección de talento para jugadoras nacidas entre 2008 y 2013, con la posibilidad de optar a una Beca Womangoal completa.' },
    { num: '03.', img: IMG_ACADEMY, title: 'WOMANGOAL ACADEMY',
      desc: 'Modelo de franquicia para abrir una Womangoal Academy en cualquier parte del mundo. Metodología probada y soporte de marca completo.' },
    { num: '04.', img: IMG_REPRESENT, title: 'REPRESENTACIÓN Y ASESORÍA',
      desc: 'Gestión integral de carrera: asesoramiento deportivo, acompañamiento, potenciación de imagen y construcción de marca 360º para cada jugadora.' },
  ]

  return (
    <section className="wwd" id="servicios">
      <span className="wwd-label">QUÉ HACEMOS</span>
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

/* ── Sección Internacional ───────────────────────────────────────────────── */
function International() {
  const items = [
    'Scouting global en 5 continentes y 17 países',
    'Selección por talento deportivo, branding y potencial ForGood',
    'Draft Final en España con directores deportivos de clubs',
    'Participación 100% gratuita para las jugadoras',
  ]

  return (
    <section className="intl" id="internacional">
      <div className="intl-split">
        <img src={IMG_PLAYERS_CLOSE} alt="Draft Internacional" className="intl-photo" />
        <div className="intl-txt">
          <span className="intl-eyebrow">El Draft</span>
          <div>
            <div className="intl-h1">DRAFT</div>
            <div className="intl-h2">WOMANGOAL</div>
          </div>
          <p className="intl-desc">
            El WomanGoal Draft es el primer draft mundial para la comunidad del fútbol femenino,
            que abarca los 5 continentes para seleccionar a las mejores jugadoras que recibirán
            un apoyo 360° acorde a los valores de WomanGoal. En la fase final, reunimos a
            importantes directores deportivos de clubes nacionales e internacionales.
          </p>
          <div className="intl-arrows">
            {items.map(item => (
              <span className="intl-arrow-item" key={item}>
                <img src={BALL} alt="" className="intl-ball-icon" />
                {item}
              </span>
            ))}
          </div>
          <button className="intl-cta"><BallIcon /> Solicitar información</button>
        </div>
      </div>
      <div className="intl-gallery">
        <img src={IMG_GROUP_STANDS} alt="Jugadoras Womangoal" className="intl-gallery-img" />
        <img src={IMG_GROUP_PANAMA} alt="Draft Panamá" className="intl-gallery-img" />
        <img src={IMG_DRAFT_INTL} alt="Partido" className="intl-gallery-img" />
        <img src={IMG_DOCUSERIE} alt="Docuserie" className="intl-gallery-img" />
      </div>
    </section>
  )
}

/* ── Promises ────────────────────────────────────────────────────────────── */
function Promises() {
  const pillars = [
    { num: '01', title: 'INSCRIPCIÓN', desc: '250-350 jugadoras locales nacidas entre 2008 y 2013 se inscriben a través de nuestra App en cada ciudad.' },
    { num: '02', title: 'DRAFT LOCAL', desc: 'Un fin de semana en tu ciudad con pruebas, entrenamientos y evaluación profesional. Evento público con familias y comunidad deportiva.' },
    { num: '03', title: 'SHOWCASE FINAL', desc: 'Las seleccionadas de cada ciudad vivirán una experiencia única de una semana en nuestro centro de Alto Rendimiento en Madrid.' },
  ]

  return (
    <section className="promises" id="promises">
      <div className="promises-inner">
        <span className="promises-eyebrow">LÍNEA NACIONAL · CIRCUITO 2026-2027</span>
        <div className="promises-lockup">
          <img src="/images/promises-logo.png" alt="Womangoal Promises" className="promises-logo-img" />
        </div>
        <div className="promises-spacer" />
        <h2 className="promises-headline">EL CIRCUITO QUE CONECTA TALENTO CON TU CIUDAD</h2>
        <p className="promises-body">
          WomanGoal Promises recorrerá diferentes ciudades de España entre 2026 y 2027,
          ofreciendo a talentos femeninos nacidos entre 2008 y 2013 una experiencia única,
          con la posibilidad de optar a una Beca Womangoal para formarse, competir y crecer
          durante 10 meses en un Centro de Alto Rendimiento en Madrid.
        </p>
        <div className="promises-content-row">
          <img src={IMG_PROMISES_ACT} alt="Promises" className="promises-photo" />
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
          <button className="promises-cta-btn"><BallIcon /> Quiero info sobre Promises</button>
          <span className="promises-sec-link">Ver ediciones anteriores</span>
        </div>
      </div>
    </section>
  )
}

/* ── Academia ────────────────────────────────────────────────────────────── */
function Academy() {
  const steps = [
    { num: '01', title: 'MODELO DE FRANQUICIA', desc: 'Sistema probado de licencia con soporte operativo, legal y de marketing desde el primer día.' },
    { num: '02', title: 'METODOLOGÍA', desc: 'Formación de entrenadores certificados con metodología Womangoal de alto rendimiento.' },
    { num: '03', title: 'SOPORTE DE MARCA', desc: 'Marketing, identidad visual, eventos y comunicación gestionados centralmente.' },
  ]

  return (
    <section className="academy" id="academia">
      <div className="academy-inner">
        <span className="academy-eyebrow">WOMANGOAL ACADEMY</span>
        <img src={IMG_ACADEMY_NEW} alt="Womangoal Academy" className="academy-visual" />
        <h2 className="academy-headline">ABRE UNA WOMANGOAL ACADEMY EN CUALQUIER PARTE DEL MUNDO.</h2>
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
          <button className="academy-cta-btn"><BallIcon /> Abrir una academia</button>
          <span className="academy-cta-secondary">Ver academias actuales</span>
        </div>
      </div>
    </section>
  )
}

/* ── Partners ────────────────────────────────────────────────────────────── */
function Partners() {
  return (
    <section className="partners">
      <div className="partners-divider" />
      <div className="partners-inner">
        <span className="partners-label">NUESTROS PARTNERS</span>
        <img src="/images/partners-banner.png" alt="Universo Mujer, Fundación Deporte Joven, CSD, Nike, Fútbol Emotion, FOREO, VEO, Evergy, Podoactiva" className="partners-banner-img" />
      </div>
    </section>
  )
}

/* ── Universo Womangoal ──────────────────────────────────────────────────── */
function FeaturedProjects() {
  return (
    <section className="projects" id="proyectos">
      <div className="projects-header">
        <span className="projects-title">UNIVERSO WOMANGOAL</span>
        <span className="projects-view-all"><BallIcon /> Ver todos</span>
      </div>

      <div className="project-row">
        <img src={IMG_GROUP_PANAMA} alt="Draft Internacional 2026" className="project-photo" />
        <div className="project-content project-content--light">
          <span className="project-num">01</span>
          <span className="project-tag">DRAFT INTERNACIONAL · 2026</span>
          <h3 className="project-name">Global Draft 2026</h3>
          <p className="project-desc">
            5 continentes, 17 países, 28 jugadoras seleccionadas. El mayor draft internacional
            de fútbol femenino del mundo con apoyo 360° y la presencia de directores deportivos
            de clubes de élite.
          </p>
          <span className="project-cta"><BallIcon /> Ver proyecto</span>
        </div>
      </div>

      <div className="project-row">
        <div className="project-content project-content--lighter">
          <span className="project-num">02</span>
          <span className="project-tag">NACIONAL · 2026-2027</span>
          <h3 className="project-name">Promises — Circuito Nacional</h3>
          <p className="project-desc">
            Un circuito estatal que recorre diferentes ciudades de España donde serán visionadas
            3.600 jugadoras amateur. Cada sede se convierte en un punto clave que inspira a
            miles de familias, clubes y jóvenes.
          </p>
          <span className="project-cta"><BallIcon /> Ver proyecto</span>
        </div>
        <img src={IMG_GROUP_STANDS} alt="Promises Nacional" className="project-photo" />
      </div>

      <div className="project-row">
        <img src={IMG_DOCUSERIE} alt="Womangoal Docuserie" className="project-photo" />
        <div className="project-content project-content--light">
          <span className="project-num">03</span>
          <span className="project-tag">ENTRETENIMIENTO · 2026</span>
          <h3 className="project-name">Music Fest y Docuserie</h3>
          <p className="project-desc">
            Un gran concierto con artistas internacionales para acercar el fútbol femenino a las
            nuevas generaciones. Además, una docuserie que mostrará las historias detrás de cada
            jugadora seleccionada en el Draft.
          </p>
          <span className="project-cta"><BallIcon /> Ver proyecto</span>
        </div>
      </div>
    </section>
  )
}

/* ── Nuestro foco es global ──────────────────────────────────────────────── */
function Impact() {
  const stats = [
    { num: '+15K', label: 'jugadoras vistas al año' },
    { num: '17', label: 'países con presencia activa en 5 continentes' },
    { num: '+5.3K', label: 'seguidores en nuestra comunidad' },
  ]

  return (
    <section className="impact" id="impacto">
      <div className="impact-inner">
        <div className="impact-left">
          <img src={IMG_WORLD_MAP} alt="Presencia global Womangoal" className="impact-team-photo" />
          <span className="impact-eyebrow">NUESTRO FOCO ES GLOBAL</span>
          <p className="impact-manifesto">
            Ayudamos a la profesionalización del fútbol femenino a nivel mundial,
            construyendo y potenciando la imagen de marca de clubs, ligas, federaciones
            y jugadoras.
          </p>
          <p className="impact-body">
            Nuestro foco está en crear programas de formación ad hoc, encontrar talento
            deportivo sin coste para las principales ligas de fútbol femenino y responder
            a las necesidades deportivas de cada club. Conectamos con las generaciones Z
            y Alfa, creando audiencias nacionales e internacionales.
          </p>
          <span className="impact-cta-team"><BallIcon /> Conoce al equipo</span>
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

/* ── Manifiesto ──────────────────────────────────────────────────────────── */
function Manifesto() {
  return (
    <section className="manifesto">
      <img src={IMG_GROUP_PANAMA} alt="" className="manifesto-bg" aria-hidden="true" />
      <div className="manifesto-overlay" aria-hidden="true" />
      <div className="manifesto-content">
        <span className="manifesto-label">WOMANGOAL</span>
        <span className="manifesto-line1">building a</span>
        <span className="manifesto-line2">better world</span>
        <span className="manifesto-line3">with a future.</span>
      </div>
    </section>
  )
}

/* ── Contacto ────────────────────────────────────────────────────────────── */
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
          <img src="/logo-womangoal.png" alt="Womangoal" className="contact-logo" />
          <span className="contact-eyebrow">CONTACTO</span>
          <h2 className="contact-headline">¿Hablamos? Cuéntanos tu proyecto.</h2>
          <p className="contact-subtitle">
            Nuestro equipo te responde en menos de 48 horas. Todos los mensajes son leídos
            y respondidos personalmente.
          </p>
          <span className="contact-offices-label">DIRECCIÓN</span>
          <p className="contact-office">Calle de Recoletos 6, Madrid</p>
          <span className="contact-offices-label" style={{marginTop: '0.8rem'}}>EMAIL</span>
          <p className="contact-office">jvictorero@womangoal.com</p>
        </div>

        <form className="contact-right" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label className="form-label" htmlFor="nombre">Nombre *</label>
            <input id="nombre" name="nombre" className="form-input" type="text" placeholder="Tu nombre" value={form.nombre} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="email">Email *</label>
            <input id="email" name="email" className="form-input" type="email" placeholder="tu@email.com" value={form.email} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label" htmlFor="club">Club / Organización</label>
              <input id="club" name="club" className="form-input" type="text" placeholder="Tu club" value={form.club} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="pais">País</label>
              <input id="pais" name="pais" className="form-input" type="text" placeholder="España" value={form.pais} onChange={handleChange} />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="interes">Estoy interesada/o en *</label>
            <select id="interes" name="interes" className="form-select" value={form.interes} onChange={handleChange} required>
              <option value="">Selecciona una opción</option>
              <option value="draft-internacional">Draft Internacional</option>
              <option value="promises">Promises — Circuito Nacional</option>
              <option value="academy">Womangoal Academy</option>
              <option value="representacion">Representación y Asesoría</option>
              <option value="partnership">Patrocinio / Colaboración</option>
              <option value="otros">Otros</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" className="form-textarea" placeholder="Cuéntanos tu proyecto..." value={form.mensaje} onChange={handleChange} />
          </div>
          <div className="form-rgpd">
            <input type="checkbox" id="rgpd" name="rgpd" className="form-rgpd-box" checked={form.rgpd} onChange={handleChange} required />
            <label htmlFor="rgpd" className="form-rgpd-text">He leído y acepto la Política de Privacidad y el uso de mis datos.</label>
          </div>
          <button type="submit" className="form-submit">ENVIAR</button>
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
          <img src="/logo-womangoal.png" alt="Womangoal" className="footer-logo-img" />
          <p className="footer-tagline">More Women, More Football.{'\n'}Madrid → el mundo.</p>
          <div className="footer-newsletter">
            <span className="footer-newsletter-label">NEWSLETTER</span>
            <div className="footer-newsletter-row">
              <input className="footer-nl-input" type="email" placeholder="tu@email.com" aria-label="Email para newsletter" />
              <button className="footer-nl-btn">Suscribirse</button>
            </div>
          </div>
        </div>
        <nav className="footer-nav" aria-label="Pie de página">
          <div className="footer-nav-col">
            <span className="footer-nav-col-title">WOMANGOAL</span>
            {['Nosotras', 'Servicios', 'Draft Internacional', 'Promises'].map(l => <span className="footer-link" key={l}>{l}</span>)}
          </div>
          <div className="footer-nav-col">
            <span className="footer-nav-col-title">ACADEMIAS</span>
            {['Abrir academia', 'Metodología', 'Partners'].map(l => <span className="footer-link" key={l}>{l}</span>)}
          </div>
          <div className="footer-nav-col">
            <span className="footer-nav-col-title">CONTACTO</span>
            {['Instagram', 'YouTube', 'LinkedIn', 'Contacto'].map(l => <span className="footer-link" key={l}>{l}</span>)}
          </div>
        </nav>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <span className="footer-copyright">© 2026 Womangoal. Todos los derechos reservados.</span>
        <div className="footer-legal">
          {['Términos y condiciones', 'Privacidad', 'Cookies'].map(l => <span className="footer-legal-link" key={l}>{l}</span>)}
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
