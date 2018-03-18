import {
    ELDLoginComponent,
    ELDInfoComponent
} from './core/components';

import {
    ELDDetailsComponent,
    ELDBoulderRoutesComponent
} from './routes/components';

export const routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: "list", component: ELDBoulderRoutesComponent },
    { path: "login", component: ELDLoginComponent },
    { path: "info", component: ELDInfoComponent },
    { path: "details/:id", component: ELDDetailsComponent }
];

export const navigatableComponents = [
    ELDBoulderRoutesComponent,
    ELDLoginComponent,
    ELDDetailsComponent
];