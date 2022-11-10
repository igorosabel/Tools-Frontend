import { Component } from "@angular/core";
import { ToolListItem } from "src/app/interfaces/interfaces";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {
  toolList: ToolListItem[] = [
    { url: "/sha-1", name: "SHA-1" },
    { url: "/crypt", name: "Cifrado" },
    { url: "/urlencode", name: "Url encode/decode" },
    { url: "/window-size", name: "Tamaño ventana" },
    { url: "/user-agent", name: "User Agent" },
  ];

  constructor() {}
}
