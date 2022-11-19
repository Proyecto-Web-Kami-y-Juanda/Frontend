import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
imports:[FormsModule,ReactiveFormsModule,HttpClientModule]

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditorialComponent } from './editorial/editorial.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModLibroComponent } from './mod-libro/mod-libro.component';
import { LibroInfoComponent } from './libro-info/libro-info.component';
import { AddComponent } from './usuarios/add/add.component';
import { EditComponent } from './usuarios/edit/edit.component';
import {UsuariosService}from './usuarios.service'
import { CommonModule } from '@angular/common';
import { BooksMenuComponent } from './books/books-menu/books-menu.component';
import { ListarComponent } from './books/listar/listar.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    EditorialComponent,
    UsuariosComponent,
    ModLibroComponent,
    LibroInfoComponent,
    AddComponent,
    EditComponent,
    BooksMenuComponent,
    ListarComponent,
    AddBookComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
