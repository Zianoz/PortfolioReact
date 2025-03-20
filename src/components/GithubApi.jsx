import { useState, useEffect } from "react";

export default function GithubAPI() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.github.com/users/zianoz/repos");
        const data = await response.json();
        setProjects(data); // Store all projects
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="card-wrapping">
      {projects.map((project, index) => (
        <a key={index} href={`#project-${index}`} className="card">
          <div className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description || "No description available"}</p>
          </div>
        </a>
      ))}

      {projects.map((project, index) => (
        <div key={index} id={`project-${index}`} className="cardmodal">
          <div className="modal-content">
            <h2>{project.name}</h2>
            <p>{project.description || "No description available"}</p>
            <a href="#" className="close">Close</a>
          </div>
        </div>
      ))}
    </div>
  );
}
