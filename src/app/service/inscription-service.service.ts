import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private baseUrl!: string;

  constructor(private http: HttpClient) { }

  inscription(user: utilisateur, role: string): Observable<object> {
  console.log(user)
  if (role === 'client') {
         this.baseUrl = 'http://localhost:8080/client/';
       } else if (role === 'partenaire') {
        this.baseUrl = 'http://localhost:8080/partenaire/';
      }
  return this.http.post(this.baseUrl,user);
  }

  addUserRole(clientId: number, roleId: number): Observable<object> {
    const url = `${this.baseUrl}addutilisateurRole/${clientId}/${roleId}`;
    return this.http.post(url, null);
}
}