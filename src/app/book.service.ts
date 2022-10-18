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

  private books = new BehaviorSubject <string>('espero');
  public customSearch = this.books.asObservable();

  constructor(private http: HttpClient) { }

  searchAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>("http://localhost:8090/books/all");
  }

  searchByName(name: string): Observable<Book[]>{
    const params = new HttpParams()
          .set('name', name)
   return this.http.get<Book[]>("http://localhost:8090/books/nam",{params:params});
  }

  searchByEditorial(id : number): Observable<Book[]>{
   const params = new HttpParams()
         .set('editorialId', id)
  return this.http.get<Book[]>("http://localhost:8090/books/editorial",{params:params});
 }


}
