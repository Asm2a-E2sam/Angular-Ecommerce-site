import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateCardNumber'
})
export class FormateCardNumberPipe implements PipeTransform {

  transform(value:string): string {
    let counter =1;
    let newValue='';
    for(let i of value){
      if(counter%4 == 0 && counter !=16){
        newValue +=i +" - ";
      }else{
        newValue +=i;
      }
      counter++;
    } 
    return newValue
  }

}
