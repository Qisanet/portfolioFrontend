import "../style/home.css";
import img from '../assets/img.png';
import cv from '../assets/Qisanet Angsom Berhanemeskel CV April 2025.docx'; // Your CV file path

const Home = () => {
  return (
    <div>
      <section id="home">
     
        <div className="myHome">
        <div className="homeImg">
            <img src={img} alt="img" />
          </div>
          <div className="HomeIntro">
            <h1>Hi, I'm Qisanet</h1>
            <h2><h2>Full Stack Developer | 5+ Years of Experience in Building Advanced Web Applications</h2>
            </h2>
            <h3>Crafting responsive, user-friendly, and high-performance web applications. Let's collaborate to build something amazing!</h3>

            {/* CV Button with Icon */}
        <div className="link">
            
              <a href={cv} download className="cv-button">
                CV <i className="fas fa-download"></i> 
              </a>

              <a href="mailto:ksanetang.com" className="hire-button">
  Hire Me
</a>

        </div>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Home;
