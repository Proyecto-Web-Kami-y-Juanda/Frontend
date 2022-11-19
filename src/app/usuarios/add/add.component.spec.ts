import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule, ReactiveFormsModule
      ],
      declarations: [ AddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   it('should create', () => {
      component.onSubmit()
    });

     it('should create', () =>
     {
         component.checkoutForm.value.inactivate="true"
         component.onSubmit()
      });

    it('should create', () =>
       {
           component.checkoutForm.value.inactivate="false"
           component.onSubmit()
        });


});