import { AboutInterface } from './about.interface';

export interface AboutStateInterface {
  isSubmitting: boolean;
  about: AboutInterface | null;
}
