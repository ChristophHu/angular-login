import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalComponent } from './external.component';
import { RouterModule, Routes } from '@angular/router';
import { ExternalGuard } from './external.guard';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ExternalComponent, canActivate: [ExternalGuard],
    children: [
      {path: '', component: LoginComponent },
    ]
  }
]

@NgModule({
  declarations: [
    ExternalComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ExternalComponent,
    LoginComponent
  ]
})
export class ExternalModule { }
