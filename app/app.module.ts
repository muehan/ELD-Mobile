// libraries
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

// components
import { AppComponent } from "./app.component";
import { ELDBoulderRoutesComponent } from "./core/boulder-routes/boulder-routes.component";
import { ELDLoginComponent } from './core/login/login.component';
import { ELDInfoComponent } from "./core/info";
import { ELDDetailsComponent } from './core/details';

// files
import { routes } from "./app.routing";

// store
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { routesReducer } from "./store/routes/reducers";
import { RoutesEffects } from "./store/routes/effects/routes.effects";

// services
import { RoutesService } from "./servcies";

@NgModule({
  declarations: [
    AppComponent,
    ELDBoulderRoutesComponent,
    ELDLoginComponent,
    ELDInfoComponent,
    ELDDetailsComponent,
  ],

  bootstrap: [AppComponent],

  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    StoreModule.forRoot({routes: routesReducer}),
    EffectsModule.forRoot([RoutesEffects]),
    StoreDevtoolsModule.instrument(),
  ],

  providers: [
    RoutesService,
  ],
  
  schemas: [NO_ERRORS_SCHEMA],
})

export class AppModule { }
