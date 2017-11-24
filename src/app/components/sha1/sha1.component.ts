import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sha1',
  templateUrl: './partials/sha1.component.html',
  styleUrls: ['./css/sha1.component.css']
})
export class Sha1Component implements OnInit {
  
  text = '';

  constructor(private router: Router) { }

  ngOnInit() {}
  
  back() {
    this.router.navigate(['/']);
  }

}