import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Usuario } from './Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  results = new BehaviorSubject <Array<Usuario>>([]);
  constructor(private http:HttpClient,
    private loginService: LoginService) {
  }
  url = 'http://localhost:8091/all'

  getUsuarios()
  {
    this.http.get<Usuario[]>(this.url,{
      headers:{
        "Authorization":this.loginService.getToken()
      }
    }).subscribe(results =>{
      this.results.next(results)
    });
  }

  CreateUsuario(userNameParam:string, passwordParam:string, inactivateParam:boolean, namesParam:string, lastNamesParam:string, dateParam:string, position:string){
    return this.http.post("http://localhost:8091/users", {
      userName:userNameParam,
      password:passwordParam,
      inactivate:inactivateParam,
      names:namesParam,
      lastNames:lastNamesParam,
      date:dateParam,
      position:position
    },
    {headers:{
      "Authorization":this.loginService.getToken()
    }})
  }

  findByUserName(user_name: string):Observable<any>{
    return this.http.get<Usuario>("http://localhost:8091/mostrarPN/"+ user_name, {
      headers:{
        "Authorization":this.loginService.getToken()
      }
    })
  }

  updateUser(userNameParam:string, passwordParam:string, inactivateParam:boolean, namesParam:string, lastNamesParam:string, dateParam:string, position:string){
    console.log(userNameParam)
    return this.http.put("http://localhost:8091/users/"+ userNameParam, {
      userName:userNameParam,
      password:passwordParam,
      inactivate:inactivateParam,
      names:namesParam,
      lastNames:lastNamesParam,
      date:dateParam,
      position:position
    },
    {
      headers: {
        "Authorization":this.loginService.getToken()
      }
    })
  }

  deleteUser(userName: String):Observable<Usuario>{
    return this.http.delete<Usuario>("http://localhost:8091/users/" + userName, {headers: {
      "Authorization":this.loginService.getToken()
    }})
  }

  onResults(){
    return this.results.asObservable();
  }
}
