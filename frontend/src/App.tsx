import "./App.css";
import Terminal from "./Terminal";
import ProjectCard from "./ProjectCard";
import { projects } from "./data/projects";
import { episodes } from "./data/story";

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
      <h2 className="section-title">Previously, on Fofo&apos;s story…</h2>
      <section className="story">
        {episodes.map((e) => (
          <article key={e.title} className="episode">
            <h3>{e.title}</h3>
            <p>{e.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
