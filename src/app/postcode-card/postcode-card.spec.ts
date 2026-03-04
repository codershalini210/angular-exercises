import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcodeCard } from './postcode-card';

describe('PostcodeCard', () => {
  let component: PostcodeCard;
  let fixture: ComponentFixture<PostcodeCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostcodeCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostcodeCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
