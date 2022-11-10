import { Injectable } from "@angular/core";
import { UserAgentInterface } from "src/app/interfaces/interfaces";
import { UserAgent } from "src/app/model/user-agent.model";

@Injectable()
export class ClassMapperService {
  constructor() {}

  getUserAgent(ua: UserAgentInterface): UserAgent {
    return new UserAgent().fromInterface(ua);
  }

  getUserAgents(uas: UserAgentInterface[]): UserAgent[] {
    return uas.map((ua: UserAgentInterface): UserAgent => {
      return this.getUserAgent(ua);
    });
  }
}
