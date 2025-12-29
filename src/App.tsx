import './App.css'
import pfLogo from './assets/PFlogo.png'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="logo-container">
          <img src={pfLogo} alt="PeaceFrog Gaming" className="logo" />
        </div>

        <div className="main-content">
          <h1>PeaceFrog Gaming</h1>
          <p className="tagline">Level Up Your Experience</p>

          <section className="apps-section">
            <h2 className="section-title">Our Apps</h2>

            <div className="app-cards">
              <a href="https://rockbreaker.peacefroggaming.com" className="app-card featured">
                <div className="app-card-badge">Live</div>
                <h3>Rock Breaker</h3>
                <p className="app-category">Star Citizen</p>
                <p className="app-description">Mining calculator to optimize your loadout and maximize your yields</p>
              </a>
              <a href="https://bandhopper.peacefroggaming.com" className="app-card featured">
                <div className="app-card-badge">Live</div>
                <h3>Band Hopper</h3>
                <p className="app-category">Star Citizen</p>
                <p className="app-description">Aaron Halo Mining Navigator: simplify your trip to the Halo Band of your choice.</p>
              </a>
            </div>
          </section>

          <section className="coming-soon-section">
            <h2 className="section-title">Coming Soon</h2>

            <div className="coming-soon-grid">
              <div className="coming-soon-category">
                <h4>Star Citizen</h4>
                <ul className="teaser-list">
                  <li>Group Mining Manager</li>
                </ul>
              </div>

              <div className="coming-soon-category">
                <h4>Sports</h4>
                <ul className="teaser-list">
                  <li>Kid Stats - Track your young athlete's journey</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <footer className="footer">
        <p className="contact">
          <a href="mailto:info@peacefroggaming.com">info@peacefroggaming.com</a>
        </p>
        <p>&copy; {new Date().getFullYear()} PeaceFrog Gaming. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
