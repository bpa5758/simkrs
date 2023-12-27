import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getAboutAction,
  getAboutFailureAction,
  getAboutSuccessAction,
} from './about.actions';
import { switchMap, map, catchError, of } from 'rxjs';
import { errorApi } from 'src/app/shared/utils/error.api';
import { AboutService } from '../../about.service';
import { ResponseApiInterface } from '../../interface/response.api.interface';

@Injectable()
export class AboutEffect {
  actions$ = inject(Actions);
  router = inject(Router);
  aboutService = inject(AboutService);

  getAbout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getAboutAction),
      switchMap(() => {
        return this.aboutService.getAbout().pipe(
          map((response: ResponseApiInterface) => {
            if (response.code !== 200) {
              return getAboutFailureAction(errorApi);
            }
            return getAboutSuccessAction({ response });
          }),
          catchError(() => {
            return of(getAboutFailureAction(errorApi));
          })
        );
      })
    )
  );
}
