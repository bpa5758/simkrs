import { createSelector } from '@ngrx/store';
import { AboutStateInterface } from '../../interface/about.state.interface';
import { AppStateInterface } from '../../interface/app.state.interface';

export const aboutFeatureSelector = (
  state: AppStateInterface
): AboutStateInterface => state.About;

export const isSubmittingSelector = createSelector(
  aboutFeatureSelector,
  (aboutState: AboutStateInterface) => aboutState.isSubmitting
);

export const aboutSelector = createSelector(
  aboutFeatureSelector,
  (aboutState: AboutStateInterface) => aboutState.about
);

export const isLoggedInSelector = createSelector(
  aboutFeatureSelector,
  (aboutState: AboutStateInterface) => aboutState.isLoggedIn
);
