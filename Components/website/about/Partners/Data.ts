export interface Partner {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  /** Path under /public. Initials are shown until it is set. */
  photo?: string;
  linkedin: string;
  x: string;
  instagram: string;
}

export const partners: Partner[] = [
  {
    name: "Farraj Alghusaib",
    role: "Co-Founder & Managing Partner, Global Strategy & Market Expansion",
    tagline: "17+ years in cross-border growth",
    bio: "Farraj Alghusaib is an international business executive with over 17 years of experience advising organizations on cross-border growth, strategic partnerships, and U.S.–GCC market expansion. He has built and led ventures across healthcare, education, logistics, and technology, structuring high-impact initiatives and facilitating entry into competitive markets. His experience operating across both regions enables him to advise leadership teams on commercially rigorous, culturally intelligent expansion strategies. Educated in the United States and experienced across global markets, Farraj brings a dual-market perspective grounded in competitive standards and executive-level discipline.",
    photo: "/Partners/Farraj.jpg",
    linkedin: "#",
    x: "#",
    instagram: "#",
  },
  {
    name: "Turki Alghusoon",
    role: "Co-Founder & Managing Partner, Strategy & Analytics",
    tagline: "15+ years in strategy and analytics",
    bio: "Turki Alghusoon is a strategy and analytics executive with over 15 years of experience advising organizations on enterprise performance, decision intelligence, and technology-enabled transformation. He has spent the past 14 years at the World Bank Group supporting complex institutional initiatives across global markets. Specializing in translating complex data into executive-level insight, he designs performance architectures that inform high-stakes strategic decisions. His experience across complex, high-accountability environments informs a disciplined and quantitatively rigorous approach, grounded in globally competitive standards for strategic decision-making.",
    photo: "/Partners/Turki.jpg",
    linkedin: "#",
    x: "#",
    instagram: "#",
  },
  {
    name: "Fahad Alhasoun",
    role: "Co-Founder & Managing Partner, Artificial Intelligence",
    tagline: "Doctorate, Computational Science & Engineering, MIT",
    bio: "Fahad Alhasoun is an artificial intelligence and data science leader with extensive experience developing advanced applications across urban planning, healthcare, transportation, mining, and other complex domains. He specializes in translating emerging AI technologies and scientific research into practical, scalable solutions that improve decision-making and operational performance. Fahad has led the development of significant AI capabilities at Hudhud Maps in Saudi Arabia and held technical roles as an Applied Scientist at Amazon and Data Scientist at IBM and Foursquare. He also serves as an Assistant Professor at King Abdulaziz City for Science and Technology, with research published in peer-reviewed conferences and journals internationally. Fahad holds a doctorate in Computational Science and Engineering and dual master's degrees in computational and computer science from the Massachusetts Institute of Technology.",
    photo: "/Partners/Fahd.jpg",
    linkedin: "#",
    x: "#",
    instagram: "#",
  },
];

export const disclaimer =
  "Professional Background Disclaimer: Information about partners' prior experience and affiliations is provided for biographical purposes only and does not imply endorsement by, or affiliation with, those organizations.";