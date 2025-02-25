export default function Navbar() {
    return (
      <>
        <header>
          <nav class="navbar">
            <div class="navbar-container">
              <div class="navbar-logo">Zian</div>
              <button class="navbar-toggle">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </button>
              <ul class="navbar-menu">
                <li>
                  <a href="#" class="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="portfolio.html">Portfolio</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
}