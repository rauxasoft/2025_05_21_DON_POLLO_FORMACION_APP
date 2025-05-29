import { Component, inject, OnDestroy, OnInit, ResourceRef } from '@angular/core';
import { OfertaService } from '../oferta.service';
import { Oferta } from '../oferta';
import { rxResource } from '@angular/core/rxjs-interop';
import { CronoEngineService } from '@tiruliki/cronoluxe';
import { POLLING_SPEED } from '../../../tokens/polling-speed.token';

@Component({
  templateUrl: './lista-ofertas.component.html',
  styleUrl: './lista-ofertas.component.css'
})
export class ListaOfertasComponent implements OnInit, OnDestroy {

  private ofertaService = inject(OfertaService);
  private cronoEngine = inject(CronoEngineService);
  private pollingSpeed = inject(POLLING_SPEED);

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
