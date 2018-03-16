import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { RoutesService } from '../../../servcies';
import * as RoutesActions from '../actions';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Injectable()
export class RoutesEffects {

    constructor(
        private routesService: RoutesService,
        private actions$: Actions
    ) { }

    @Effect()
    loadRoutes$ = this.actions$
        .ofType(RoutesActions.LOAD_ROUTES)
        .switchMap(() => this.routesService.loadAllRoutes()
            .map(routes => (new RoutesActions.LoadRoutesSuccessAction(routes)))
        );
}