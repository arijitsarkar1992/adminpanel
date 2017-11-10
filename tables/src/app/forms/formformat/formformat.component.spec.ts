import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormformatComponent } from './formformat.component';

describe('FormformatComponent', () => {
  let component: FormformatComponent;
  let fixture: ComponentFixture<FormformatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormformatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
