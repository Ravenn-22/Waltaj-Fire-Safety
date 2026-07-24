import { useState } from "react"
import "./SmartImage.css"

// Drop-in replacement for <img> that shows a shimmer skeleton while loading
// and a quiet fallback if the image fails to load. Assumes the parent
// element already has a defined width/height (grid cards, slider frames,
// thumbnails, extra-media tiles all do).
export default function SmartImage({ src, alt, className = "", draggable = true }) {
  const [status, setStatus] = useState("loading") // loading | loaded | error

  return (
    <div className="smart-img-wrap">
      {status === "loading" && <div className="smart-img-skeleton" />}

      {status === "error" ? (
        <div className="smart-img-error">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 16l5-5 3 3 5-6 5 6M3 16v3a1 1 0 001 1h16a1 1 0 001-1v-3M3 16V5a1 1 0 011-1h16a1 1 0 011 1v11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Image unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          draggable={draggable}
          className={`smart-img ${className}`}
          style={{ opacity: status === "loaded" ? 1 : 0 }}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  )
}