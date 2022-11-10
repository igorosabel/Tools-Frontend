import { UserAgentInterface } from "src/app/interfaces/interfaces";
import { Utils } from "src/app/shared/utils.class";

export class UserAgent {
  constructor(
    public id: number = null,
    public device: string = null,
    public useragent: string = null,
    public date: string = null
  ) {}

  fromInterface(ua: UserAgentInterface): UserAgent {
    this.id = ua.id;
    this.device = Utils.urldecode(ua.device);
    this.useragent = Utils.urldecode(ua.useragent);
    this.date = Utils.urldecode(ua.date);

    return this;
  }

  toInterface(): UserAgentInterface {
    return {
      id: this.id,
      device: Utils.urlencode(this.device),
      useragent: Utils.urlencode(this.useragent),
      date: Utils.urlencode(this.date),
    };
  }
}
