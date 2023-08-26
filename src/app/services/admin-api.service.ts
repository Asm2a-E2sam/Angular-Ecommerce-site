import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iadmin } from '../Models/iadmin';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AdminAPIService {
  http = {};
  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  signUpAdmin(newAdmin: Iadmin): Observable<Iadmin> {
    return this.httpClient.post<Iadmin>(
      `${environment.BaseApiURL}/admins`,
      JSON.stringify(newAdmin),
      this.http
    );
  }

}
