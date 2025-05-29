import { Component, inject, signal } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { DescatalogadoPipe } from '../../../shared/pipes/descatalogado.pipe';

@Component({
  imports: [DatePipe, DescatalogadoPipe, DecimalPipe],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  private productoService = inject(ProductoService);
  productos = signal<Producto[]>([]);
  error = signal<string | null>(null);

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
