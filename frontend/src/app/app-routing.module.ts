import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/components/home/home.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "posts", loadChildren: () => import("./modules/posts/posts.module").then(module => module.PostsModule)
  },
  {
    path: "registration", loadChildren: () => import("./modules/auth/components/registration/registration.module").then(module => module.RegistrationModule)
  },
  {
    path: "login", loadChildren: () => import("./modules/auth/components/login/login.module").then(module => module.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
