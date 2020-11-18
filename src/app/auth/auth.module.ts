// import { CommonModule } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorsModule } from '../shared/modules/errors/errors.module';
import { PersistanceService } from '../shared/services/persistance.service';
import { registerComponent } from './components/register/register.component';
import { RegisterEffect } from './effects/register.effect';
import { AuthService } from './services/auth.service';
import { reducers } from './store/reducers';

const routes: Routes = [
  {
    path: 'register',
    component: registerComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    ErrorsModule,
  ],
  declarations: [registerComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
