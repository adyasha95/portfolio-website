import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import TrustBar from "./components/TrustBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Publications />
        <TrustBar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
