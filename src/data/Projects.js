// One source of truth for all project "proof of work" data.
// cover        -> shown on the grid card
// before/after -> arrays of shots for the comparison slider. One item is fine;
//                 more than one adds a thumbnail row so a viewer can swap which
//                 before/after photo is being compared.
// extra        -> optional supporting photos/videos shown below the slider in the modal

export const PROJECTS = [
  {
    id: "01",
    title: "First Bank Head Office",
    category: "Alarm Systems",
    tag: "Commercial",
    desc: "Full addressable fire alarm system installed across 12 floors covering 800+ staff.",
    cover:
      "https://images.unsplash.com/photo-1595045720389-acca18600f4e?q=80&w=719&auto=format&fit=crop",
    before: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
        alt: "Old panel and wiring before the alarm system upgrade",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581092160607-ee22731c5cc8?q=80&w=1200&auto=format&fit=crop",
        alt: "Corridor without any visible alarm devices",
      },
    ],
    after: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1595045720389-acca18600f4e?q=80&w=719&auto=format&fit=crop",
        alt: "New addressable fire alarm panel after installation",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
        alt: "Corridor with new detector installed on ceiling",
      },
    ],
    extra: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
        alt: "Detector installed on office ceiling",
      },
      {
        type: "video",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
        alt: "Walkthrough of the installed alarm system",
      },
    ],
  },
  {
    id: "02",
    title: "Blackwood Hotel and Bar",
    category: "Suppression Systems",
    tag: "Hospitality",
    desc: "Wet pipe sprinkler system designed and installed across all guest rooms and common areas.",
    cover:
      "https://images.unsplash.com/photo-1639600993675-2281b2c939f0?q=80&w=1470&auto=format&fit=crop",
    before: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
      alt: "Guest room ceiling before sprinkler installation",
      },
    ],
    after: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1639600993675-2281b2c939f0?q=80&w=1470&auto=format&fit=crop",
      alt: "Guest room ceiling after sprinkler installation",
      },
    ],
    extra: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1631048496491-4bea4f38b5a4?q=80&w=1200&auto=format&fit=crop",
        alt: "Sprinkler head close-up",
      },
    ],
  },
  {
    id: "03",
    title: "Super Warehouse Facility",
    category: "Risk Assessment",
    tag: "Industrial",
    desc: "Comprehensive fire risk audit and extinguisher placement for a 15,000sqm logistics hub.",
    cover:
      "https://images.unsplash.com/photo-1581094487457-53e834445958?q=80&w=687&auto=format&fit=crop",
    before: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1601058268499-e52e3accef5c?q=80&w=1200&auto=format&fit=crop",
      alt: "Warehouse aisle before risk assessment upgrades",
      },
    ],
    after: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1581094487457-53e834445958?q=80&w=687&auto=format&fit=crop",
      alt: "Warehouse aisle after extinguisher placement",
      },
    ],
    extra: [],
  },
  {
    id: "04",
    title: "AFRAB Medical Warehouse",
    category: "Compliance Consulting",
    tag: "Industrial",
    desc: "End-to-end compliance package that secured Lagos State Fire Service certification on first inspection.",
    cover:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2670&auto=format&fit=crop",
    before: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      alt: "Warehouse before compliance work",
      },
    ],
    after: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2670&auto=format&fit=crop",
      alt: "Warehouse after compliance certification",
      },
    ],
    extra: [
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop",
        alt: "Certification signage installed on site",
      },
    ],
  },
  {
    id: "05",
    title: "AAVA Beverage Facility",
    category: "Fire Extinguisher Supply",
    tag: "Industrial",
    desc: "Supply and installation of fire extinguishers across the production floor.",
    cover:
      "https://images.unsplash.com/photo-1774256397579-7a915270afd1?q=80&w=1470&auto=format&fit=crop",
    before: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1580901369630-a6c3d17f6fa3?q=80&w=1200&auto=format&fit=crop",
      alt: "Production floor before extinguisher supply",
      },
    ],
    after: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1774256397579-7a915270afd1?q=80&w=1470&auto=format&fit=crop",
      alt: "Production floor after extinguisher installation",
      },
    ],
    extra: [],
  },
  {
    id: "06",
    title: "Port Harcourt Refinery",
    category: "Suppression Systems",
    tag: "Industrial",
    desc: "High-pressure foam suppression system designed for industrial fire risk in a live refinery environment.",
    cover:
      "https://images.unsplash.com/photo-1778245750094-64e23df60340?q=80&w=686&auto=format&fit=crop",
    before: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=1200&auto=format&fit=crop",
      alt: "Refinery site before foam suppression install",
      },
    ],
    after: [
      {
      type: "image",
      src: "https://images.unsplash.com/photo-1778245750094-64e23df60340?q=80&w=686&auto=format&fit=crop",
      alt: "Refinery site after foam suppression install",
      },
    ],
    extra: [
      {
        type: "video",
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        poster:
          "https://images.unsplash.com/photo-1778245750094-64e23df60340?q=80&w=686&auto=format&fit=crop",
        alt: "Suppression system test walkthrough",
      },
    ],
  },
]

export function getProjectIndexById(id) {
  return PROJECTS.findIndex((p) => p.id === id)
}