export type Category = "posters" | "branding" | "ai" | "wallpapers" | "personal";

export type WorkItem = {
  slug: string;
  title: string;
  category: Category;
  image: string;
  year: string;
  note: string;
};

export const categoryLabel: Record<Category, string> = {
  posters: "Posters & Flyers",
  branding: "Branding",
  ai: "AI & Digital",
  wallpapers: "Wallpapers",
  personal: "Personal",
};

export const work: WorkItem[] = [
  { slug: "fyb-picnic", title: "FYB Picnic", category: "posters", image: "/images/fyb-picnic.jpg", year: "2025", note: "Event poster. High-contrast type and a clear call to show up." },
  { slug: "fyb-v3", title: "FYB Picnic v3", category: "posters", image: "/images/fyb-v3.jpg", year: "2025", note: "Tighter revision of the picnic poster." },
  { slug: "summer-party", title: "Summer Party", category: "posters", image: "/images/summer-party.jpg", year: "2023", note: "Seasonal flyer built around color and heat." },
  { slug: "day-with-the-king", title: "A Day with the King", category: "posters", image: "/images/day-with-king.jpg", year: "2023", note: "Devotional event poster. Quiet palette, strong title lockup." },
  { slug: "countdown", title: "Countdown", category: "posters", image: "/images/countdown.jpg", year: "2025", note: "Countdown graphic for a live moment." },
  { slug: "iv-pass", title: "IV Pass", category: "posters", image: "/images/iv-pass.jpg", year: "2017", note: "Access pass / poster hybrid." },
  { slug: "iv-pass-ii", title: "IV Pass II", category: "posters", image: "/images/iv-pass-2.jpg", year: "2017", note: "Second pass on the same identity." },
  { slug: "offering", title: "Offering", category: "posters", image: "/images/offering.jpg", year: "2023", note: "Church graphic. Simple and readable." },
  { slug: "poster-study", title: "Poster Study", category: "posters", image: "/images/postr1.jpg", year: "2017", note: "Composition study." },
  { slug: "project-poster", title: "Project", category: "posters", image: "/images/project.jpg", year: "2023", note: "Announcement poster. Title-led." },
  { slug: "event-poster", title: "Event Poster", category: "posters", image: "/images/poster-2256601.jpg", year: "2025", note: "Event layout with a dense information block." },
  { slug: "graphic-poster", title: "Graphic Poster", category: "posters", image: "/images/poster-3.jpg", year: "2025", note: "Poster with stronger figure-ground." },
  { slug: "business-card", title: "Business Card", category: "branding", image: "/images/business-card.jpg", year: "2016", note: "Personal card. Name and role." },
  { slug: "card-variation-i", title: "Card Variation I", category: "branding", image: "/images/bcard1.jpg", year: "2016", note: "Alternate card lockup." },
  { slug: "card-variation-ii", title: "Card Variation II", category: "branding", image: "/images/bcard2.jpg", year: "2016", note: "Second card variation." },
  { slug: "black-card", title: "Black Card", category: "branding", image: "/images/bcard5-black.jpg", year: "2017", note: "Black version of the card system." },
  { slug: "concept-supercar", title: "Concept Supercar", category: "ai", image: "/images/supercar-concept.jpg", year: "2025", note: "AI concept vehicle study." },
  { slug: "futuristic-supercar", title: "Futuristic Supercar", category: "ai", image: "/images/supercar-futuristic.jpg", year: "2025", note: "Second vehicle study." },
  { slug: "night-concept", title: "Night Concept", category: "ai", image: "/images/ai-may-17-3.jpg", year: "2025", note: "Night scene as visual direction." },
  { slug: "digital-study-i", title: "Digital Study I", category: "ai", image: "/images/ai-oct-6-1.jpg", year: "2025", note: "Digital study exploring light." },
  { slug: "digital-study-ii", title: "Digital Study II", category: "ai", image: "/images/ai-oct-6-2.jpg", year: "2025", note: "Companion digital study." },
  { slug: "abstract-i", title: "Abstract Wall I", category: "ai", image: "/images/abstract-1.jpg", year: "2024", note: "Abstract piece for a dark interior." },
  { slug: "abstract-ii", title: "Abstract Wall II", category: "ai", image: "/images/abstract-2.jpg", year: "2024", note: "Second panel in the series." },
  { slug: "abstract-iii", title: "Abstract Wall III", category: "ai", image: "/images/abstract-3.jpg", year: "2024", note: "Third panel." },
  { slug: "black-desktop-i", title: "Black Desktop I", category: "wallpapers", image: "/images/wallpaper-black.jpg", year: "2024", note: "Dark desktop wallpaper." },
  { slug: "black-desktop-ii", title: "Black Desktop II", category: "wallpapers", image: "/images/wallpaper-black-2.jpg", year: "2024", note: "Companion wallpaper." },
  { slug: "helmet", title: "Helmet", category: "wallpapers", image: "/images/helmet.jpg", year: "2023", note: "Character study." },
  { slug: "leon", title: "Leon", category: "wallpapers", image: "/images/leon.jpg", year: "2016", note: "Early character illustration." },
  { slug: "mark", title: "Mark", category: "wallpapers", image: "/images/sociopath.jpg", year: "2024", note: "Small mark on black." },
  { slug: "portrait", title: "Portrait", category: "personal", image: "/images/avatar-face.jpg", year: "2017", note: "Self portrait." },
  { slug: "mixed-portrait", title: "Mixed Portrait", category: "personal", image: "/images/avatar-mix.jpg", year: "2016", note: "Collage portrait." },
];

export function getWork(slug: string) {
  return work.find((item) => item.slug === slug);
}
