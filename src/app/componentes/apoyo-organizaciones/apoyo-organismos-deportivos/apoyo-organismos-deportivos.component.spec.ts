import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyoOrganismosDeportivosComponent } from './apoyo-organismos-deportivos.component';

describe('ApoyoOrganismosDeportivosComponent', () => {
  let component: ApoyoOrganismosDeportivosComponent;
  let fixture: ComponentFixture<ApoyoOrganismosDeportivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoyoOrganismosDeportivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyoOrganismosDeportivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
