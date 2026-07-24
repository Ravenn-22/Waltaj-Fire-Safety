import { useState } from "react"
import "./Projects.css"
import ProjectModal from "./ProjectModal"
import { PROJECTS } from "../data/projects"

function ProjectCard({ project, onOpen }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`project-card ${hovered ? "project-card-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
    >
      {/* Image */}
      <div className="project-card-img-wrap">
        <img src={project.cover} alt={project.title} className="project-card-img" />

        {/* Hover overlay */}
        <div className={`project-card-overlay ${hovered ? "project-card-overlay-visible" : ""}`}>
          <span className="project-card-view">View Project →</span>
        </div>

        {/* Tag */}
        <div className="project-card-tag">{project.tag}</div>
      </div>

      {/* Details */}
      <div className="project-card-body">
        <div className="project-card-category">{project.category}</div>
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.desc}</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const openProject = (index) => setSelectedIndex(index)
  const closeProject = () => setSelectedIndex(null)
  const goPrev = () =>
    setSelectedIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length)
  const goNext = () => setSelectedIndex((i) => (i + 1) % PROJECTS.length)

  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <div>
          <div className="section-tag">
            <h3>Projects That Speak for Us</h3>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} onOpen={() => openProject(i)} />
        ))}
      </div>

      {selectedIndex !== null && (
        <ProjectModal
          project={PROJECTS[selectedIndex]}
          onClose={closeProject}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  )
}