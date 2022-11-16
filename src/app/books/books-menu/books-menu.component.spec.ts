import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksMenuComponent } from './books-menu.component';

describe('BooksMenuComponent', () => {
  let component: BooksMenuComponent;
  let fixture: ComponentFixture<BooksMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
