import { TestBed } from '@angular/core/testing';
import { UsuariosService } from './usuarios.service';
import { HttpClientModule } from '@angular/common/http';

describe('UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[HttpClientModule]});
    service = TestBed.inject(UsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should be created', () => {
      service.CreateUsuario("nombre","contraseña",true,"x","obregon","09-05-2002","jefe")
    });

     it('buscar', () => {
          service.findByUserName("nombre")
        });

      it('update be created', () => {
          service.updateUser("nombre","contraseña",true,"x","obregon","09-05-2002","jefe")
        });

       it('delete be created', () => {
                 service.deleteUser("kamila")
               });

      it('delete be created', () => {
                service.onResults()
               });


});
