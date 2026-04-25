import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import "../styles/main.css";

function Home() {
    return (
        <main className="home-page">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </main>
    );
}

export default Home;