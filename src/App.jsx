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
              <li><a href="#process-label" className="navbar-link">How it works</a></li>
              <li><a href="#work" className="navbar-link">services</a></li>
              <li><a href="#contact" className="navbar-link">Contact Us</a></li>
            </ul>
          </nav>
          <a href="#contact" className="btn btn-secondary">Try it Now</a>
          <button className="nav-open-button" aria-label="toggle menu" data-nav-toggle-btn>
            <ion-icon name="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
            <ion-icon name="close-outline" aria-hidden="true" class="close-icon"></ion-icon>
          </button>
          <div className="overlay" data-overlay></div>
        </div>
      </header>

      <main>
        <article>
          <section  className="section hero">
            <div id='contact' className="container">
              <div className="hero-content">
                <h1 className="h1 title hero-title">We Take Care of Your Brand</h1>
                <p className="hero-text">
                 AdWeb sol helps brands grow with high-performing ad campaigns and custom landing pages designed to convert. We handle everything from eye-catching ads to optimized pages, ensuring your audience clicks—and converts. Perfect for startups and growing businesses ready to scale.
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
                From idea to impact — here’s how we bring your brand to life with powerful ad campaigns and landing pages that convert.
              </p>
              <div className="wrapper">
                <figure className="process-banner">
                  <img src="process-banner.png" width="734" height="854" loading="lazy" alt="process banner" className="w-100" />
                </figure>
                <ul className="grid-list">
                  {[{"title": "Ideation","disc":"We start by understanding your brand, audience, and goals. Then, we brainstorm compelling messaging, visuals, and funnel strategies to create a campaign with a purpose."}, {"title": "Budget","disc":"We work within your budget to maximize reach and ROI. Whether you're scaling or starting out, we tailor our media spend and strategy to get you results."}, {"title": "Performance","disc":"We don’t just launch and leave — we track, analyze, and optimize. Our team continuously tests and refines campaigns and landing pages to boost performance."}, {"title": "Speed","disc":"Time is money. We move fast, delivering campaigns and landing pages with quick turnarounds — without compromising on quality."}].map((item, i) => (
                    <li className="process-item" key={item.title}>
                      <img src={` process-icon-${i + 1}.png`} width="60" height="60" loading="lazy" alt="" className="item-icon" />
                      <h3 className="h3 title item-title">{item.title}</h3>
                      <p className="item-text">{item.disc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section id="work" className="section works text-center" aria-label="works">
            <div className="container">
              <h2 className="h2 title section-title">Services We Provide</h2>
              <p className="section-text">
                We blend creativity, strategy, and technology to craft digital experiences that drive real-world results. Here’s a glimpse into what we do best:
              </p>
              <ul className="grid-list">
                {[{"title": "Landing Page","disc":"Build modern, responsive landing pages tailored to your brand. From sleek UI to optimized UX, I ensure your page loads fast, looks professional, and converts visitors into customers. Whether you're launching a product, service, or portfolio — I’ve got you covered."}, {"title": "Digital marketing","disc":"Amplify your brand online with strategic digital marketing. I offer tailored social media campaigns, ad creatives, and audience targeting across platforms like Instagram, Facebook, and Twitter — designed to boost your reach and engagement."}, {"title": "Video Editing","disc":"Bring your vision to life with professional video editing. From trimming and transitions to color correction and effects, I craft compelling videos for YouTube, social media, ads, and more — all edited with attention to detail and story flow."}].map((item, i) => (
                  <li key={item.title}>
                    <div className="work-card">
                      <figure className="card-banner img-holder" style={{ '--width': 580, '--height': 620 }}>
                        <img src={` work-${i + 1}.jpg`} width="580" height="620" loading="lazy" alt={item.title} className="img-cover" />
                      </figure>
                      <h3 className="h3 card-title">{item.title}</h3>
                      <p className="card-text">{item.disc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <section class="conversion-section">
                  <h2 class="conversion-title">Conversion Benchmark</h2>

                  <div class="conversion-wrapper">
                    <p class="conversion-text">We help companies achieve up to</p>
                    <div class="conversion-circle">80%</div>
                    <p class="conversion-text">conversion rate</p>
                  </div>

                  <p class="conversion-note">
                    We’re dedicated to making every rupee you spend on advertising work harder, delivering up to 
                    10X the results, and helping your business thrive.
                  </p>
              </section>
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
                <li key={link} className="footer-link">{link}</li>
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
            <li className="footer-link">Terms of use</li>
            <li className="footer-link">Privacy policy</li>
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