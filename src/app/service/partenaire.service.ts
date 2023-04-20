import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {
  private apiUrl = 'http://localhost:8080/partenaire'; // Remplacez cette URL par l'API de votre backend
  
  constructor(private http: HttpClient) { }
  getPartenaireById(id: number): Observable<utilisateur> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<utilisateur>(url);
  }

  updatePartenaire(partenaire: utilisateur): Observable<utilisateur> {
    const url = `${this.apiUrl}/${partenaire.id}`;
    return this.http.put<utilisateur>(url, partenaire);
  }
}
