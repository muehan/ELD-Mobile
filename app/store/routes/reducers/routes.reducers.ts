import * as routesActions from './../actions';

export function routesReducer(state = [], action: routesActions.RoutesActions){

    switch(action.type){
        case routesActions.LOAD_ROUTES_SUCCESS: {
            return action.payload;
        }
        case routesActions.LOAD_ROUTEDETAILS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }

}