import "../style/about.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare,  FaGithub, FaNodeJs, FaGitAlt, FaBootstrap, FaPython } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiPostgresql } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 size={120} color="#e34f26" />, name: "HTML" },
  { icon: <FaCss3Alt size={120} color="#1572b6" />, name: "CSS" },
  { icon: <FaJsSquare size={120} color="#f7df1e" />, name: "JavaScript" },
  { icon: <FaReact size={120} color="#61dafb" />, name: "React" },
  { icon: <SiPostgresql size={120} color="#4479A1" />, name: "SQL" },
  { icon: <FaNodeJs size={120} color="#339933" />, name: "Node.js" },
  { icon: <SiExpress size={120} color="#ffffff" />, name: "Express" },
  { icon: <SiMongodb size={120} color="#47a248" />, name: "MongoDB" },
  { icon: <SiTailwindcss size={120} color="#38bdf8" />, name: "Tailwind CSS" },
  { icon: <FaBootstrap size={120} color="#563d7c" />, name: "Bootstrap" },
  { icon: <FaGitAlt size={120} color="#f05032" />, name: "Git" },
  { icon: <FaPython size={120} color="#3776ab" />, name: "Python" },
  { icon: <FaGithub size={120} color="#f0f6fc" />, name: "GitHub" },

];

const AboutMe = () => {
  return (
    <div className="about">
      <section id="about">
        <h2 className="about-title">About Me</h2>
        <p className="aboutIntro">
          Hi, I'm Qisanet, a passionate full-stack web developer. With experience in both front-end and back-end technologies, I specialize in building scalable, user-friendly applications. I'm always eager to learn new skills and improve my craft. Here are some of the key skills and technologies I work with:
        </p>

        <div className="skills-section">
          <h3 className="skills-title">Skills</h3>
          <div className="skills-marquee">
            <div className="skills-track">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon-container">{skill.icon}</div>
                  <h4 className="skill-name">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-text">
  <p>
  I approach development with a focus on clean code, performance, and maintaining high standards throughout the process. I am committed to continuous learning and adhering to industry best practices, constantly striving to refine my skills. Outside of coding, I enjoy exploring nature, listening to soft music, drawing, and dancing, while also prioritizing work-life balance and staying grounded. My ultimate goal is to create innovative solutions that make a meaningful impact, and I am always eager to learn and collaborate on new projects.
  </p>
</div>

        
      </section>
    </div>
  );
};

export default AboutMe;
