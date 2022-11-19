import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './listar.component';

describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ ListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should create', () => {
       component.ngOnInit()
    });

    it('should create', () => {
      component.cargarLibros("0")
   });
   it('should create', () => {
    component.rewind()
 });
 it('should create', () => {
  component.setPage(1)
});
it('should create', () => {
  component.forward()
});it('should create', () => {
  component.setOrder("1")
});
it('should create', () => {
  component.ngOnInit()
});

});