import { TestBed } from '@angular/core/testing';

import { EstablecimientoService } from './establecimiento.service';

describe('BorrameService', () => {
  let service: EstablecimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablecimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
