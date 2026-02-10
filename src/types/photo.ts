export interface Photo {
  title: string;
  description: string;
  metadata: Record<string, any>; // Use a specific type if metadata has fields
  path: string;
  color_scheme: string;
}

export type PhotoData = Photo[];