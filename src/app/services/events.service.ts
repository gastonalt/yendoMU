import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEventos(): Observable<Evento[]>{
    return this.http.get<Evento[]>('api/evento/getEventosFrontEnd');
  }

  getEventosByBoliche(bolicheId: number): Observable<Evento[]>{
    return this.http.get<Evento[]>('api/evento/getEventosFrontEnd/' + bolicheId);
  }

  buscarEventos(criteria: string): Observable<Evento[]>{
    return this.http.get<Evento[]>('api/evento/search/' + criteria);
  }
}
