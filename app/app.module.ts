// libraries
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// components
import { AppComponent } from "./app.component";
import { ELDLayoutComponent } from "./core/layout/layout.component";
import { ELDLoginComponent } from './core/login/login.component';
import { ELDInfoComponent } from "./core/info";


// files
import { routes } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    ELDLayoutComponent,
    ELDLoginComponent,
    ELDInfoComponent
  ],

  bootstrap: [AppComponent],

  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
  ],
  
  schemas: [NO_ERRORS_SCHEMA],
})

export class AppModule { }
