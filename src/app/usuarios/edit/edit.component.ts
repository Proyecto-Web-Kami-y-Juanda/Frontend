import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { UsuariosService } from 'src/app/usuarios.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    password: '',
    inactivate: '',
    names: '',
    lastNames: '',
    date: '',
    position: ''
  });

  user_name: any
  usuario!: Usuario

  constructor(private formBuilder: FormBuilder,
              private UsuarioService: UsuariosService,
              private route: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.user_name = params['userName'];
        this.UsuarioService.findByUserName(this.user_name).subscribe({
          next: (result) => {
            this.usuario = result;
          }
        })
      }
    })
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

    passwordParam = ''+this.checkoutForm.value.password;
    namesParam = ''+this.checkoutForm.value.names;
    lastNamesParam = ''+this.checkoutForm.value.lastNames;
    dateParam = ''+this.checkoutForm.value.date;
    positionParam = ''+this.checkoutForm.value.position;

    this.UsuarioService.updateUser(this.user_name, passwordParam, inactivateParam, namesParam, lastNamesParam, dateParam, positionParam).subscribe({
      next: () => {
        this.router.navigateByUrl('/usuarios');
      },
      error: (err) =>{
        alert("Error en actualizar usuario")
      }
    })
  }

}
