import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';
import { RoutesState } from '..';

export * from './routes.reducers';

export const getListofRoutes = (state: RoutesState) => state.routes;

export const getRoutesState = createFeatureSelector<RoutesState>('routes');

export const getRoutesEntitiesState = createSelector(
    getRoutesState,
    state => state.routes
);

export const getSelectedRouteState = createSelector(
    getRoutesState,
    state => state.currentRoute
)