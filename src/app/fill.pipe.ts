import { Pipe, PipeTransform } from '@angular/core';
import { employeed } from './rightcontent/main';

@Pipe({
  name: 'search1'
})
export class fillPipe implements PipeTransform {

  transform(Linda_May: employeed[], name: string ) {
    if (Linda_May.length ===0 || name === ''){
      return Linda_May;
    } else{
      return Linda_May.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase())!== -1);
    }
    
  }

}