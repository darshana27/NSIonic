import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgotpwdPage } from './forgotpwd.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpwdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgotpwdPage]
})
export class ForgotpwdPageModule {}
