import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreDelPesadoComponent } from './padre-del-pesado.component';

describe('PadreDelPesadoComponent', () => {
  let component: PadreDelPesadoComponent;
  let fixture: ComponentFixture<PadreDelPesadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PadreDelPesadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreDelPesadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
