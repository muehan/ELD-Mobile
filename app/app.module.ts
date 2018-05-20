// libraries
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import firebase = require('nativescript-plugin-firebase');

firebase
  .init()
  .then(() => console.log('firebase initialised'))
  .catch(error => console.error(`Error: ${error}`));

// components
import { AppComponent } from "./app.component";
import {
  ELDLoginComponent,
  ELDInfoComponent,
  ELDMenuBarComponent,
} from './core/components';

import {
  ELDDetailsComponent,
  ELDBoulderRoutesComponent
} from './routes/components';
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
    ELDMenuBarComponent,
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
    StoreModule.forRoot({ routes: routesReducer }),
    EffectsModule.forRoot([RoutesEffects]),
    StoreDevtoolsModule.instrument(),
  ],

  providers: [
    RoutesService,
  ],

  schemas: [NO_ERRORS_SCHEMA],
})

export class AppModule { }
