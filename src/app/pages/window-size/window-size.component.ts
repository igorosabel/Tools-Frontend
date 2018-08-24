import { Component, OnInit, HostListener } from '@angular/core';

function _window() : any {
   return window;
}

@Component({
  selector: 'app-window-size',
  templateUrl: './html/window-size.component.html',
  styleUrls: ['./css/window-size.component.css']
})
export class WindowSizeComponent implements OnInit {
  sizeX: number = null;
  sizeY: number = null;

  constructor() { }

  ngOnInit() {
    const win = _window();
    this.sizeX = win.innerWidth;
    this.sizeY = win.innerHeight;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.sizeX = event.target.innerWidth;
    this.sizeY = event.target.innerHeight;
  }
}