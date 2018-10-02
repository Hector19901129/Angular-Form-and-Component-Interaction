import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private clientUrl = 'http://localhost:3000/clients';
  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.clientUrl);
  }
  searchCode(code: string): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.clientUrl}/?code=${code}`);
  }
  getUser(userId){
    return this.http.get('http://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts(){
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
  }
}
