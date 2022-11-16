import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Book } from '../book';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    id: '',
    imageUrl: '',
    name: '',
    description: '',
    editorialId: '',
    fechaEdicion: '',
    cantidad: ''
  });

  id: any
  book!: Book

  constructor(private reouter:Router, 
              private service:BookService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.id = params['id'];
        this.service.findById(this.id).subscribe({
          next: (result) => {
            this.book = result;
          }
        })
      }
    })
  }

  onSubmit(): void{
    let idParam: string;
    let imageUrlParam: string;
    let nameParam: string;
    let descriptionParam: string;
    let editorialIdParam: string;
    let fechaEdicionParam: string;
    let cantidadParam: string;

    imageUrlParam = ''+this.checkoutForm.value.imageUrl;
    nameParam = ''+this.checkoutForm.value.name;
    descriptionParam = ''+this.checkoutForm.value.description;
    editorialIdParam = ''+this.checkoutForm.value.editorialId;
    fechaEdicionParam = ''+this.checkoutForm.value.fechaEdicion;
    cantidadParam = ''+this.checkoutForm.value.cantidad;

    this.service.updateBook(+this.id, imageUrlParam, nameParam, descriptionParam, +editorialIdParam, fechaEdicionParam, +cantidadParam).subscribe({
      next: () => {
        this.router.navigateByUrl('/usuarios');
      },
      error: (err) =>{
        alert("Error en actualizar usuario")
      }
    })
  }

}
