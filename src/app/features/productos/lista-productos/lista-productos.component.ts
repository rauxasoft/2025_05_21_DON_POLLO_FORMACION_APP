import { Component, inject, signal } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  imports: [DatePipe],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  productoService = inject(ProductoService);
  public productos = signal<Producto[]>([]);
  public error = signal<string | null>(null);

  ngOnInit() {
    
    this.productoService.getAll().subscribe({
      next: data => {
        this.productos.set(data);
        this.error.set(null);
      },
      error: err => {
        console.error(err);
        this.error.set('No se han podido cargar los productos');  
      }
    });
  }

}
