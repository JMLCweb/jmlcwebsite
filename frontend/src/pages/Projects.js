import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/projects");
        const result = await response.json(); // Lê a resposta JSON
        setProjects(result.data); // Acessa à propriedade `data` no objeto
      } catch (error) {
        console.error("Erro ao buscar os projetos:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.length > 0 ? (
          projects.map((project) => (
            <li key={project._id}>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </li>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </ul>
    </div>
  );
};

export default Projects;
