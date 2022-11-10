import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sha1",
  templateUrl: "./sha1.component.html",
  styleUrls: ["./sha1.component.scss"],
})
export class Sha1Component implements OnInit {
  text: string = "";

  constructor() {}

  ngOnInit(): void {}
}
