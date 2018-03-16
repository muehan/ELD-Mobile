import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RouteDetails } from "../../models";
import { Store } from "@ngrx/store";
import { RoutesState } from "../../store/routes/routes.state";
import * as routesActions from '../../store/routes/actions';

@Component({
  selector: "eld-boulder-routes",
  templateUrl: './core/boulder-routes/boulder-routes.component.html',
  styleUrls: [
    './core/boulder-routes/boulder-routes.component.scss'
   ]
})

export class ELDBoulderRoutesComponent {
  
    public routes$: Observable<RouteDetails[]>;

    constructor(
        private store: Store<RoutesState>
    ) {
        this.store.dispatch(new routesActions.LoadRoutesAction());
        this.routes$ = this.store.select(x => x.routes);
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
}
