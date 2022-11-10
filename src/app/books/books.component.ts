import { Component, OnInit, Input} from '@angular/core';
import { Book} from './book'
import { BookService } from '../book.service'
import { FormBuilder } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @Input () books: Book[] = [];
  idLibro : number;
  constructor(private formBuilder: FormBuilder,private bookService: BookService) { }

     checkoutForm = this.formBuilder.group({
          search:''
        });


  ngOnInit(): void {
    this.bookService.searchAllBooks();
    this.bookService.onResults().subscribe(results=>{this.books=results});
  }

  ngOnChanges(): void
  {

  }

  searchBooksByEditorial(book: Book): Book[]{
    return this.books;
  }



      editorial(id: number): void
      {
                let searchParam: string;
                searchParam = ''+this.checkoutForm.value.search;
                console.log('FormValue:', this.checkoutForm.value);
                console.log('Search:', this.checkoutForm.value.search);
             // buscar por id editorial
            //  let id : number=+searchParam;
                  this.bookService.searchByEditorial(id).subscribe(
                             (data: Book[])=>
                              {  console.log(data);
                                 this.books =data;
                              }
                            );
      }

       asignarId(id_number:number): void
      {
        this.idLibro = id_number;
      }


}
