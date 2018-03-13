import { ELDBoulderRoutesComponent } from "./core/boulder-routes/boulder-routes.component";
import { ELDLoginComponent } from "./core/login";
import { ELDInfoComponent } from './core/info';
import { ELDDetailsComponent } from './core/details';

export const routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: "list", component:  ELDBoulderRoutesComponent},
    { path: "login", component: ELDLoginComponent },
    { path: "info", component: ELDInfoComponent },
    { path: "details", component: ELDDetailsComponent }
];

export const navigatableComponents = [
    ELDBoulderRoutesComponent,
    ELDLoginComponent,
    ELDDetailsComponent
];