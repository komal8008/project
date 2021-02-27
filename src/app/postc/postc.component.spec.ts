import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcComponent } from './postc.component';

describe('PostcComponent', () => {
  let component: PostcComponent;
  let fixture: ComponentFixture<PostcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
