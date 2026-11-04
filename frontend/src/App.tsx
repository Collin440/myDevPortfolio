import "./App.css";
import Terminal from "./Terminal";
import ProjectCard from "./ProjectCard";
import { projects } from "./data/projects";

function App() {
  return (
    <main className="guild">
      <h1>FOFO COLLIN MOLEME</h1>
      <p>Full-stack &amp; mobile developer · AWS re/Start (in progress)</p>
      <Terminal />
      <h2 className="section-title">Select your arc</h2>
      <section className="cards">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </main>
  );
}

export default App;
