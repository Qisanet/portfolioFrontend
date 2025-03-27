import "../style/home.css"
import img from '../assets/img.png'
const Home = () => {
  return (
    <div>
     

      <section id="home">
       <div className="myHome">
         
           <div className="HomeIntro">
           <h1>Hi, I'm Qisanet</h1>
          <h2>Full Stack Developer</h2>
           <h3>Crafting responsive, user-friendly, and high-performance web applications. Let's collaborate to build something amazing!</h3>

              
         
           </div>
         
         
         
          <div className= "homeImg">  <img src={img} alt= "img"/></div>
         </div>
         
    
      </section>
</div>
  );
};

export default Home;
