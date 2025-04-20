import NavBar from "../components/NavBar/NavBar";
import Hero from "./Home/sections/Hero/Hero";
import About from "./Home/sections/About/About";
import Projects from "./Home/sections/Projects/Projects";


const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
        </>
    );
};

export default Home;