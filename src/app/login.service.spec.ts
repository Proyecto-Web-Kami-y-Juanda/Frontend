import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('login', () => {
      service.login("kmor4","123a")
    });

   it('token', () => {
       service.setToken("1233333")
     });

      it('getToken', () => {
          service.getToken()
        });
});