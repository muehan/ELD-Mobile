import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { RoutesState } from '../../../store/routes';
import * as routesActions from '../../../store/routes/actions';
import * as fromRoutes from '../../../store/routes/reducers';
import { Observable } from "rxjs/Observable";
import { RouteDetails } from '../../../models';

@Component({
    selector: 'eld-details',
    templateUrl: './routes/components/details/details.component.html',
    styleUrls: [
        './routes/components/details/details.component.scss'
    ]
})

export class ELDDetailsComponent implements OnInit {
    
    private id: string;
    private route$: Observable<RouteDetails>;
    
    public difficultyRating: Array<number>;
    public funRating: Array<number>;

    constructor(
        private route: ActivatedRoute,
        private store: Store<RoutesState>)
        {
            this.difficultyRating = [ 0,1,2,3,4,5];
            this.funRating = [0,1,2,3,4,5];
        }

    ngOnInit() {
        this.route.params.subscribe(params => {
           this.id = params['id'];
           this.store.dispatch(new routesActions.LoadRouteDetails(this.id));
        });

        this.route$ = this.store.pipe(select(fromRoutes.getSelectedRouteState));
      }
}