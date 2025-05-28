import { Component, effect, inject, ResourceRef, ResourceStatus } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FamiliaService } from '../../features/familias/familia.service';
import { Familia } from '../../features/familias/familia';

@Component({
  selector: 'app-resource-demo',
  imports: [],
  templateUrl: './resource-demo.component.html',
  styleUrl: './resource-demo.component.css'
})
export class ResourceDemoComponent {

  familiaService = inject(FamiliaService);

  familias: ResourceRef<Familia[] | undefined> = rxResource({
    loader: () => this.familiaService.getAll()
  });

  eff = effect(() => {
    console.log("this.familias.isLoading ---> " + this.familias.isLoading());
    console.log("this.familias.status ---> " + ResourceStatus[this.familias.status()]);
    console.log("this.familias.value ---> " + this.familias.value());
  });

}
