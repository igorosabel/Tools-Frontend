import { Pipe, PipeTransform } from '@angular/core';
import { UrlToolsService } from '../services/url-tools.service';

@Pipe({
  name: 'urldecode'
})
export class UrldecodePipe implements PipeTransform {
	
  constructor(private tools: UrlToolsService) { }

  transform(str: string): string {
    return this.tools.urldecode(str);
  }
  
}