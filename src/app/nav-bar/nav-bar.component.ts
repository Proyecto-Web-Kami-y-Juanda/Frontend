import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book} from '../books/book'
import { FormBuilder } from '@angular/forms';
import {BookService} from '../book.service';
import { NgForm }   from '@angular/forms';

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
  resultado: string = "";
  constructor(private formBuilder: FormBuilder,
                            private bookService: BookService,
                             public router: Router ) { }

  ngOnInit(): void {

  }

   onSubmit(searchForm: NgForm): void
   {
       this.bookService.searchByName(searchForm.value.filter);
    }

}
