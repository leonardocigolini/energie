import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillIfEmpty'
})
export class FillIfEmptyPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    const fill_value = args.length > 0 ? args[0] : "_";
    return value != "" ? value : fill_value;
  }

}
