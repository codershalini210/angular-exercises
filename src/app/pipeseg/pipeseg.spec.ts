import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipeseg } from './pipeseg';

describe('Pipeseg', () => {
  let component: Pipeseg;
  let fixture: ComponentFixture<Pipeseg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipeseg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipeseg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
