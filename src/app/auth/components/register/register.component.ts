import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ApiStatus } from 'src/app/shared/types/apiStatuses.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';
import { AuthService } from '../../services/auth.service';
import { registerAction } from '../../store/actions/register.actions';
import { errorsSelector, isSubmittingSelector } from '../../store/selectors';
import { RegisterRequestIInterface } from '../../types/registerRequest.interface';

@Component({
  selector: 'med-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class registerComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  errors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private fbuilder: FormBuilder,
    private store: Store //private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.initValues();
  }

  initForm(): void {
    this.form = this.fbuilder.group({
      username: ['', Validators.required],
      email: '',
      password: '',
    });
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.errors$ = this.store.pipe(select(errorsSelector));
  }

  submit(): void {
    console.log(this.form.valid);
    console.log(this.form.value);

    const request: RegisterRequestIInterface = {
      user: this.form.value,
      status: ApiStatus.START,
    };

    this.store.dispatch(registerAction({ request }));

    // this.authService
    //   .register({ user: this.form.value })
    //   .subscribe((user: UserInterface) => {
    //     console.log(user);
    //   });
  }
}
