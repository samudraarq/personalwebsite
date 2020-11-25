import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/About/AboutMe/AboutMe";
import TechStacks from "../components/About/TechStacks/TechStacks";
import ContactMe from "../components/About/ContactMe/ContactMe";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <TechStacks />
      <ContactMe />
      <Footer />
    </>
  );
};

export default About;
