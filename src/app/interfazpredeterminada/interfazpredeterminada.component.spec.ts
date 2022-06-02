import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazpredeterminadaComponent } from './interfazpredeterminada.component';

describe('InterfazpredeterminadaComponent', () => {
  let component: InterfazpredeterminadaComponent;
  let fixture: ComponentFixture<InterfazpredeterminadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfazpredeterminadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfazpredeterminadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
