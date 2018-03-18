import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RouteListItem } from "../../../models";
import { Store, select } from "@ngrx/store";
import { RoutesState } from "../../../store/routes/routes.state";
import * as routesActions from '../../../store/routes/actions';
import * as fromRoutes from '../../../store/routes/reducers';
import { forEach } from "@angular/router/src/utils/collection";

@Component({
  selector: "eld-boulder-routes",
  templateUrl: './core/component/boulder-routes/boulder-routes.component.html',
  styleUrls: [
    './core/component/boulder-routes/boulder-routes.component.scss'
   ]
})

export class ELDBoulderRoutesComponent {
  
    public routes$: Observable<RouteListItem[]>;

    constructor(
        private store: Store<RoutesState>
    ) {
        console.log('welcome in the routeList component');
        this.store.dispatch(new routesActions.LoadRoutesAction());
        this.routes$ = this.store.pipe(select(fromRoutes.getRoutesEntitiesState));
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }
}