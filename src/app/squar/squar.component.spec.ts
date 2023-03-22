import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarComponent } from './squar.component';

describe('SquarComponent', () => {
  let component: SquarComponent;
  let fixture: ComponentFixture<SquarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SquarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
