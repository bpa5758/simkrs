import { AbouteInterface } from './about.interface';

export interface AboutStateInterface {
  isSubmitting: boolean;
  about: AbouteInterface | null;
  isLoggedIn: boolean | null;
}
