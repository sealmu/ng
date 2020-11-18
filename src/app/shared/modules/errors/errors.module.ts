import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorsComponent } from './components/errors.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorsComponent],
  exports: [ErrorsComponent],
})
export class ErrorsModule {}
