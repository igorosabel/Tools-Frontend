import { Component, HostListener, OnInit } from "@angular/core";

function _window(): any {
  return window;
}

@Component({
  selector: "app-window-size",
  templateUrl: "./window-size.component.html",
  styleUrls: ["./window-size.component.scss"],
})
export class WindowSizeComponent implements OnInit {
  sizeX: number = null;
  sizeY: number = null;

  constructor() {}

  ngOnInit(): void {
    const win = _window();
    this.sizeX = win.innerWidth;
    this.sizeY = win.innerHeight;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event): void {
    this.sizeX = event.target.innerWidth;
    this.sizeY = event.target.innerHeight;
  }
}
