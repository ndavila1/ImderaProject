import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApoyosEconomicosComponent } from './apoyos-economicos.component';

describe('ApoyosEconomicosComponent', () => {
  let component: ApoyosEconomicosComponent;
  let fixture: ComponentFixture<ApoyosEconomicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoyosEconomicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApoyosEconomicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
