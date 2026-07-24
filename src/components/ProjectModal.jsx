import { useEffect, useRef, useState } from "react"
import BeforeAfterSlider from "./Slider"
import MediaLightbox from "./Medialightbox"
import SmartImage from "./SmartImage"
import "./ProjectModal.css"

export default function ProjectModal({ project, onClose, onPrev, onNext }) {
  const modalRef = useRef(null)
  const lastFocusedRef = useRef(null)
  const [lightboxItem, setLightboxItem] = useState(null)

  // Scroll lock + keyboard controls + focus management
  useEffect(() => {
    lastFocusedRef.current = document.activeElement
    document.body.style.overflow = "hidden"
    modalRef.current?.focus()

    const handleKeyDown = (e) => {
      // If the lightbox is open, Escape closes just the lightbox, and
      // project navigation is paused so arrow keys don't fire underneath it.
      if (lightboxItem) {
        if (e.key === "Escape") setLightboxItem(null)
        return
      }
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrev()
      if (e.key === "ArrowRight") onNext()
    }
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", handleKeyDown)
      lastFocusedRef.current?.focus?.()
    }
  }, [onClose, onPrev, onNext, lightboxItem])

  if (!project) return null

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        ref={modalRef}
        tabIndex={-1}
      >
        <button className="project-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <button
          className="project-modal-nav project-modal-nav-prev"
          onClick={onPrev}
          aria-label="Previous project"
        >
          ‹
        </button>
        <button
          className="project-modal-nav project-modal-nav-next"
          onClick={onNext}
          aria-label="Next project"
        >
          ›
        </button>

        <div className="project-modal-body">
          <div className="project-modal-tag">{project.tag}</div>
          <h3 className="project-modal-title">{project.title}</h3>
          <div className="project-modal-category">{project.category}</div>

          <BeforeAfterSlider before={project.before} after={project.after} />

          <p className="project-modal-desc">{project.desc}</p>

          {project.extra && project.extra.length > 0 && (
            <div className="project-modal-extra">
              {project.extra.map((item, i) =>
                item.type === "video" ? (
                  <video
                    key={i}
                    className="project-modal-extra-item"
                    src={item.src}
                    poster={item.poster}
                    controls
                    muted
                    playsInline
                    preload="none"
                  />
                ) : (
                  <button
                    key={i}
                    className="project-modal-extra-item-btn"
                    onClick={() => setLightboxItem(item)}
                    aria-label="View photo full size"
                  >
                    <SmartImage
                      src={item.src}
                      alt={item.alt || project.title}
                      className="project-modal-extra-item"
                    />
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>

      <MediaLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </div>
  )
}