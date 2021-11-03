import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PostsService } from '../modules/posts/services/posts.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ModalDirective } from './modal_window/directive/modal.directive';
import { ModalComponent } from './modal_window/components/modal/modal.component';

const MODULES = [
  // Do NOT include UniversalModule, HttpModule, or JsonpModule here
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

const COMPONENTS = [
  ModalComponent
];

const DIRECTIVES = [
  ModalDirective,
];

const PIPES: never[] = [
  // put pipes here
];

const PROVIDERS = [
  PostsService,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...PIPES,
  ],
  providers: [
    ...PROVIDERS
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [PROVIDERS]
    };
  }
}
