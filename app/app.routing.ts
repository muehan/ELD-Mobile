import { ELDLayoutComponent } from "./core/layout/layout.component";
import { ELDLoginComponent } from "./core/login";

export const routes = [
    { path: "", component: ELDLayoutComponent },
    { path: "login", component: ELDLoginComponent }
];

export const navigatableComponents = [
    ELDLayoutComponent,
    ELDLoginComponent,
];