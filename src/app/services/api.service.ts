import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAgentResult } from '../interfaces/interfaces';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserAgents(): Observable<UserAgentResult> {
    return this.http.post<UserAgentResult>('https://tools.osumi.es/api/get_user_agents', {});
  }
}