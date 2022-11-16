import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    userName: '',
    password: '',
    inactivate: '',
    names: '',
    lastNames: '',
    date: '',
    position: ''
  });

  constructor(private reouter:Router, 
              private service:UsuariosService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    let userNameParam: string;
    let passwordParam: string;
    let inactivateParam: boolean;
    let namesParam: string;
    let lastNamesParam: string;
    let dateParam: string;
    let positionParam: string;

    inactivateParam = false;

    if(this.checkoutForm.value.inactivate == "true"){
      inactivateParam = true;
    }
    else if(this.checkoutForm.value.inactivate == "false"){
      inactivateParam = false;
    }

    userNameParam = ''+this.checkoutForm.value.userName;
    passwordParam = ''+this.checkoutForm.value.password;
    namesParam = ''+this.checkoutForm.value.names;
    lastNamesParam = ''+this.checkoutForm.value.lastNames;
    dateParam = ''+this.checkoutForm.value.date;
    positionParam = ''+this.checkoutForm.value.position;
    this.service.CreateUsuario(userNameParam, passwordParam, inactivateParam, namesParam, lastNamesParam, dateParam, positionParam).subscribe({
      next: () => {
        this.reouter.navigateByUrl('/usuarios');
      },
      error: (err) =>{
        alert("Error en crear usuario")
      }
    })
  }

}
