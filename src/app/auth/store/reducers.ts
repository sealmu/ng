import { Action, createReducer, on } from '@ngrx/store';
import { ApiStatus } from 'src/app/shared/types/apiStatuses.interface';
import { AuthStateInterface } from '../types/authState.interface';
import { registerAction } from './actions/register.actions';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  user: null,
  isLoggedIn: false,
  errors: null,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state, action): AuthStateInterface => {
      const {
        request: { data, status, errors },
      } = action;

      switch (status) {
        case ApiStatus.START:
          return {
            ...state,
            isSubmitting: true,
            user: null,
            isLoggedIn: null,
            errors: null,
          };
        case ApiStatus.SUCCESS:
          return {
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            user: data,
            errors: null,
          };
        case ApiStatus.FAILURE:
          return {
            ...state,
            isSubmitting: false,
            isLoggedIn: false,
            user: null,
            errors,
          };
      }
    }
  )
);

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action);
}
