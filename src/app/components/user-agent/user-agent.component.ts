import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-agent',
  templateUrl: './partials/user-agent.component.html',
  styleUrls: ['./css/user-agent.component.css']
})
export class UserAgentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  
  back() {
    this.router.navigate(['/']);
  }

}