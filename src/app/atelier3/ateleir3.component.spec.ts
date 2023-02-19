import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ateleir3Component } from './ateleir3.component';

describe('Ateleir3Component', () => {
  let component: Ateleir3Component;
  let fixture: ComponentFixture<Ateleir3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ateleir3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ateleir3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
