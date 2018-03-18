
import { Observable } from 'rxjs/Observable';
import { RouteListItem, RouteDetails } from '../models';

import 'rxjs/add/observable/of';

export class RoutesService {

    loadAllRoutes(): Observable<RouteListItem[]> {
        return Observable.of(this.routes);
    }

    loadDetailedRoute(id: string): Observable<RouteDetails> {
        return Observable.of(this.routes.filter(x => x.id === id)[0]);
    }

    private routes: RouteDetails[] = [
        {
            id: '1',
            name: 'Tschifeler',
            difficutly: 'B2',
            position: 'Höhle Links',
            remark: 'ohne Struktur',
            createdAt: new Date(),
            createdBy: 'Master Builder'
        },
        {
            id: '2',
            name: 'Hauruck',
            difficutly: 'B2',
            position: 'Höhle Links',
            remark: 'ohne Struktur',
            createdAt: new Date(),
            createdBy: 'Master Builder'
        },
        {
            id: '3',
            name: 'Muckibude',
            difficutly: 'B2',
            position: 'Höhle rechts',
            remark: 'ohne Struktur',
            createdAt: new Date(),
            createdBy: 'Master Builder'
        },
        {
            id: '4',
            name: 'yamyam',
            difficutly: 'B3',
            position: 'Überhängend',
            remark: 'ohne Struktur',
            createdAt: new Date(),
            createdBy: 'Master Builder'
        },
    ]
}