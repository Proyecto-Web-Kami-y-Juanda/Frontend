import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LibroInfoComponent } from './libro-info.component';
import { HttpClientModule } from '@angular/common/http';

describe('LibroInfoComponent', () => {
  let component: LibroInfoComponent;
  let fixture: ComponentFixture<LibroInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports:[
            FormsModule,
            ReactiveFormsModule,
            HttpClientModule
            ],
      declarations: [ LibroInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibroInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});