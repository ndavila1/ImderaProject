import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosActividadFisicaComponent } from './puntos-actividad-fisica.component';

describe('PuntosActividadFisicaComponent', () => {
  let component: PuntosActividadFisicaComponent;
  let fixture: ComponentFixture<PuntosActividadFisicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosActividadFisicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosActividadFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
