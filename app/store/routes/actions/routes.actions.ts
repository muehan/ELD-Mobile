import { Action } from '@ngrx/store';
import { RouteListItem, RouteDetails } from '../../../models';

export const LOAD_ROUTES = 'LOAD_COMPANIES';
export const LOAD_ROUTES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const LOAD_ROUTES_FAILED = 'LOAD_COMPANIES_SUCCESS';
export const LOAD_ROUTEDETAILS = 'LOAD_ROUTEDETAILS';
export const LOAD_ROUTEDETAILS_SUCCESS = 'LOAD_ROUTEDETAILS_SUCCESS';

export type RoutesActions =
    LoadRoutesAction | LoadRoutesSuccessAction | LoadRoutesFailedAction
    | LoadRouteDetails | LoadRouteDetailsSuccess;

export class LoadRoutesAction implements Action {
    readonly type = LOAD_ROUTES;

    constructor() { }
}

export class LoadRoutesSuccessAction implements Action {
    readonly type = LOAD_ROUTES_SUCCESS;

    constructor(public payload: RouteListItem[]) { }
}

export class LoadRoutesFailedAction implements Action {
    readonly type = LOAD_ROUTES_FAILED;

    constructor(public payload: string) { }
}

export class LoadRouteDetails implements Action {
    readonly type = LOAD_ROUTEDETAILS;

    constructor(public id: string) { }
}

export class LoadRouteDetailsSuccess implements Action {
    readonly type = LOAD_ROUTEDETAILS_SUCCESS;

    constructor(public payload: RouteDetails) { }
}
