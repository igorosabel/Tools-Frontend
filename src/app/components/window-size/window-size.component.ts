import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-window-size',
  templateUrl: './partials/window-size.component.html',
  styleUrls: ['./css/window-size.component.css']
})
export class WindowSizeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  
  back() {
    this.router.navigate(['/']);
  }

}