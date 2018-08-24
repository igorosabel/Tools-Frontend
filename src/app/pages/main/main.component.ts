import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './html/main.component.html',
  styleUrls: ['./css/main.component.css']
})
export class MainComponent {
  toolList = [
    {url: '/sha-1',       name: 'SHA-1'},
    {url: '/crypt',       name: 'Cifrado'},
    {url: '/urlencode',   name: 'Url encode/decode'},
    {url: '/window-size', name: 'Tamaño ventana'},
    {url: '/user-agent',  name: 'User Agent'}
  ];

  constructor() { }
}