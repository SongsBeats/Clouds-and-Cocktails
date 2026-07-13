import { EventItem } from "./types";

export const eventsData: EventItem[] = [
  {
    id: "zephyr",
    title: "ZEPHYR",
    date: "Sun, 19 Aug",
    formattedDate: "AUG 18",
    tag: "AUG 18",
    time: "11:30 PM - 5:00 AM",
    artists: ["SOLAR DRIFT", "SONG MIRAGE", "HARPER"],
    price: 25,
    bannerImage: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80",
    themeColor: "bg-zinc-950 text-white border-zinc-800",
    details: "An immersive journey into deep house and dark techno, hosted in our main warehouse hall with custom laser design and sensory staging."
  },
  {
    id: "vivid-pulse",
    title: "Vivid Pulse",
    date: "Wed, 22 Aug",
    formattedDate: "AUG 22",
    tag: "AUG 22",
    time: "10:00 PM - 2:00 AM",
    artists: ["Quantum Beat", "Riley Scott", "Harper Sterling", "Aurora Bass", "Jasper Quinn"],
    price: 30,
    bannerImage: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    themeColor: "bg-[#ADFF2F] text-black border-[#94e224]",
    details: "Vibrant synthwave and progressive electro night with a premium lineup of regional and international floor-shakers."
  },
  {
    id: "lena-brooks",
    title: "Lena Brooks",
    date: "Mon, 17 Sept",
    formattedDate: "SEP 17",
    tag: "SEP 17",
    time: "11:00 PM - 4:00 AM",
    artists: ["Ava Sinclair", "Nebula", "Ava"],
    price: 35,
    bannerImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    themeColor: "bg-emerald-950 text-emerald-100 border-emerald-900",
    details: "A special performance by underground techno legend Lena Brooks. Expect dark basslines, ambient breakdowns, and relentless speed."
  },
  {
    id: "song-mirage",
    title: "Song Mirage",
    date: "Wed, 19 Sept",
    formattedDate: "SEP 19",
    tag: "SEP 19",
    time: "11:30 PM - 5:00 AM",
    artists: ["Scott", "Nebula", "Solar Drift"],
    price: 28,
    bannerImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    themeColor: "bg-rose-600 text-white border-rose-500",
    details: "High-octane synth, melodic progressive trance, and high fashion. Dress code: bold, reflective, and red-accented."
  },
  {
    id: "echo",
    title: "Echo",
    date: "Wed, 19 Sept",
    formattedDate: "NOV 09",
    tag: "NOV 09",
    bpm: 160,
    time: "11:30 PM - 5:00 AM",
    artists: ["NEBULA x ARIA", "SOLAR DRIFT"],
    price: 25,
    bannerImage: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80",
    themeColor: "bg-blue-950 text-blue-100 border-blue-900",
    details: "Hardcore breaks, drum & bass, and futuristic jungle at 160 BPM. Immersive spherical holographic projections in the main dome."
  },
  {
    id: "frostbyte",
    title: "Frostbyte",
    date: "Mon, 17 Dec",
    formattedDate: "DEC 17",
    tag: "DEC 17",
    time: "11:30 PM - 5:00 AM",
    artists: ["FROSTBYTE SPECIAL GUESTS"],
    price: 32,
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    themeColor: "bg-orange-600 text-white border-orange-500",
    details: "Our annual winter celebration featuring an ice-sculpted cocktail bar, sub-zero vapor effects, and high-energy industrial electro."
  }
];

export const venueFeatures = [
  {
    id: "1",
    title: "Versatile Indoor & Outdoor Spaces",
    desc: "A multi-zone venue seamlessly transitioning from an open-sky garden patio to a soundproofed concrete warehouse chamber."
  },
  {
    id: "2",
    title: "State-of-the-Art Sound & Lighting",
    desc: "Equipped with a custom L-Acoustics sound system and pixel-mapped spatial lighting grids responsive to frequency shifts."
  },
  {
    id: "3",
    title: "Immersive Visual Installations",
    desc: "360-degree dome projections, LED strip clusters, and kinetic light bars created in collaboration with digital visual collectives."
  },
  {
    id: "4",
    title: "VIP Experience & Private Lounges",
    desc: "Secret mezzanine booths, private key-code cocktail bars, and customized hostess bottle services for private bookings."
  }
];

export const galleryImages = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    alt: "Sneakers on speaker",
    hoverColor: "bg-lime-500/20",
    title: "Warp Core Amp"
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    alt: "Woman covering face",
    hoverColor: "bg-fuchsia-500/20",
    title: "Shadow Cover"
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
    alt: "Red rave lighting",
    hoverColor: "bg-red-500/20",
    title: "Ruby Strobe"
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    alt: "DJ mixer",
    hoverColor: "bg-blue-500/20",
    title: "Analog Deck"
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    alt: "Crowd dancing hands up",
    hoverColor: "bg-yellow-500/20",
    title: "Infinite Pulse"
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    alt: "Group sharing cocktails",
    hoverColor: "bg-teal-500/20",
    title: "C&C Social"
  }
];
