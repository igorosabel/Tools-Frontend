import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './partials/main.component.html',
  styleUrls: ['./css/main.component.css']
})
export class MainComponent implements OnInit {
  
  toolList = [
    {url: '/sha-1', name: 'SHA-1'},
    {url: '/crypt', name: 'Cifrado'},
    {url: '/urlencode', name: 'Url encode/decode'},
    {url: '/window-size', name: 'Tamaño ventana'},
    {url: '/user-agent', name: 'User Agent'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  goToTool(tool){
    this.router.navigate([tool.url]);
  }

}