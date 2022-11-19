import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
        imports:[HttpClientModule]}
    )
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
 it('should create', () => {
  service.findById(1)
});
it('should create', () => {
  service.searchByEditorial(1)
});it('should create', () => {
  service.CreateBook(12,"WWW.imagen.com","nombre","description",2,"12-02-2020",3)
});it('should create', () => {
  service.libros(1,1,"0",true)
});
it('should create', () => {
  service.updateBook(1,"www.imagen.com","ok","descrip",1,"12-02-20",1)
});
it('delete be created', () => {
  service.deleteBook(1)
 });

});
