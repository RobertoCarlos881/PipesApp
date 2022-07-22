import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(valor: string, enMayusculas: boolean = true): string {
        // if (enMayusculas === true) {
        //     return valor.toUpperCase();
        // } else {
        //     return valor.toLowerCase();
        // } 
        return ( enMayusculas ) ? valor.toUpperCase() : valor.toLowerCase();
    }
}