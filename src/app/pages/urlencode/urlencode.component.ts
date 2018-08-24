import { Component } from '@angular/core';
import { UrlToolsService } from '../../services/url-tools.service';

@Component({
  selector: 'app-urlencode',
  templateUrl: './html/urlencode.component.html',
  styleUrls: ['./css/urlencode.component.css']
})
export class UrlencodeComponent {
  encodeOption: string = 'UrlEncode';
  encodeText: string = '';
  encodeResult: string = '';
  
  constructor(private tools: UrlToolsService) { }
  
  changeText() {
    if (this.encodeOption==='UrlEncode') {
      this.encodeResult = this.tools.urlencode( this.encodeText );
    }
    if (this.encodeOption==='UrlDecode') {
      this.encodeResult = this.tools.urldecode( this.encodeText );
    }
  }
}