import { Component, inject, OnInit, signal } from '@angular/core';
import { Familia } from '../familia';
import { FamiliaService } from '../familia.service';

@Component({
  templateUrl: './listado-familias.component.html',
  styleUrl: './listado-familias.component.css'
})
export class ListadoFamiliasComponent implements OnInit{

  private familiaService = inject(FamiliaService);
  
  familias = signal<Familia[]>([]);
  error = signal<string | null>(null);

  // Aquí mantenemos el ejemplo con Signal pero sin xrResouce() 
  // Esta función todavía está en fase experimental en Angular19!

  ngOnInit(): void {
    
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
