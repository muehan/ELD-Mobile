import { ELDBoulderRoutesComponent } from "./component/boulder-routes/boulder-routes.component";
import { ELDLoginComponent } from "./component/login";
import { ELDInfoComponent } from './component/info';
import { ELDDetailsComponent } from './component/details';

export const routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: "list", component:  ELDBoulderRoutesComponent},
    { path: "login", component: ELDLoginComponent },
    { path: "info", component: ELDInfoComponent },
    { path: "details/:id", component: ELDDetailsComponent }
];

export const navigatableComponents = [
    ELDBoulderRoutesComponent,
    ELDLoginComponent,
    ELDDetailsComponent
];