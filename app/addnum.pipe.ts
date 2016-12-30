import {Pipe ,  PipeTransform} from '@angular/core';

/*
 * Functionality : Raise the value by argument supplied
 * Takes an number argument which if not a number is taken as 0 and original value is returned. 
 * Usage:
 *   value | AddNum:toadd
 * Example:
 *   {{ 2 |  AddNum:10}}
 *   results to: 12
*/
@Pipe({name:'AddNum'})
export class AddNumPipe implements PipeTransform {
    transform( value : number ,  toadd: string): number {
    let par = parseFloat(toadd);
    
    if(isNaN(par)){
        console.log("returning 1 : "+value)
        return value;
    } else {
        console.log("returning 2 : "+(value+par));
        console.log("returning 3 : "+(isNaN(value)));
        return value + par;
    }
    
  }
}