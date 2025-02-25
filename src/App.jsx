import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div id="easterEggModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>42069!</h2>
        </div>
      </div>

      <main>
        <section class="wrapping">
          <div class="about-me">
            <img src="images/photo.jpg" alt="photo" class="photo" />
            <div class="my-name">
              <div class="name">
                <h1>Pakapol (Zian) Pathumthammarong</h1>
              </div>
              <p>Student Fullstack Developer .NET</p>
            </div>
          </div>
          <div class="about-me-text">
            <p>
              Hello! My name is Zian and i am a Fullstack Developer student who
              specializes in C# and the .NET framework
            </p>
            <div class="social-links">
              <i class="fa fa-github" style="font-size: 1.5rem"></i>
              <a href="https://github.com/Zianoz" class="github-link">
                Github
              </a>
              <i
                class="fa fa-linkedin-square"
                style="font-size: 1.5rem; color: rgb(67, 133, 255)"
              ></i>
              <a
                href="https://www.linkedin.com/in/pakapol-pathumthammarong-3b10a2252/"
                class="linkedin-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
        <section class="wrapping">
          <div class="main-wrapping">
            <h2>Experience</h2>
            <div class="view-more">
              <a href="portfolio.html">View more</a>
            </div>
          </div>
          <div class="wrapping">
            <div class="card-wrapping">
              <a href="portfolio.html" class="card">
                <h2>Resumé/CV</h2>
                <p>
                  My personal CV that lists all my experiences and achievements
                </p>
              </a>
            </div>
          </div>
        </section>

        <section class="wrapping">
          <div class="main-wrapping">
            <h2>Projects</h2>
            <div class="view-more">
              <a href="projects.html">View More</a>
            </div>
          </div>
          <div class="wrapping">
            <div class="card-wrapping">
              <a href="#project-one" class="card">
                <h2>Project One</h2>
                <p>Something</p>
              </a>

              <div id="project-one" class="cardmodal">
                <div class="modal-content">
                  <h2>Project one</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatibus ut cupiditate quod, facere obcaecati iste harum
                    autem officia libero dolorem nesciunt accusantium debitis
                    cumque, praesentium voluptatum aspernatur incidunt nulla
                    optio?
                  </p>
                  <a href="#" class="close">
                    Close
                  </a>
                </div>
              </div>

              <a href="#project-two" class="card">
                <h2>Project Two</h2>
                <p>Some other thing</p>
              </a>

              <div id="project-two" class="cardmodal">
                <div class="modal-content">
                  <h2>Project Two</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Necessitatibus sapiente libero recusandae, autem placeat
                    labore quibusdam nesciunt impedit quidem officia id
                    temporibus laborum? Similique quae ratione, quia possimus
                    atque dignissimos.
                  </p>
                  <a href="#" class="close">
                    Close
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
