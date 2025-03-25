import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Photo from "../assets/photo.jpg";
import GithubIcon from "../components/GithubIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div id="easterEggModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <h2>42069!</h2>
        </div>
      </div>

      <main>
        <section className="wrapping">
          <div className="about-me">
            <img src={Photo} alt="photo" className="photo" />

            <div className="my-name">
              <div className="name">
                <h1>Pakapol (Zian) Pathumthammarong</h1>
              </div>
              <p>Student Fullstack Developer .NET</p>
            </div>
          </div>
          <div className="about-me-text">
            <p>
              Hello! My name is Zian and I am a Fullstack Developer student who
              specializes in C# and the .NET framework
            </p>
            <div className="social-links">
              <GithubIcon />
              <LinkedInIcon />
            </div>
          </div>
        </section>

        <section className="wrapping">
          <div className="main-wrapping">
            <h2>Experience</h2>
            <div className="view-more">
              <Link to="/portfolio">View more</Link>
            </div>
          </div>
          <div className="wrapping">
            <div className="card-wrapping">
              <Link to="/portfolio" className="card">
                <h2>Resumé/CV</h2>
                <p>
                  My personal CV that lists all my experiences and achievements
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="wrapping">
          <div className="main-wrapping">
            <h2>Projects</h2>
            <div className="view-more">
              <Link to="/projects">View More</Link>
            </div>
          </div>
          <div className="wrapping">
            <div className="card-wrapping">
              <Card />
                
              <a href="#project-two" className="card">
                <h2>Project Two</h2>
                <p>Some other thing</p>
              </a>

              <div id="project-two" className="cardmodal">
                <div className="modal-content">
                  <h2>Project Two</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Necessitatibus sapiente libero recusandae, autem placeat
                    labore quibusdam nesciunt impedit quidem officia id
                    temporibus laborum? Similique quae ratione, quia possimus
                    atque dignissimos.
                  </p>
                  <a href="#" className="close">
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

export default Home;
