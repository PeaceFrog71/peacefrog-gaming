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

          <div className="coming-soon">
            Coming Soon
          </div>

          <div className="links">
            <a href="https://rockbreaker.peacefroggaming.com" className="link-card">
              <h3>Rock Breaker</h3>
              <p>Star Citizen Mining Calculator</p>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} PeaceFrog Gaming. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
