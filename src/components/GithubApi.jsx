import { useState, useEffect } from "react";

export default function GithubAPI() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.github.com/users/zianoz/repos");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="card-wrapping">
      {loading && <p>Loading projects...</p>}

      {projects.map((project, index) => (
        <a 
          key={index}
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
        >
          <div className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description || "No description available"}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
