import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostlComponent } from './postl.component';

describe('PostlComponent', () => {
  let component: PostlComponent;
  let fixture: ComponentFixture<PostlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
