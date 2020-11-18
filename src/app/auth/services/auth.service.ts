import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from 'src/app/shared/types/user.interface';
import { environment } from 'src/environments/environment';
import { AuthResponceInterface } from '../types/authResponse.interface';
import { RegisterRequestIInterface } from '../types/registerRequest.interface';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestIInterface): Observable<UserInterface> {
    const url = `${environment.apiUrl}/users`;

    const { status, ...payload } = data;

    return this.http
      .post<AuthResponceInterface>(url, payload)
      .pipe(map((response: AuthResponceInterface) => response.user));
  }
}
