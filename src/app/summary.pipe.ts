import {Pipe, PipeTransform} from '@angular/core'; 

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limits: number) {
        if(!value)
        return null;

      let actualLimits = (limits) ? limits : 50;
      return value.substring(0,actualLimits) + '...';
    }


}