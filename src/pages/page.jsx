import About from './About ';  // Import About component
import Projects from './Projects';  // Import Projects component
import Contact from './Contact';  // Import Contact component
import Home from './Home';  // Import Home component
import Footer from './Footer';  // Import Footer component

const Page = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer /> {/* Fixed Footer component */}
    </div>
  );
};

export default Page;
