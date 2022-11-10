import { Pipe, PipeTransform } from "@angular/core";
import { SHA1 } from "src/app/shared/sha1.class";

@Pipe({
  name: "sha1",
})
export class Sha1Pipe implements PipeTransform {
  transform(str: string): string {
    return SHA1(str);
  }
}
