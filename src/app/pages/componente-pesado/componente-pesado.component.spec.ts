import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePesadoComponent } from './componente-pesado.component';

describe('ComponentePesadoComponent', () => {
  let component: ComponentePesadoComponent;
  let fixture: ComponentFixture<ComponentePesadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentePesadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePesadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
