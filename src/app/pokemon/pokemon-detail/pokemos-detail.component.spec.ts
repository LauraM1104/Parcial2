/* tslint:disable:no-unused-variable */
import {ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PokemosDetailComponent } from './pokemos-detail.component';

describe('PokemosDetailComponent', () => {
  let component: PokemosDetailComponent;
  let fixture: ComponentFixture<PokemosDetailComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ PokemosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
