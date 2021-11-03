import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from '../../store/effect.registration';
import { authReduser } from '../../store/reduser.registration';

import { RegistrationComponent } from './page_registration/registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RouterModule } from '@angular/router';
import { DisplayRegistrationComponent } from './display-registration/display-registration.component';
import { WidgetStoreRegistrationComponent } from './widget-store-registration/widget-store-registration.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    DisplayRegistrationComponent,
    WidgetStoreRegistrationComponent,
  ],
  imports: [
    SharedModule,
    RegistrationRoutingModule,
    StoreModule.forFeature("auth", authReduser),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [
    RouterModule
  ]
})
export class RegistrationModule { }
