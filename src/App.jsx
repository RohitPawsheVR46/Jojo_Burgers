import { useState } from 'react'

const burgerImage = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=88'
const friesImage = 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85'

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="inline-block text-lg transition-transform duration-200 group-hover:translate-x-1">{diagonal ? '↗' : '→'}</span>
}

function Mark() {
  return <a href="#home" aria-label="Jojo's Burger home" className="brand-mark"><span className="brand-icon">J<span>B</span></span><span className="brand-name">JOJO'S<span>BURGER</span></span></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <div className="announcement"><span className="pulse-dot" /> MADE FRESH. SERVED HOT. <span className="announcement-star">✳</span> EVERY SINGLE TIME.</div>
      <header className="site-header">
        <Mark />
        <button className="mobile-menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
          <a onClick={closeMenu} href="#home">Home</a><a onClick={closeMenu} href="#menu">Menu</a><a onClick={closeMenu} href="#about">Our story</a><a onClick={closeMenu} href="#contact">Find us</a>
          <a onClick={closeMenu} href="#order" className="button button-yellow nav-cta group">Order now <Arrow diagonal /></a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR NEW FAVOURITE BURGER SPOT</div>
          <h1>Big bite.<br /><span>Big</span> <span className="outlined-word">JOJO</span><span className="yellow-period">.</span></h1>
          <p className="hero-description">Real good burgers. No shortcuts, no nonsense. Just the kind of food that makes your whole day.</p>
          <div className="hero-actions"><a href="#menu" className="button button-yellow group">Explore the menu <Arrow /></a><a href="#about" className="text-link">Meet the maker <span>↓</span></a></div>
          <div className="hero-rating"><div className="star-row">★★★★★</div><p><strong>Made with love</strong><br />by Devesh Gaikwad</p></div>
        </div>
        <div className="hero-art">
          <div className="hero-image-halo" />
          <div className="hero-photo-frame"><img src={burgerImage} alt="Juicy double cheeseburger piled high with lettuce, tomato and melted cheese" /></div>
          <div className="hero-sticker"><span>100%</span><span>GOOD</span><span>MOOD</span><b>✳</b></div>
          <div className="hero-caption"><span>01 — THE JOJO CLASSIC</span><span>BUILT DIFFERENT. BITES BETTER.</span></div>
          <span className="floating-spark spark-one">✳</span><span className="floating-spark spark-two">✳</span>
        </div>
        <a className="scroll-cue" href="#menu"><span className="scroll-line" /> SCROLL FOR THE GOOD STUFF</a>
      </section>

      <div className="ticker" aria-label="Fresh ingredients and bold flavours"><div className="ticker-track">{Array.from({ length: 2 }, (_, index) => <span key={index}>FRESH OFF THE GRILL <b>✳</b> BIG FLAVOUR ONLY <b>✳</b> ALWAYS MADE FRESH <b>✳</b> ZERO BORING BITES <b>✳</b> FRESH OFF THE GRILL <b>✳</b> BIG FLAVOUR ONLY <b>✳</b></span>)}</div></div>

      <section id="menu" className="menu-section section-pad">
        <div className="section-heading"><div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> THE LINE-UP</div><h2>Good things.<br /><span>Between buns.</span></h2></div><p>Our menu's getting ready to hit your taste buds. Got a favourite? Send it our way—we're all ears (and appetite).</p></div>
        <div className="menu-feature">
          <div className="menu-feature-image"><img src={friesImage} alt="Crispy golden fries served fresh" loading="lazy" /><span className="image-label">THE PERFECT SIDEKICK</span></div>
          <div className="menu-feature-copy"><span className="menu-count">01 / COMING IN HOT</span><h3>Your next<br />obsession is<br /><em>cooking.</em></h3><p>We're putting the finishing touches on a menu worth getting your hands messy for. Stay hungry.</p><a href="#order" className="button button-dark group">Get first dibs <Arrow /></a></div>
        </div>
        <div className="menu-note"><span>✳</span> Menu and prices coming soon <span className="menu-note-line" /></div>
      </section>

      <section id="about" className="about-section section-pad">
        <div className="about-copy"><div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT US</div><h2>One stall.<br />A whole lot<br /><span>of heart.</span></h2><p>Jojo's is Devesh Gaikwad's kind of burger joint: fresh off the grill, full of flavour, and served with a side of good vibes. No fuss. Just proper, satisfying burgers made for real life.</p><div className="signature">Devesh Gaikwad<span>THE GUY BEHIND THE GRILL</span></div></div>
        <div className="about-art"><div className="about-frame"><img src={burgerImage} alt="A freshly made Jojo's-style burger" loading="lazy" /></div><div className="about-stamp">GOOD<br />FOOD.<br /><span>GOOD</span><br />PEOPLE.</div><span className="about-index">JOJO'S BURGER — EST. WITH LOVE</span></div>
      </section>

      <section id="order" className="order-section section-pad"><div className="order-deco">✳</div><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT GREAT DECISION</div><h2>Hungry yet?</h2><p>Good. We're just getting started. Reach out and let's get you something delicious.</p><div className="order-options"><a className="order-option" href="https://www.zomato.com/" target="_blank" rel="noreferrer"><span className="order-icon zomato-icon">z</span><span><b>Find us on Zomato</b><small>Order your favourites</small></span><Arrow diagonal /></a><a className="order-option" href="https://www.swiggy.com/" target="_blank" rel="noreferrer"><span className="order-icon swiggy-icon">S</span><span><b>Find us on Swiggy</b><small>Get the good stuff delivered</small></span><Arrow diagonal /></a><a className="order-option" href="#contact"><span className="order-icon call-icon">↗</span><span><b>Call the stall</b><small>Phone number coming soon</small></span><Arrow /></a></div></section>

      <footer id="contact" className="site-footer"><div className="footer-top"><Mark /><p>Big bite. Big Jojo.<br /><span>See you at the stall.</span></p><a href="#home" className="back-top">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} JOJO'S BURGER</span><span>MADE FRESH WITH ♥ IN INDIA</span><span>DEVI GAON, BADLAPUR EAST</span></div></footer>
    </main>
  )
}

export default App
