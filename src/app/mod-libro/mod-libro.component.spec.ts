import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModLibroComponent } from './mod-libro.component';

describe('ModLibroComponent', () => {
  let component: ModLibroComponent;
  let fixture: ComponentFixture<ModLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
