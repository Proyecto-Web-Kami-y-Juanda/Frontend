import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { BooksComponent } from './books.component';
import { HttpClientModule} from '@angular/common/http';


describe('BooksComponent', () => {

  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports:[FormsModule,ReactiveFormsModule,HttpClientModule],
      declarations: [ BooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    component.ngOnChanges()
 });it('should create', () => {
  component.asignarId(1)
});
 
});
