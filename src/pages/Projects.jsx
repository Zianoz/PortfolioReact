import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GithubAPI from "../components/GithubAPI";

function Projects() {
  return (
    <>
      <Navbar />
      <main>
        <section className="project-wrapping">
          <div className="main-text">
            <h1>Projects</h1>
          </div>
          <GithubAPI />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
