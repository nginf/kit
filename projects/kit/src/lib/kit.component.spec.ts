import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ktComponent } from './kit.component';

describe('KitComponent', () => {
  let component: ktComponent;
  let fixture: ComponentFixture<ktComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ktComponent],
      providers: [provideExperimentalZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(ktComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
