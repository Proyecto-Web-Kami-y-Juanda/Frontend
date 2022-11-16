import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs"
import {Book} from './books/book';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BookService
{
  resultados = new BehaviorSubject <Array<Book>>([]);
  constructor(private http: HttpClient, private loginService: LoginService) { }

  searchAllBooks(){
          this.http.get<Book[]>("http://localhost:8090/books/all").subscribe(
              results => {
                  this.resultados.next(results)
              }
          );
      }

  searchByName(name: string)
  {
    const params = new HttpParams()
          .set('name', name)
    this.http.get<Book[]>("http://localhost:8090/books/nam",{params:params}).subscribe(  results => this.resultados.next(results));
  }

  findById(id: number):Observable<any>{
    return this.http.get<Book>("http://localhost:8090/find/"+ id, {headers: {
      "Authorization":this.loginService.getToken()
    }})
  }

  searchByEditorial(id : number): Observable<Book[]>{
   const params = new HttpParams()
         .set('editorialId', id)
  return this.http.get<Book[]>("http://localhost:8090/books/editorial",{params:params});
 }

 CreateBook(idParam: number, imageUrlParam: string, nameParam: string, descriptionParam: string, editorialIdParam:number, fechaEdicionParam: string, cantidadParam:number){
  return this.http.post("http://localhost:8090/book", {
    id:idParam,
    imageUrl:imageUrlParam,
    name:nameParam,
    description:descriptionParam,
    editorialId:editorialIdParam,
    fechaEdicion:fechaEdicionParam,
    cantidad:cantidadParam
  },
  {headers:{
    "Authorization":this.loginService.getToken()
  }})
}

updateBook(idParam: number, imageUrlParam: string, nameParam: string, descriptionParam: string, editorialIdParam:number, fechaEdicionParam: string, cantidadParam:number){
  console.log(idParam)
  return this.http.put("http://localhost:8090/book/"+ idParam, {
    id:idParam,
    imageUrl:imageUrlParam,
    name:nameParam,
    description:descriptionParam,
    editorialId:editorialIdParam,
    fechaEdicion:fechaEdicionParam,
    cantidad:cantidadParam
  },
  {
    headers: {
      "Authorization":this.loginService.getToken()
    }
  })
}

 deleteBook(id: number):Observable<Book>{
  return this.http.delete<Book>("http://localhost:8090/book/" + id, {headers: {
    "Authorization":this.loginService.getToken()
  }})
}

 onResults(){
         return this.resultados.asObservable();
     }

}
