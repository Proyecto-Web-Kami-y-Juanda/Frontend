import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/book.service';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    id: '',
    imageUrl: '',
    name: '',
    description: '',
    editorialId: '',
    fechaEdicion: '',
    cantidad: ''
  });

  constructor(private reouter:Router, 
              private service:BookService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    let idParam: string;
    let imageUrlParam: string;
    let nameParam: string;
    let descriptionParam: string;
    let editorialIdParam: string;
    let fechaEdicionParam: string;
    let cantidadParam: string;

    idParam = ''+this.checkoutForm.value.id;
    imageUrlParam = ''+this.checkoutForm.value.imageUrl;
    nameParam = ''+this.checkoutForm.value.name;
    descriptionParam = ''+this.checkoutForm.value.description;
    editorialIdParam = ''+this.checkoutForm.value.editorialId;
    fechaEdicionParam = ''+this.checkoutForm.value.fechaEdicion;
    cantidadParam = ''+this.checkoutForm.value.cantidad;
    this.service.CreateBook(+idParam, imageUrlParam, nameParam, descriptionParam, +editorialIdParam, fechaEdicionParam, +cantidadParam).subscribe({
      next: () => {
        this.reouter.navigateByUrl('/listaLibros');
      },
      error: (err) =>{
        alert("Error en crear usuario")
      }
    })
  }

}
