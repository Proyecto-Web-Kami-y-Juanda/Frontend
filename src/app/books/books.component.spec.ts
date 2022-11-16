import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
describe('BooksComponent', () =>
{
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
    imports:[
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
        ],
      declarations: [ BooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  }
  );
  it('Revisar lista vacia', () =>
  {
      expect(component.books).toEqual([]);
  });
  it('Editorial', () =>
  {
      component.editorial(0);
  });
  it('AsignarID', () =>
  {
      component.asignarId(0);
      expect(component.idLibro).toEqual(0);
  });

    it('iniciar', () =>
    {
        component.ngOnInit()
    });

});
