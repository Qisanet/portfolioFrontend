import { FaGithub } from "react-icons/fa";
import "../style/projectCard.css";
import PropTypes from "prop-types";

const ProjectCard = ({ 
  project = { 
    coverimage: "default-image-url.jpg", 
    title: "Untitled Project", 
    description: "No description available.", 
    projectUrl: "#", 
    githubUrl: "#" 
  } 
}) => {
  return (
    <div className="project-card">
      <img src={project.coverimage} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.projectUrl && (
        <a className="view" href={project.projectUrl} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}

      {project.githubUrl && (
        <a className="giticon" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} color="#f0f6fc" />
        </a>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    coverimage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    projectUrl: PropTypes.string,
    githubUrl: PropTypes.string,
  }),
};

export default ProjectCard;
