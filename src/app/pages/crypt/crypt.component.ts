import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypt',
  templateUrl: './html/crypt.component.html',
  styleUrls: ['./css/crypt.component.css']
})
export class CryptComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    /*window.crypto.subtle.generateKey(
      {
        name: "AES-CBC",
        length: 256, //can be  128, 192, or 256
      },
      false, //whether the key is extractable (i.e. can be used in exportKey)
      ["encrypt", "decrypt"] //can be "encrypt", "decrypt", "wrapKey", or "unwrapKey"
    )
    .then(function(key){
      //returns a key object
      console.log(key);
    })
    .catch(function(err){
      console.error(err);
    });*/
  }
}