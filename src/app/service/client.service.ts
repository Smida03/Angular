import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { utilisateur } from '../models/utilisateur.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:8080/client'; // Remplacez cette URL par l'API de votre backend
  
  constructor(private http: HttpClient) { }
  getClientById(id: number): Observable<utilisateur> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<utilisateur>(url);
  }

  updateClient(client: utilisateur): Observable<utilisateur> {
    const url = `${this.apiUrl}/${client.id}`;
    return this.http.put<utilisateur>(url, client);
  }
}
