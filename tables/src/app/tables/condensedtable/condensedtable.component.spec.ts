import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondensedtableComponent } from './condensedtable.component';

describe('CondensedtableComponent', () => {
  let component: CondensedtableComponent;
  let fixture: ComponentFixture<CondensedtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondensedtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondensedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
