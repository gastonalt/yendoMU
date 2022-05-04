import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private httpClient: HttpClient) { }

  getBoliches(): Observable<any>{
    return this.httpClient.get('api/boliche/boliches');
  }
}
