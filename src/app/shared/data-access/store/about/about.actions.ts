import { createAction, props } from '@ngrx/store';
import { AboutActionTypes } from '../../types/about.types';
import { ResponseApiInterface } from '../../interface/response.api.interface';

export const getAboutAction = createAction(AboutActionTypes.GET_ABOUT);
export const getAboutFailureAction = createAction(
  AboutActionTypes.GET_ABOUT_FAILURE,
  props<{ response: ResponseApiInterface }>()
);
export const getAboutSuccessAction = createAction(
  AboutActionTypes.GET_ABOUT_SUCCESS,
  props<{ response: ResponseApiInterface }>()
);
export const resetAboutAction = createAction(AboutActionTypes.RESET_ABOUT);
