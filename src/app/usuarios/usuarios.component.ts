import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Usuario } from '../Modelo/Usuario';
import {UsuariosService}from '../usuarios.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit {

  usuarios:Usuario[];
  constructor (private router: Router, private service:UsuariosService) {}

  //constructor() { }

  //mostrar lista de usuarios
  ngOnInit(): void {
    this.service.getUsuarios();
    this.service.onResults().subscribe(result =>{
      this.usuarios = result
    });
  }

  editar(){
    this.router.navigate(["edit"])
  }

  nuevo(){
    this.router.navigate(["add"])
  }

  delete(userName: String){
   this.service.deleteUser(userName).subscribe(
    result => {
      console.log(result)
      this.ngOnInit()
    }
   )
  }

}
