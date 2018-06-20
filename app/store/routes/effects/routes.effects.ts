import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { RoutesService } from '../../../servcies';
import * as RoutesActions from '../actions';
import firebase = require("nativescript-plugin-firebase");

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
        .switchMap(() => firebase.getValue('/routes')
            .then(result => {
                console.log(JSON.stringify(result));
                return new RoutesActions.LoadRoutesSuccessAction(result);
            })
            .catch(error => {
                console.log(error)
                return new RoutesActions.LoadRoutesFailedAction(error);
            }));

    //     .map(routes => (new RoutesActions.LoadRoutesSuccessAction(routes)))
    // );

    @Effect()
    loadRouteDetails$ = this.actions$
        .ofType(RoutesActions.LOAD_ROUTEDETAILS)
        .switchMap((action: RoutesActions.LoadRouteDetails) => this.routesService.loadDetailedRoute(action.id)
            .map(route => (new RoutesActions.LoadRouteDetailsSuccess(route)))
        );
}