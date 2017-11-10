import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverresponsiveComponent } from './hoverresponsive.component';

describe('HoverresponsiveComponent', () => {
  let component: HoverresponsiveComponent;
  let fixture: ComponentFixture<HoverresponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoverresponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverresponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
