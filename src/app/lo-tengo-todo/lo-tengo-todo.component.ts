import { Component, inject, OnInit } from '@angular/core';
import { Foo } from '../lo-tengo-todo.service';
import { JsonPipe } from '@angular/common';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-lo-tengo-todo',
  imports: [JsonPipe],
  templateUrl: './lo-tengo-todo.component.html',
  styleUrl: './lo-tengo-todo.component.css'
})
export class LoTengoTodoComponent {

  foo = inject(Foo);

  productos = rxResource({
    loader: () => this.foo.productoService.getAll()
  });

  familias = rxResource({
    loader: () => this.foo.familiaService.getAll()
  });

  establecimientos = rxResource({
    loader: () => this.foo.getEstablecimientoService().getAll()
  });

}
