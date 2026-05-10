import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ImpactDashboard from "./components/ImpactDashboard";
import Services from "./components/Services";
import Projects from "./components/Projects";
import GitHubProjects from "./components/GitHubProjects";
import Publications from "./components/Publications";
import TrustBar from "./components/TrustBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}>
      {/* Fixed mesh gradient background — sits behind all content */}
      <div className="mesh-bg" />

      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <ImpactDashboard />
        <Services />
        <Projects />
        <GitHubProjects />
        <Publications />
        <TrustBar />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
