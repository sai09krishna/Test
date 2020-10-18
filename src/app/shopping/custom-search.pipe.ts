import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSearch'
})
export class CustomSearchPipe implements PipeTransform {

  transform(values:any[], searchTerm: string): unknown {
    if(!values){
      return[];
    }
    if(!searchTerm){
      return values;
    }
    searchTerm = searchTerm.toLowerCase();
    return values.filter(value =>{
      return value.name.toLowerCase().includes(searchTerm);
    });
  }

}
