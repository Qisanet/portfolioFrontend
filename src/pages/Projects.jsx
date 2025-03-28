
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import ProjectCard from '../components/ProjectCard';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     // Fetch projects from the backend
//     axios.get('https://portfoliobackend-3-31l1.onrender.com/projects')
//       .then((response) => setProjects(response.data))
//       .catch((error) => console.error('Error fetching projects:', error));
//   }, []);

//   return (
//     <section id="projects" className="projects">
//       <h1>My Projects</h1>
//       <div className="project-list">
//         {projects.map((project) => (
//           <ProjectCard key={project._id} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem('token'); // Retrieve token

      if (!token) {
        console.error('No token found. Authentication required.');
        return;
      }

      try {
        const response = await axios.get('https://portfoliobackend-3-31l1.onrender.com/projects', {
          headers: {
            Authorization: `Bearer ${token}`,  // Send token in headers
          }
        });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
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
