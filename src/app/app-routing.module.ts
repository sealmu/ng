import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { registerComponent } from './auth/components/register/register.component';

const routes: Routes = [
  // {
  //   path: 'register',
  //   component: registerComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
