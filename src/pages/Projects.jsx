
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from the backend
    axios.get('https://portfoliobackend-2-7wi5.onrender.com/projects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);

  return (
    <section id="projects" className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;