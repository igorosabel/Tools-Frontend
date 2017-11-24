import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypt',
  templateUrl: './partials/crypt.component.html',
  styleUrls: ['./css/crypt.component.css']
})
export class CryptComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  
  back() {
    this.router.navigate(['/']);
  }

}