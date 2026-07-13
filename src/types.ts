export interface Artist {
  name: string;
  role?: string;
}

export interface EventItem {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  formattedDate: string;
  time: string;
  location?: string;
  artists?: string[];
  genre?: string;
  price: number;
  bannerImage: string; // Inner card display
  themeColor: string; // Tailwind class for background
  textColor?: string; // Text styling
  tag?: string; // SEP 17, AUG 18 etc.
  details?: string;
  bpm?: number;
}

export interface Ticket {
  id: string;
  eventId: string;
  eventTitle: string;
  eventDate: string;
  quantity: number;
  totalPrice: number;
  buyerName: string;
  buyerEmail: string;
  bookingRef: string;
  barcodeValue: string;
  purchaseDate: string;
}
