import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descatalogado'
})
export class DescatalogadoPipe implements PipeTransform {

  transform(descatalogado: boolean): string {
    return descatalogado ? 'DESCATALOGADO' : '';
  }

}
