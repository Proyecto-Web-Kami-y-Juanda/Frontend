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
  books:Book[] = [];

  constructor(private router: Router, private service:BookService) { }

  ngOnInit(): void {
    this.service.searchAllBooks();
    this.service.onResults().subscribe(result =>{
      this.books = result
    });
  }

  nuevo(){
    this.router.navigate(["nuevoLibro"])
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
