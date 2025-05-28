import { Component, inject, OnInit, signal } from '@angular/core';
import { Familia } from '../familia';
import { FamiliaService } from '../familia.service';

@Component({
  selector: 'app-listado-familias',
  standalone: true,
  imports: [],
  templateUrl: './listado-familias.component.html',
  styleUrl: './listado-familias.component.css'
})
export class ListadoFamiliasComponent implements OnInit{

  private familiaService = inject(FamiliaService);
  public familias = signal<Familia[]>([]);
  public error = signal<string | null>(null);

  ngOnInit() {
    
    this.familiaService.getAll().subscribe({
      next: data => {
        this.familias.set(data);
        this.error.set(null);
      },
      error: err => {
        console.error(err);
        this.error.set('No se han podido cargar las familias');  
      }
    });
  }
}
