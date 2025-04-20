import NavBar from "../components/NavBar/NavBar";
import Hero from "./Home/sections/Hero/Hero";

const Home = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <div id="about" style={{ height: "100vh", backgroundColor: "#f0f0f0", padding: "20px" }}>
                <h1>About</h1>
                <p>Bem-vindo à seção About!</p>
            </div>
            <div id="skills" style={{ height: "100vh", backgroundColor: "#e0e0e0", padding: "20px" }}>
                <h1>Skills</h1>
                <p>Bem-vindo à seção Skills!</p>
            </div>
            <div id="projects" style={{ height: "100vh", backgroundColor: "#d0d0d0", padding: "20px" }}>
                <h1>Projects</h1>
                <p>Bem-vindo à seção Projects!</p>
            </div>
        </>
    );
};

export default Home;