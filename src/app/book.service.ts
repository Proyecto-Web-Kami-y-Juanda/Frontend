import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs"
import {Book} from './books/book';

@Injectable({
  providedIn: 'root'
})
export class BookService
{
  resultados = new BehaviorSubject <Array<Book>>([]);
  constructor(private http: HttpClient) { }

  searchAllBooks(){
          this.http.get<Book[]>("http://localhost:8090/books/all").subscribe(
              results => {
                  this.resultados.next(results)
              }
          );
      }

  searchByName(name: string){
    const params = new HttpParams()
          .set('name', name)
    this.http.get<Book[]>("http://localhost:8090/books/nam",{params:params}).subscribe(  results => this.resultados.next(results));
  }

  searchByEditorial(id : number): Observable<Book[]>{
   const params = new HttpParams()
         .set('editorialId', id)
  return this.http.get<Book[]>("http://localhost:8090/books/editorial",{params:params});
 }

 onResults(){
         return this.resultados.asObservable();
     }

}
