import { Component, OnInit, Input,Output} from '@angular/core';
import { Book} from './book'
import { Router } from '@angular/router'
import { BookService } from '../book.service'
import { FormBuilder } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component'
import { LibroInfoComponent} from '../libro-info/libro-info.component'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  @Input () books: Book[] = [];
  @Output() paraH: number;
  constructor(private formBuilder: FormBuilder,private bookService: BookService, public router: Router) { }


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

  enviarHijo(id :number)
  {

    this.router.navigate(['/infolibros']);
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

}
