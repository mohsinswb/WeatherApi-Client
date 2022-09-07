import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tog'
})
export class TogPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
