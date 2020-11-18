import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'med-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
})
export class ErrorsComponent implements OnInit {
  @Input('errors') errorsProp: BackendErrorsInterface;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.errorsProp).map(
      (errorName: string) => {
        const messages = this.errorsProp[errorName].join(', ');

        return `${name} ${messages}`;
      }
    );
  }
}
