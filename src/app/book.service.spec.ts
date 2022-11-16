import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('nombre', () => {
      service.searchByName("los")
    });

    it('buscar', () => {
         service.searchAllBooks()
       });

    it('find by id', () => {
         service.findById(1)
       });

     it('serach by edi', () => {
              service.searchByEditorial(1)
            });
     it('crear libro', () => {
              service.CreateBook(12,"www.imagen.com","prueba","descrip",1,"09-05-2002",5)
            });

      it('update libro', () => {
                   service.updateBook(12,"www.imagen.com","prueba","descrip",1,"09-05-2002",10)
                 });
      it('borrar libro', () => {
                             service.deleteBook(12)   });
       it(' libro', () => {
            service.onResults()});

});
