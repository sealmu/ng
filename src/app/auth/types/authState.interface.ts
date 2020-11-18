import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  user?: UserInterface;
  isLoggedIn: boolean | null;
  errors?: BackendErrorsInterface;
}
