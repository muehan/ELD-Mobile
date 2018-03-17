import * as routesActions from './../actions';
import { RoutesState } from '..';

const initialState: RoutesState = {
    routes: [],
    currentRoute: undefined
};

export function routesReducer(
    state: RoutesState = initialState,
    action: routesActions.RoutesActions) {

    switch (action.type) {
        case routesActions.LOAD_ROUTES_SUCCESS: {
            return {
                ...state,
                routes: action.payload
            }
        }
        case routesActions.LOAD_ROUTEDETAILS_SUCCESS: {
            return {
                ...state,
                currentRoute: action.payload
            }
        }
        default: {
            return state;
        }
    }

}