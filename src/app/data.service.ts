import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs';
import { Attribute } from './attribute';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

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
  searchClient(client: string): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.clientUrl}/?name=${client}`);
  }
  getAttributes(): Observable<Attribute[]>{
    return this.http.get<Attribute[]>(this.attributeUrl);
  }
  getAttribute(id: number): Observable<Attribute>{
    return this.http.get<Attribute>(`${this.attributeUrl}/${id}`);
  }
  updateAttribute(attr: Attribute): Observable<any>{
    return this.http.put(`${this.attributeUrl}/${attr.id}`, attr, httpOptions);
  }
  addAttribute(attr: Attribute): Observable<any>{
    return this.http.post<Attribute>(this.attributeUrl, attr, httpOptions);
  }
  deleteAttribute(attr: Attribute | number): Observable<Attribute> {
    const id = typeof attr === 'number' ? attr : attr.id;
    const url = `${this.attributeUrl}/${id}`;

    return this.http.delete<Attribute>(url, httpOptions);

  } 
  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
  }
}
