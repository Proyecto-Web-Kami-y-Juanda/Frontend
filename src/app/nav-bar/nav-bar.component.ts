import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book} from '../books/book'
import { FormBuilder } from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit
{


   checkoutForm = this.formBuilder.group({
        search:''
      });

  books: Book[] = [];
  constructor(private formBuilder: FormBuilder,
                            private bookService: BookService,
                             public router: Router ) { }

  ngOnInit(): void {

  }


   onSubmit(): void {
        let searchParam: string;
        searchParam = ''+this.checkoutForm.value.search;
        console.log('FormValue:', this.checkoutForm.value);
        console.log('Search:', this.checkoutForm.value.search);

        this.bookService.searchByName(searchParam).subscribe(
          (data: Book[])=>
          {  console.log(data);
             this.books = data;

          }
        );
        this.checkoutForm.reset();
    }

}
