import { Component, effect, inject, ResourceRef, ResourceStatus } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FamiliaService } from '../../features/familias/familia.service';
import { Familia } from '../../features/familias/familia';
import { JsonPipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-resource-demo',
  
  templateUrl: './resource-demo.component.html',
  styleUrl: './resource-demo.component.css'
})
export class ResourceDemoComponent {

  familiaService = inject(FamiliaService);

  familias: ResourceRef<Familia[] | undefined> = rxResource({
    loader: () => this.familiaService.getAll()
  });

  constructor(){

    effect(() => {

    const err = this.familias.error() as HttpErrorResponse;

    console.log("this.familias.error ---> " +   err.status);
    console.log("this.familias.error ---> " +   JSON.stringify(err.error));
    console.log("this.familias.isLoading ---> " + this.familias.isLoading());
    console.log("this.familias.status (number) ---> " + this.familias.status());
    console.log("this.familias.status (name) ---> " + ResourceStatus[this.familias.status()]);
    console.log("this.familias.value ---> " + this.familias.value());
    });

  }

}
