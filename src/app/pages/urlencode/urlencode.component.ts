import { Component } from "@angular/core";
import { Utils } from "src/app/shared/utils.class";

@Component({
  selector: "app-urlencode",
  templateUrl: "./urlencode.component.html",
  styleUrls: ["./urlencode.component.scss"],
})
export class UrlencodeComponent {
  encodeOption: string = "UrlEncode";
  encodeText: string = "";
  encodeResult: string = "";

  constructor() {}

  changeText(): void {
    if (this.encodeOption === "UrlEncode") {
      this.encodeResult = Utils.urlencode(this.encodeText);
    }
    if (this.encodeOption === "UrlDecode") {
      this.encodeResult = Utils.urldecode(this.encodeText);
    }
  }
}
