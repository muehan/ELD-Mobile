import { Action } from '@ngrx/store';
import { RouteListItem } from '../../../models';

export const LOAD_ROUTES = 'LOAD_COMPANIES';
export const LOAD_ROUTES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';

export class LoadRoutesAction implements Action {
    readonly type = LOAD_ROUTES;

    constructor() {}
}

export class LoadRoutesSuccessAction implements Action {
    readonly type = LOAD_ROUTES_SUCCESS;

    constructor(public payload: RouteListItem[]) {}
}

export type RoutesActions = LoadRoutesAction | LoadRoutesSuccessAction;