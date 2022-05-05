import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  signup(persona: Persona): Observable<any>{
    return this.httpClient.post('api/auth/register', persona);
  }

  login(email: string, password: string){
    return this.httpClient.post('api/auth/login', {email, password});
  }

}
