import { Pipe, PipeTransform } from '@angular/core';
import * as sha1 from 'js-sha1';

@Pipe({
  name: 'sha1'
})
export class Sha1Pipe implements PipeTransform {

  transform(str: string): any {
    return sha1(str);
  }

}
