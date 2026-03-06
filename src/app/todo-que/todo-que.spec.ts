import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoQUE } from './todo-que';

describe('TodoQUE', () => {
  let component: TodoQUE;
  let fixture: ComponentFixture<TodoQUE>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoQUE]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoQUE);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
