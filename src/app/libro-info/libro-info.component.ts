import { Component, OnInit,Input } from '@angular/core';
import { Book} from '../books/book'
import { BookService} from '../book.service'


@Component({
  selector: 'app-libro-info',
  templateUrl: './libro-info.component.html',
  styleUrls: ['./libro-info.component.css']
})
export class LibroInfoComponent implements OnInit {

  @Input() idLibro: number;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
}

