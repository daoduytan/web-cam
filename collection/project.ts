import { IImage } from '.';

export interface IProject {
  _id: string;
  title: string;
  description: string;
  content: string[];
  thumbnail?: string | IImage;
  pick?: boolean;
  no?: number;
  service?: string;
  slug: string;
  credits?: string;
}
