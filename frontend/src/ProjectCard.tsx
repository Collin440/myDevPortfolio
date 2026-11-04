import type { Project } from "./data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <span className="card-tag">{project.tag}</span>
      <h3>{project.title}</h3>
      <p>{project.blurb}</p>
      <ul className="stack">
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <span className="status">{project.status}</span>
    </article>
  );
}
