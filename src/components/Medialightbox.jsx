import { useState } from "react"
import "./MediaLightbox.css"

export default function MediaLightbox({ item, onClose }) {
  const [status, setStatus] = useState("loading")

  if (!item) return null

  return (
    <div className="media-lightbox-backdrop" onClick={onClose}>
      <button className="media-lightbox-close" onClick={onClose} aria-label="Close image">
        ✕
      </button>

      {status === "loading" && <div className="media-lightbox-spinner" />}

      {status === "error" ? (
        <div className="media-lightbox-error">Image unavailable</div>
      ) : (
        <img
          className="media-lightbox-img"
          src={item.src}
          alt={item.alt || ""}
          style={{ opacity: status === "loaded" ? 1 : 0 }}
          onClick={(e) => e.stopPropagation()}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  )
}