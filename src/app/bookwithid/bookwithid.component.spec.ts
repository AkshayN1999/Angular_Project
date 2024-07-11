import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookwithidComponent } from './bookwithid.component';

describe('BookwithidComponent', () => {
  let component: BookwithidComponent;
  let fixture: ComponentFixture<BookwithidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookwithidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookwithidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
