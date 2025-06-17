import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CV from "../assets/CV-English.jpg"; // Correct import

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <section>
            <div className="wrapping">
                <div className="main-text">
                    <h1>CV</h1>
                </div>

                <img src={CV} alt="cv" className="portfolio-image" />
      <Footer />
            </div>
        </section>
      </main>
    </>
  );
}

export default Portfolio;
