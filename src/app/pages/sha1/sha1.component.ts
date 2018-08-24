import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sha1',
  templateUrl: './html/sha1.component.html',
  styleUrls: ['./css/sha1.component.css']
})
export class Sha1Component implements OnInit {
  text: string = '';

  constructor(private router: Router) { }

  ngOnInit() {}
}