import { createReducer, on, Action } from '@ngrx/store';
import { AboutStateInterface } from '../../interface/about.state.interface';
import {
  getAboutAction,
  getAboutFailureAction,
  getAboutSuccessAction,
  resetAboutAction,
} from './about.actions';

export const initialState: AboutStateInterface = {
  isSubmitting: false,
  about: null,
  isLoggedIn: false,
};

export const aboutReducer = createReducer(
  initialState,
  on(
    getAboutAction,
    (state): AboutStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    getAboutFailureAction,
    (state, action): AboutStateInterface => ({
      ...state,
      isSubmitting: false,
      about: null,
    })
  ),
  on(
    getAboutSuccessAction,
    (state, action): AboutStateInterface => ({
      ...state,
      isSubmitting: false,
      about: action.response.data,
    })
  ),
  on(resetAboutAction, (): AboutStateInterface => initialState)
);

export function AboutReducer(state: AboutStateInterface, action: Action) {
  return aboutReducer(state, action);
}
