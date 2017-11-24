import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urlencode',
  templateUrl: './partials/urlencode.component.html',
  styleUrls: ['./css/urlencode.component.css']
})
export class UrlencodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  
  back() {
    this.router.navigate(['/']);
  }

}