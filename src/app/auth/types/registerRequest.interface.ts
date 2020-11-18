import { ApiStatus } from 'src/app/shared/types/apiStatuses.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';

export interface RegisterRequestIInterface {
  user: {
    email: string;
    password: string;
    username: string;
  };
  data?: UserInterface;
  errors?: BackendErrorsInterface;
  status: ApiStatus;
}
