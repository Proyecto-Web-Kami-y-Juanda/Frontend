import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Book } from '../book';
import { BookService } from 'src/app/book.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  //books:Book[] = [];

  books: Array<any>;
  totalPages: Array<number>;

  page = 0;
  size = 10;
  order = 'id';
  asc = true;

  isFirst = false;
  isLast = false;


  constructor(private router: Router, private service:BookService) { }

  ngOnInit(): void {
    this.cargarLibros("0");
  }

  cargarLibros(pagef:string) {
    this.service.libros(+pagef, this.size, this.order, this.asc).subscribe(
    data => {
    console.log(data);
    this.books = data.content;
    this.isFirst = data.first;
    this.isLast = data.last;
    this.totalPages = new Array(data.totalPages);
    },
    err => {
    console.log(err.error);
    }
    );
    }

  nuevo(){
    this.router.navigate(["nuevoLibro"])
  }

  rewind(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarLibros("0");
    }
  }

  setPage(page: number): void {
    this.page = page;
    this.cargarLibros("0");
  }

  forward(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarLibros("0");
    }
  }

  setOrder(order: string): void {
    this.order = order;
    this.cargarLibros("0")
  }

  delete(userName: number){
    this.service.deleteBook(userName).subscribe(
     result => {
       console.log(result)
       this.ngOnInit()
     }
    )
   }

}
