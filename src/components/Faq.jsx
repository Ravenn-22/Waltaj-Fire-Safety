import { useState } from "react"
import "./Faq.css"

const FAQS = [
  {
    question: "Do you handle both supply and installation, or just one?",
    answer:
      "We handle both — from supplying extinguishers, alarms, and suppression equipment through to full installation. You can also engage us for supply only if you already have an installation team in place.",
  },
  {
    question: "Do you work on residential properties, or only commercial/industrial?",
    answer:
      "Our main focus is commercial and industrial sites — offices, hotels, warehouses, and facilities like the ones in our projects section. We can take on residential work on a case-by-case basis, so reach out and we'll confirm fit.",
  },
  {
    question: "Will your installation pass Lagos State Fire Service inspection?",
    answer:
      "Our installations are designed to meet NFPA and Lagos State Fire Service requirements from the outset, and we've supported clients through first-time certification before. We can also assist directly with the inspection process itself.",
  },
  {
    question: "How long does a typical installation take?",
    answer:
      "It depends on the size and type of system — a single-floor extinguisher supply job can take a day or two, while a multi-floor alarm or suppression system may take several weeks. We'll give you a clear timeline after an initial site assessment.",
  },
  {
    question: "Do you carry out a site assessment before quoting?",
    answer:
      "Yes — we assess the site first so the quote reflects your actual risk profile and building layout, rather than a generic estimate. This also helps us flag any compliance gaps early.",
  },
  {
    question: "Is there ongoing maintenance after installation, or is it one-time?",
    answer:
      "We offer maintenance and servicing plans in addition to one-time installation, since most fire systems require periodic inspection to stay compliant and functional. We can walk you through the options that fit your facility.",
  },
  {
    question: "Can you work around an active site without shutting it down?",
    answer:
      "In most cases, yes — we plan installation work in phases to minimize disruption to day-to-day operations, which matters most for live environments like warehouses, hotels, and industrial facilities. We'll discuss site-specific constraints before work begins.",
  },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? "faq-item-open" : ""}`}>
      <button
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{item.question}</span>
        <span className="faq-chevron" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className="faq-answer-wrap">
        <p className="faq-answer">{item.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-top">
        {/* <div className="faq-icon">?</div> */}
        <h2 className="faq-heading">
          Frequently Asked <span>Questions</span>
        </h2>
        <p className="faq-subtext">
          Answers to what clients usually ask before starting a fire safety project with us.
        </p>
      </div>

      <div className="faq-list">
        {FAQS.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  )
}