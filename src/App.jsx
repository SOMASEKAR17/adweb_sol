import React from 'react';

const LandingPage = () => {
  

  return (
    <>
      <header className="header">
        <div className="container">
          <a href="#" className="logo">
            <img src="logo.png" width="90" height="20" alt="adweb sol" />
          </a>
          <nav className="navbar" data-navbar>
            <ul className="navbarlist">
              <li><a href="#" className="navbar-link">How it works</a></li>
              <li><a href="#work" className="navbar-link">services</a></li>
              <li><a href="#" className="navbar-link">About us</a></li>
            </ul>
          </nav>
          <a href="#" className="btn btn-secondary">Try it Now</a>
          <button className="nav-open-button" aria-label="toggle menu" data-nav-toggle-btn>
            <ion-icon name="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
            <ion-icon name="close-outline" aria-hidden="true" class="close-icon"></ion-icon>
          </button>
          <div className="overlay" data-overlay></div>
        </div>
      </header>

      <main>
        <article>
          <section className="section hero">
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 title hero-title">We Take Care of Your Brand</h1>
                <p className="hero-text">
                  Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.
                </p>
                <form action="https://formspree.io/f/xyzwrqja" method="POST" className="input-wrapper">
                  <input type="email" name="email-address" placeholder="Enter Your Email" className="input-field" />
                  <button type="submit" className="btn btn-primary">Let's Talk</button>
                </form>
              </div>
              <figure className="hero-banner">
                <img src="hero-banner.png" width="835" height="960" alt="hero banner" className="w-100" data-parallax data-parallax-speed="10" />
                <img src="hero-icon-1.png" width="100" height="100" alt="YouTube" className="shape shape-1" data-parallax data-parallax-speed="15" />
                <img src="hero-icon-2.png" width="120" height="120" alt="Twitter" className="shape shape-2" data-parallax data-parallax-speed="25" />
                <img src="hero-icon-3.png" width="150" height="150" alt="Instagram" className="shape shape-3" data-parallax data-parallax-speed="40" />
              </figure>
            </div>
          </section>

          <section className="section process text-center" aria-labelledby="process-label">
            <div className="container">
              <h2 className="h2 title section-title" id="process-label">How It Works</h2>
              <p className="section-text">
                Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.
              </p>
              <div className="wrapper">
                <figure className="process-banner">
                  <img src="process-banner.png" width="734" height="854" loading="lazy" alt="process banner" className="w-100" />
                </figure>
                <ul className="grid-list">
                  {["Ideation", "Budget", "Performance", "Speed"].map((title, i) => (
                    <li className="process-item" key={title}>
                      <img src={` process-icon-${i + 1}.png`} width="60" height="60" loading="lazy" alt="" className="item-icon" />
                      <h3 className="h3 title item-title">{title}</h3>
                      <p className="item-text">Use this section to describe your company and the products you offer. You could share your company’s</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="work" className="section works text-center" aria-label="works">
            <div className="container">
              <h2 className="h2 title section-title">Our Work</h2>
              <p className="section-text">
                Use this section to describe your company and the products you offer. You could share your company’s story and details about why you are in business.
              </p>
              <ul className="grid-list">
                {["Product Design", "Digital marketing", "Video Editing"].map((title, i) => (
                  <li key={title}>
                    <div className="work-card">
                      <figure className="card-banner img-holder" style={{ '--width': 580, '--height': 620 }}>
                        <img src={` work-${i + 1}.jpg`} width="580" height="620" loading="lazy" alt={title} className="img-cover" />
                      </figure>
                      <h3 className="h3 card-title">{title}</h3>
                      <p className="card-text">Use this section to describe your work</p>
                    </div>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary">See More</a>
            </div>
          </section>
        </article>
      </main>

      <footer className="footer">
        <div className="section footer-top">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                <img src="logo.png" width="205" height="40" loading="lazy" alt="Digitalmedia home" />
              </a>
              <address className="footer-text">Banglore, Karnataka, India</address>
              <ul className="social-list">
                {['instagram', 'twitter', 'facebook'].map(name => (
                  <li key={name}>
                    <a href="#" className="social-link">
                      <ion-icon name={`logo-${name}`}></ion-icon>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="btn btn-primary">Contact Us</a>
            </div>
            <ul className="footer-list">
              {["Work With Us", "Advertise With Us", "Support Us", "Business Advices", "Private Coaching", "Our Work", "Our Commitment", "Our Team", "About Us", "FAQs", "Report a Bug"].map(link => (
                <li key={link}><a href="#" className="footer-link">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <div className="container">
            <p className="copyright">
              &copy; 2023 Digitalmedia, Inc. - Developed by <a href="https://www.linkedin.com/in/somasekar-naidu-841646320/" className="link">Somasekar Naidu</a>
            </p>
          </div>
          <ul className="footer-bottom-list">
            <li><a href="#" className="footer-link">Terms of use</a></li>
            <li><a href="#" className="footer-link">Privacy policy</a></li>
          </ul>
        </div>
      </footer>

      <script src="script.js"></script>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  );
};

export default LandingPage;