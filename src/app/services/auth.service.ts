import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ChangeModel } from '../models/auth/change.model';
import { BaseApiService } from './base-api.service';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseApiService<any> {
  constructor(http: HttpClient) {
    super(http, 'api/SalesManager');
  }

  login(username: string, pwd: string) {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    return this.http.post<any>(`Token`,
        `grant_type=password&username=${username}&password=${pwd}`,
        httpOptions);
}

  changePassword = (params: ChangeModel) => {
    return this.http.post(`api/SalesManager/Admin/Account/ChangePassword`,params,);
  }
}
