export interface Photo {
  title: string;
  description: string;
  metadata: Record<string, any>; // Use a specific type if metadata has fields
  path: string;
  bg_color: string;
  card_color: string;
}

export type PhotoData = Photo[];