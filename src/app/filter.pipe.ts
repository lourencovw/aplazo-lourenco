import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any, search: string) {
    const filteredList = list?.filter((item: any) => item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) > -1)
    return filteredList?.length ? filteredList : list;
  }

}
