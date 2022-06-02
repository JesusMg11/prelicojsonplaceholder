import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazconsumoComponent } from './interfazconsumo.component';

describe('InterfazconsumoComponent', () => {
  let component: InterfazconsumoComponent;
  let fixture: ComponentFixture<InterfazconsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfazconsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazconsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
