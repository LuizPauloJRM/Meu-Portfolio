import NavBar from "../components/NavBar/NavBar";
import Hero from "./Home/sections/Hero/Hero";
import About from "./Home/sections/About/About";
import Projects from "./Home/sections/Projects/Projects";
import Skills from "./Home/sections/Skills/Skills";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Footer />

        </>
    );
};

export default Home;