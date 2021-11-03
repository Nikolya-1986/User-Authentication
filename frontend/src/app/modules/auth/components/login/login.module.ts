import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DisplayLoginComponent } from './display-login/display-login.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { WidgetStoreLoginComponent } from './widget-store-login/widget-store-login.component';


@NgModule({
  declarations: [
    DisplayLoginComponent,
    PageLoginComponent,
    WidgetStoreLoginComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule,
    // StoreModule.forFeature("auth", authReduser),
    // EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModule { }
