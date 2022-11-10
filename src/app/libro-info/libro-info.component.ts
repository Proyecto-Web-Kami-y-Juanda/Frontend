import { Component, OnInit,Input } from '@angular/core';
import { Book} from '../books/book'
import { BookService} from '../book.service'


@Component({
  selector: 'app-libro-info',
  templateUrl: './libro-info.component.html',
  styleUrls: ['./libro-info.component.css']
})
export class LibroInfoComponent implements OnInit
{


  @Input() idLibro: number =4;
  infoB : Book;

  constructor(private bookService: BookService) { }

  ngOnInit(): void
  {
    this.bookService.searchById(this.idLibro).subscribe(
    (data:Book)=>
      { this.infoB=data;
      }
    );
  }


}
