import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports:[
    RouterTestingModule,
                HttpClientModule,
                FormsModule,
                ReactiveFormsModule
                ],
      declarations: [ EditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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