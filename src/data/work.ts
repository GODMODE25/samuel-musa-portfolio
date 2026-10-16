export type Category = "posters" | "branding" | "ai" | "wallpapers" | "personal";

export type WorkItem = {
  slug: string;
  title: string;
  category: Category;
  image: string;
  year: string;
  note: string;
};

export const categories: { id: Category | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "posters", label: "Posters" },
  { id: "branding", label: "Branding" },
  { id: "ai", label: "AI & Digital" },
  { id: "wallpapers", label: "Wallpapers" },
  { id: "personal", label: "Personal" },
];

export const categoryLabel: Record<Category, string> = {
  posters: "Posters & Flyers",
  branding: "Branding",
  ai: "AI & Digital",
  wallpapers: "Wallpapers",
  personal: "Personal",
};

export const work: WorkItem[] = [
  { slug: "fyb-picnic", title: "FYB Picnic", category: "posters", image: "/images/fyb-picnic.jpg", year: "2025", note: "Event poster. High-contrast type, full-bleed photography, and a clear call to show up." },
  { slug: "fyb-v3", title: "FYB Picnic v3", category: "posters", image: "/images/fyb-v3.jpg", year: "2025", note: "Tighter revision of the picnic poster — smaller type system, stronger hierarchy." },
  { slug: "summer-party", title: "Summer Party", category: "posters", image: "/images/summer-party.jpg", year: "2023", note: "Seasonal flyer built around color, heat, and a single date." },
  { slug: "day-with-the-king", title: "A Day with the King", category: "posters", image: "/images/day-with-king.jpg", year: "2023", note: "Devotional event poster. Quiet palette, strong title lockup." },
  { slug: "countdown", title: "Countdown", category: "posters", image: "/images/countdown.jpg", year: "2025", note: "Countdown graphic for a live moment — numbers as the hero." },
  { slug: "iv-pass", title: "IV Pass", category: "posters", image: "/images/iv-pass.jpg", year: "2017", note: "Access pass / poster hybrid. Early print system with a heavy mark." },
  { slug: "iv-pass-ii", title: "IV Pass II", category: "posters", image: "/images/iv-pass-2.jpg", year: "2017", note: "Second pass on the same identity, stripped back." },
  { slug: "offering", title: "Offering", category: "posters", image: "/images/offering.jpg", year: "2023", note: "Church graphic. Simple, readable, built to print and post." },
  { slug: "poster-study", title: "Poster Study", category: "posters", image: "/images/poster-3.jpg", year: "2024", note: "Study in scale and type. Minimal color, maximum impact." },
  { slug: "postr1", title: "Poster One", category: "posters", image: "/images/postr1.jpg", year: "2024", note: "Bold type-driven poster." },
  { slug: "poster-2256601", title: "Poster 2256601", category: "posters", image: "/images/poster-2256601.jpg", year: "2024", note: "Experimental layout with strong photographic base." },
  { slug: "project", title: "Project", category: "posters", image: "/images/project.jpg", year: "2024", note: "Project announcement graphic." },
  { slug: "business-card", title: "Business Card", category: "branding", image: "/images/business-card.jpg", year: "2024", note: "Clean card system with strong mark." },
  { slug: "bcard1", title: "Card System 1", category: "branding", image: "/images/bcard1.jpg", year: "2024", note: "Front of the card system." },
  { slug: "bcard2", title: "Card System 2", category: "branding", image: "/images/bcard2.jpg", year: "2024", note: "Reverse / variant." },
  { slug: "bcard5-black", title: "Black Card", category: "branding", image: "/images/bcard5-black.jpg", year: "2024", note: "Dark variant of the card." },
  { slug: "ai-may-17", title: "AI May 17", category: "ai", image: "/images/ai-may-17-3.jpg", year: "2025", note: "AI-assisted composition study." },
  { slug: "ai-oct-6-1", title: "AI Oct 6 — 1", category: "ai", image: "/images/ai-oct-6-1.jpg", year: "2025", note: "Digital concept exploration." },
  { slug: "ai-oct-6-2", title: "AI Oct 6 — 2", category: "ai", image: "/images/ai-oct-6-2.jpg", year: "2025", note: "Second frame from the same session." },
  { slug: "supercar-concept", title: "Supercar Concept", category: "ai", image: "/images/supercar-concept.jpg", year: "2024", note: "Vehicle concept with cinematic lighting." },
  { slug: "supercar-futuristic", title: "Futuristic Supercar", category: "ai", image: "/images/supercar-futuristic.jpg", year: "2024", note: "More aggressive silhouette study." },
  { slug: "abstract-1", title: "Abstract 1", category: "ai", image: "/images/abstract-1.jpg", year: "2024", note: "Color and form study." },
  { slug: "abstract-2", title: "Abstract 2", category: "ai", image: "/images/abstract-2.jpg", year: "2024", note: "Second abstract exploration." },
  { slug: "abstract-3", title: "Abstract 3", category: "ai", image: "/images/abstract-3.jpg", year: "2024", note: "Third in the series." },
  { slug: "wallpaper-black", title: "Black Wallpaper", category: "wallpapers", image: "/images/wallpaper-black.jpg", year: "2024", note: "Dark lock-screen wallpaper." },
  { slug: "wallpaper-black-2", title: "Black Wallpaper 2", category: "wallpapers", image: "/images/wallpaper-black-2.jpg", year: "2024", note: "Companion wallpaper with a slightly different light falloff." },
  { slug: "helmet", title: "Helmet", category: "wallpapers", image: "/images/helmet.jpg", year: "2023", note: "Character study that works as a lock screen." },
  { slug: "leon", title: "Leon", category: "wallpapers", image: "/images/leon.jpg", year: "2016", note: "Early character illustration, still useful as a wallpaper." },
  { slug: "mark", title: "Mark", category: "wallpapers", image: "/images/sociopath.jpg", year: "2024", note: "Small mark / emblem, high contrast on black." },
  { slug: "portrait", title: "Portrait", category: "personal", image: "/images/avatar-face.jpg", year: "2017", note: "Self portrait used as the site avatar." },
  { slug: "mixed-portrait", title: "Mixed Portrait", category: "personal", image: "/images/avatar-mix.jpg", year: "2016", note: "Collage portrait — personal, not client work." },
];

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}
