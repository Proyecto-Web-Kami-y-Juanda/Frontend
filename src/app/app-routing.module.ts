import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component'
import { LoginComponent } from './login/login.component'
import {UsuariosComponent} from './usuarios/usuarios.component'
import {LibroInfoComponent} from './libro-info/libro-info.component'

const routes: Routes = [
                        { path: '', component: BooksComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'usuarios',component:UsuariosComponent},
                        { path: 'infolibros',component:LibroInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
