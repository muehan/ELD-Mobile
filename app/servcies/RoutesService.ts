
import { Observable } from 'rxjs/Observable';
import { RouteListItem } from '../models';

import 'rxjs/add/observable/of';

export class RoutesService {

    loadAllRoutes(): Observable<RouteListItem[]> {
        let routes: RouteListItem[] = [
            {
                id: '1',
                name: 'Tschifeler',
                difficutly: 'B2',
                position: 'Höhle Links',
            },
            {
                id: '2',
                name: 'Hauruck',
                difficutly: 'B2',
                position: 'Höhle Links',
            },
            {
                id: '3',
                name: 'Muckibude',
                difficutly: 'B2',
                position: 'Höhle rechts',
            },
            {
                id: '4',
                name: 'yamyam',
                difficutly: 'B3',
                position: 'Überhängend',
            },
        ]

        return Observable.of(routes);
    }
}