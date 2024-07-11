import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagefirstComponent } from './pagefirst.component';

describe('PagefirstComponent', () => {
  let component: PagefirstComponent;
  let fixture: ComponentFixture<PagefirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagefirstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
