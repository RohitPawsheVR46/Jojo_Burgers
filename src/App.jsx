import { useState } from 'react'

const burgerImage = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=88'
const friesImage = 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85'
const menuGroups = [
  { title: 'Burgers · Non-Veg', tag: 'NON-VEG', items: [['Chicken Smash Burger', 209], ['Crispy Style Chicken Burger', 219], ['Eggstasy Duo Burger', 219], ['Chicago Style Burger', 239], ['Chef Special Burger', 299]] },
  { title: 'Burgers · Veg', tag: 'VEG', items: [['Mexican Bean Burger', 179], ['Roasted Italian Veggies Burger', 219], ['Corn & Cheese Burger', 209]] },
  { title: 'Fries', tag: 'SIDES', items: [['Classic Fries', 109], ['Peri Peri Fries', 149], ['Cheesy Fries', 199], ['Veg Loaded Fries', 249], ['Chicken Overloaded Fries', 279]] },
]

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className="inline-block text-lg transition-transform duration-200 group-hover:translate-x-1">{diagonal ? '↗' : '→'}</span>
}

function Mark() {
  return <a href="#home" aria-label="Jojo's Burger home" className="brand-mark"><span className="brand-icon">J<span>B</span></span><span className="brand-name">JOJO'S<span>BURGER</span></span></a>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [review, setReview] = useState({ name: '', rating: 5, message: '' })
  const [reviews, setReviews] = useState([])
  const [reviewSent, setReviewSent] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  function submitReview(event) {
    event.preventDefault()
    const message = `Hi Devesh! Here's my Jojo's Burger review:\n\n${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}\n${review.message}\n\n— ${review.name}`
    const whatsappUrl = `https://wa.me/919324847338?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setReviews(current => [{ ...review, id: Date.now() }, ...current])
    setReview({ name: '', rating: 5, message: '' })
    setReviewSent(true)
  }

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
        <div className="section-heading"><div><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> THE LINE-UP</div><h2>Good things.<br /><span>Between buns.</span></h2></div><p>Big, fresh-off-the-grill flavours and crispy sides. Pick your favourite and come hungry.</p></div>
        <div className="menu-groups">{menuGroups.map(group => <article className="menu-group" key={group.title}><header><h3>{group.title}</h3><span>{group.tag}</span></header><ul>{group.items.map(([name, price]) => <li key={name}><span>{name}</span><b>₹{price}</b></li>)}</ul></article>)}</div>
      </section>

      <section id="about" className="about-section section-pad">
        <div className="about-copy"><div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT US</div><h2>One stall.<br />A whole lot<br /><span>of heart.</span></h2><p>Jojo's is Devesh Gaikwad's kind of burger joint: fresh off the grill, full of flavour, and served with a side of good vibes. No fuss. Just proper, satisfying burgers made for real life.</p><div className="signature">Devesh Gaikwad<span>THE GUY BEHIND THE GRILL</span></div></div>
        <div className="about-art"><div className="about-frame"><img src="/public-owner.png" alt="Devesh Gaikwad at the Jojo's Burger stall" loading="lazy" /></div><div className="about-stamp">GOOD<br />FOOD.<br /><span>GOOD</span><br />PEOPLE.</div><span className="about-index">JOJO'S BURGER — EST. WITH LOVE</span></div>
      </section>

      <section id="order" className="order-section section-pad"><div className="order-deco">✳</div><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT GREAT DECISION</div><h2>Hungry yet?</h2><p>Good. We're just getting started. Reach out and let's get you something delicious.</p><div className="order-options"><a className="order-option" href="https://zomato.onelink.me/xqzv/llyhnn37" target="_blank" rel="noreferrer"><span className="order-icon zomato-icon">z</span><span><b>Find us on Zomato</b><small>Order your favourites</small></span><Arrow diagonal /></a><a className="order-option" href="tel:+919324847338"><span className="order-icon call-icon">↗</span><span><b>Call the stall</b><small>+91 9324847338</small></span><Arrow /></a></div></section>

      <section className="review-section section-pad" aria-labelledby="review-title"><div className="review-intro"><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> A NOTE FOR DEVESH</div><h2 id="review-title">Had a good<br /><span>bite?</span></h2><p>Tell Devesh how it was. Your kind words (and honest feedback) help Jojo's get better every day.</p><div className="review-quote">“Every great burger deserves a great review.”</div></div><div className="review-panel"><form onSubmit={submitReview}><label htmlFor="review-name">Your name</label><input id="review-name" type="text" placeholder="What should Devesh call you?" value={review.name} onChange={event => setReview({ ...review, name: event.target.value })} required maxLength={50} /><label>Your rating</label><div className="rating-picker" role="radiogroup" aria-label="Your rating">{[1, 2, 3, 4, 5].map(star => <button key={star} type="button" role="radio" aria-checked={review.rating === star} aria-label={`${star} star${star > 1 ? 's' : ''}`} className={star <= review.rating ? 'rating-star selected' : 'rating-star'} onClick={() => setReview({ ...review, rating: star })}>★</button>)}</div><label htmlFor="review-message">Your message to Devesh</label><textarea id="review-message" placeholder="What did you enjoy? Leave Devesh a note..." value={review.message} onChange={event => setReview({ ...review, message: event.target.value })} required maxLength={500} rows={4} /><button className="button button-dark review-submit" type="submit">Send via WhatsApp <Arrow diagonal /></button>{reviewSent && <p className="review-success" role="status">WhatsApp opened with your review. Tap Send there to share it with Devesh.</p>}</form><div className="review-list" aria-live="polite">{reviews.map(item => <article className="review-card" key={item.id}><div className="review-card-top"><strong>{item.name}</strong><span>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</span></div><p>{item.message}</p></article>)}</div></div></section>

      <section className="visit-section section-pad" aria-labelledby="visit-title"><div className="visit-heading"><div className="eyebrow dark-eyebrow"><span className="eyebrow-line" /> COME BY FOR A BITE</div><h2 id="visit-title">Find the<br /><span>good stuff.</span></h2><p>Jojo's Burger is near Maharaja Chai Wala in Chanakya Nagar, Kalyan West. Drop by for a fresh burger and a warm welcome.</p></div><div className="visit-details"><div className="visit-card"><span className="visit-icon">⌖</span><div><span className="visit-label">FIND THE STALL</span><p>Near Maharaja Chai Wala<br />Chanakya Nagar, Kalyan West</p><a href="https://www.google.com/maps/search/?api=1&query=Jojo%27s+Burger+near+Maharaja+Chai+Wala+Chanakya+Nagar+Kalyan+West" target="_blank" rel="noreferrer">Open in Google Maps <Arrow diagonal /></a></div></div><div className="visit-card hours-card"><span className="visit-icon">◷</span><div><span className="visit-label">OPEN EVERY DAY</span><p>Monday – Sunday<br /><strong>6:00 pm – 11:30 pm</strong></p><span className="hours-note">Every day, freshly made.</span></div><span className="open-pill"><i /> OPEN DAILY</span></div></div></section>

      <footer id="contact" className="site-footer"><div className="footer-top"><Mark /><p>Big bite. Big Jojo.<br /><span>See you at the stall.</span></p><a href="#home" className="back-top">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} JOJO'S BURGER</span><span>MADE FRESH WITH ♥ IN INDIA</span><span>CHANAKYA NAGAR, KALYAN WEST</span></div></footer>
    </main>
  )
}

export default App
