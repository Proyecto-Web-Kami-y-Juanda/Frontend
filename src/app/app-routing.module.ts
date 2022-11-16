import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component'
import { LoginComponent } from './login/login.component'
import {UsuariosComponent} from './usuarios/usuarios.component'
import {LibroInfoComponent} from './libro-info/libro-info.component'
import { AddComponent } from './usuarios/add/add.component';
import { EditComponent } from './usuarios/edit/edit.component';
import { BooksMenuComponent } from './books/books-menu/books-menu.component';
import { ListarComponent } from './books/listar/listar.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';

const routes: Routes = [
                        { path: '', component: BooksComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'usuarios',component:UsuariosComponent},
                        { path: 'infolibros',component:LibroInfoComponent},
                        { path: 'add',component:AddComponent},
                        { path: 'edit/:userName',component:EditComponent},
                        { path: 'librosMenu',component:BooksMenuComponent},
                        { path: 'listaLibros',component:ListarComponent},
                        { path: 'nuevoLibro',component:AddBookComponent},
                        { path: 'editarLibro/:id',component:EditBookComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
