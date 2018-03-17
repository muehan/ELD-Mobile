import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RouteListItem } from "../../models";
import { Store, select } from "@ngrx/store";
import { RoutesState } from "../../store/routes/routes.state";
import * as routesActions from '../../store/routes/actions';
import * as fromRoutes from '../../store/routes/reducers';

@Component({
  selector: "eld-boulder-routes",
  templateUrl: './core/boulder-routes/boulder-routes.component.html',
  styleUrls: [
    './core/boulder-routes/boulder-routes.component.scss'
   ]
})

export class ELDBoulderRoutesComponent {
  
    public routes$: Observable<RouteListItem[]>;

    constructor(
        private store: Store<RoutesState>
    ) {
        this.store.dispatch(new routesActions.LoadRoutesAction());
        this.routes$ = this.store.pipe(select(fromRoutes.getRoutesEntitiesState));
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
}
