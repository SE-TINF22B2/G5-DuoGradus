import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {

  /**
   * @param profiles Objects array of the profiles, which should be filtered
   * @param query   Parameter thats filters the profiles
   * @returns   Return the filtered profiles
   */
  
  transform(profiles: any[], query: string): any[] {           
    if (!profiles || !query) {   
      return profiles;                               
    }
    console.log(profiles); 
    return profiles.filter(profile => profile.name.toLowerCase().includes(query.toLowerCase()));        
  }

}
