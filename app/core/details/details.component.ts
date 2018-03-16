import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { RoutesState } from '../../store/routes';
import * as routesActions from '../../store/routes/actions';
import { Observable } from "rxjs/Observable";
import { RouteDetails } from '../../models';

@Component({
    selector: 'eld-details',
    templateUrl: './core/details/details.component.html',
    styleUrls: [
        './core/details/details.component.scss'
    ]
})

export class ELDDetailsComponent implements OnInit {
    
    private id: string;
    private route$: Observable<RouteDetails>;

    constructor(
        private route: ActivatedRoute,
        private store: Store<RoutesState>)
        { }

    ngOnInit() {
        this.route.params.subscribe(params => {
           this.id = params['id'];
           this.store.dispatch(new routesActions.LoadRouteDetails(this.id));
           this.route$ = this.store.select(x => x.currentRoute);

           this.route$.subscribe(route => {
               console.log(route);
           })
        });
      }
}