import { Component, computed, effect, inject, OnDestroy, OnInit, ResourceRef } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../oferta';
import { rxResource } from '@angular/core/rxjs-interop';
import { CronoEngineService } from '@tiruliki/cronoluxe';
import { POLLING_SPEED } from '../../../tokens/polling-speed.token';
import { HttpErrorResponse } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';

@Component({
  templateUrl: './lista-ofertas.component.html',
  imports: [DecimalPipe],
  styleUrl: './lista-ofertas.component.css'
})
export class ListaOfertasComponent implements OnInit, OnDestroy {

  private ofertaService = inject(OfertaService);
  private cronoEngine = inject(CronoEngineService);
  private pollingSpeed = inject(POLLING_SPEED);
  
  mensajeError = computed(() => {
    const err = this.ofertas.error() as HttpErrorResponse;
    return err.error.error;
  });

  ofertas: ResourceRef<Oferta[] | undefined> = rxResource({
    request: () => this.cronoEngine.totalSegundos(),
    loader: () => this.ofertaService.getAll()      
  });

  ngOnInit(): void {
    this.cronoEngine.setInervalTime(this.pollingSpeed);
    this.cronoEngine.start();
  }

  ngOnDestroy(): void {
    this.cronoEngine.reset();
  }
}
