import { createAction, props } from '@ngrx/store';
import { RegisterRequestIInterface } from '../../types/registerRequest.interface';
import { actionTypes } from '../actionTypes';

export const registerAction = createAction(
  actionTypes.REGISTER,
  //props<{ user: string; pass: string }>()
  props<{ request: RegisterRequestIInterface }>()
);
