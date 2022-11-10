import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserAgentResult } from "src/app/interfaces/interfaces";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getUserAgents(): Observable<UserAgentResult> {
    return this.http.post<UserAgentResult>(
      "https://tools.osumi.es/api/get_user_agents",
      {}
    );
  }
}
