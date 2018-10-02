import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs';
import { Attribute } from './attribute';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private clientUrl = 'http://localhost:3000/clients';
  private attributeUrl = 'http://localhost:3000/attributes';
  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.clientUrl);
  }
  searchCode(code: string): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.clientUrl}/?code=${code}`);
  }
  getAttributes(): Observable<Attribute[]>{
    return this.http.get<Attribute[]>(this.attributeUrl);
  }
  getAttribute(id: number): Observable<Attribute>{
    return this.http.get<Attribute>(`${this.attributeUrl}/?=${id}`);
  }
  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
  }
}
