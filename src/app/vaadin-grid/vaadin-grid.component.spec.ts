import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VaadinGridComponent } from './vaadin-grid.component';

describe('VaadinGridComponent', () => {
  let component: VaadinGridComponent;
  let fixture: ComponentFixture<VaadinGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaadinGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaadinGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
