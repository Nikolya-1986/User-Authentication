import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { NavComponent } from './shared/nav/components/nav/nav.component';
import { HomeComponent } from './shared/home/components/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { ModalComponent } from './shared/modal_window/components/modal/modal.component';
// import { appReducer } from './store/post/selector';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // StoreModule.forRoot(appReducer, {}),
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  entryComponents: [ModalComponent],//компоненты которые используются в приложении но их нельзя найти в шаблоне
  bootstrap: [AppComponent]
})
export class AppModule { }
