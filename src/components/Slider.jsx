import { useCallback, useEffect, useRef, useState } from "react"
import SmartImage from "./SmartImage"
import "./Slider.css"

// before / after are arrays of { type, src, alt }. The slider always compares
// exactly one selected image from each side; thumbnails let you swap which
// one is active per side.
export default function BeforeAfterSlider({ before, after }) {
  const [position, setPosition] = useState(50)
  const [beforeIndex, setBeforeIndex] = useState(0)
  const [afterIndex, setAfterIndex] = useState(0)
  const [showHint, setShowHint] = useState(true)
  const containerRef = useRef(null)
  const draggingRef = useRef(false)

  const activeBefore = before[beforeIndex]
  const activeAfter = after[afterIndex]

  // Auto-dismiss the "drag to compare" hint after a few seconds even if
  // nobody interacts with the slider.
  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  const dismissHint = () => setShowHint(false)

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100))
    setPosition(pct)
  }, [])

  const handlePointerDown = (e) => {
    draggingRef.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
    dismissHint()
  }

  const handlePointerMove = (e) => {
    if (!draggingRef.current) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = () => {
    draggingRef.current = false
  }

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5))
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5))
    if (e.key === "Home") setPosition(0)
    if (e.key === "End") setPosition(100)
    dismissHint()
  }

  return (
    <div className="ba-slider-wrap">
    <div className="ba-slider" ref={containerRef}>
      <div className="ba-slider-media">
        <SmartImage src={activeBefore.src} alt={activeBefore.alt} />
        <span className="ba-slider-label ba-slider-label-before">Before</span>
      </div>

      <div
        className="ba-slider-media ba-slider-after"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      >
        <SmartImage src={activeAfter.src} alt={activeAfter.alt} />
        <span className="ba-slider-label ba-slider-label-after">After</span>
      </div>

      <div
        className="ba-slider-handle"
        style={{ left: `${position}%` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onKeyDown={handleKeyDown}
        role="slider"
        tabIndex={0}
        aria-label="Drag to reveal the after photo"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="ba-slider-handle-line" />
        <div className="ba-slider-handle-grip">
          {showHint && <span className="ba-slider-hint-ring" />}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M4 3L1 7L4 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 3L13 7L10 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {showHint && <span className="ba-slider-hint-label">Drag to compare</span>}
      </div>
    </div>

    {(before.length > 1 || after.length > 1) && (
      <div className="ba-thumb-rows">
        {before.length > 1 && (
          <div className="ba-thumb-row">
            <span className="ba-thumb-row-label">Before</span>
            <div className="ba-thumb-row-items">
              {before.map((img, i) => (
                <button
                  key={i}
                  className={`ba-thumb ${i === beforeIndex ? "ba-thumb-active" : ""}`}
                  onClick={() => setBeforeIndex(i)}
                  aria-label={`Show before photo ${i + 1}`}
                  aria-pressed={i === beforeIndex}
                >
                  <SmartImage src={img.src} alt="" />
                </button>
              ))}
            </div>
          </div>
        )}

        {after.length > 1 && (
          <div className="ba-thumb-row">
            <span className="ba-thumb-row-label">After</span>
            <div className="ba-thumb-row-items">
              {after.map((img, i) => (
                <button
                  key={i}
                  className={`ba-thumb ${i === afterIndex ? "ba-thumb-active" : ""}`}
                  onClick={() => setAfterIndex(i)}
                  aria-label={`Show after photo ${i + 1}`}
                  aria-pressed={i === afterIndex}
                >
                  <SmartImage src={img.src} alt="" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )}
    </div>
  )
}