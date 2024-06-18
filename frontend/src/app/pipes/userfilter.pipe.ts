import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userfilter',
})
export class UserfilterPipe implements PipeTransform {
  /**
   * Filters an array of profiles based on a query string.
   * @param profiles - The array of profiles to filter.
   * @param query - The query string to filter the profiles by.
   * @returns An array of filtered profiles.
   */
  transform(profiles: any[], query: string): any[] {
    if (!profiles || !query) {
      return profiles;
    }
    console.log(profiles);
    return profiles.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase()),
    );
  }
}
