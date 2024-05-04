import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  /*
  * This is a simple pipe that filters an array of objects based on a query string.
  */
  
  transform(profiles: any[], query: string): any[] {           
    if (!profiles || !query) {   
      return profiles;                               
    }
    console.log(profiles); 
    return profiles.filter(profile => profile.name.toLowerCase().includes(query.toLowerCase()));        
  }

}
