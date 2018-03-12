import { ELDLayoutComponent } from "./core/layout/layout.component";
import { ELDLoginComponent } from "./core/login";
import { ELDInfoComponent } from "./core/info";

export const routes = [
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: "list", component:  ELDLayoutComponent},
    { path: "login", component: ELDLoginComponent },
    { path: "info", component: ELDInfoComponent },
];

export const navigatableComponents = [
    ELDLayoutComponent,
    ELDLoginComponent,
];