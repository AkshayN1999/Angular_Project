import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookviewallComponent } from './bookviewall.component';

describe('BookviewallComponent', () => {
  let component: BookviewallComponent;
  let fixture: ComponentFixture<BookviewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookviewallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
