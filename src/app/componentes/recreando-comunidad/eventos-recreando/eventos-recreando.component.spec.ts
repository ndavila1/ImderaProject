import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosRecreandoComponent } from './eventos-recreando.component';

describe('EventosRecreandoComponent', () => {
  let component: EventosRecreandoComponent;
  let fixture: ComponentFixture<EventosRecreandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosRecreandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosRecreandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
