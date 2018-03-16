import { RouteListItem, RouteDetails } from '../../models';

export interface RoutesState {
    routes: RouteListItem[];
    currentRoute: RouteDetails;
}