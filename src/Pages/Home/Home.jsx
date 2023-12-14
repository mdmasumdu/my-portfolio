import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Education from "./Education/Education";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";



const Home = () => {
    return (
        <div>
          <Banner></Banner>
         
         <Skills></Skills>
    
        <Projects></Projects>

        <Education></Education>
        <ContactUs></ContactUs>
        </div>
    );
}

export default Home;