import { Injectable } from '@angular/core';
import { Terrain } from '../models/terrain.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  private baseUrl = 'http://localhost:8080/terrain/';


  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

    getAllTerrains(): Observable<Terrain[]> {
 return this.http.get<Terrain[]>(`${this.baseUrl}`);
    }
// Méthode pour obtenir l'URL sécurisée de l'image du terrain
   getTerrainImageUrl(terrain: Terrain): any {
    const imgSrc = 'data:image/jpeg;base64,' + terrain.image;
    return this.sanitizer.bypassSecurityTrustUrl(imgSrc);
  }

  // Récupérer les terrains par ID de partenaire
  getTerrainsByIdPartenaire(partenaireId: number): Observable<Terrain[]> {
    const url = `${this.baseUrl}?partenaireId=${partenaireId}`;
    return this.http.get<Terrain[]>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  saveTerrain(partenaireId: number, formData: FormData): Observable<Terrain> {
    return this.http.post<Terrain>(`${this.baseUrl}${partenaireId}`, formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Mettre à jour un terrain existant
  updateTerrain(id: number, formData: FormData): Observable<Terrain> {
    const url = `${this.baseUrl}${id}`;
    return this.http.put<Terrain>(url, formData)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteTerrain(id: number): Observable<string> {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<string>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Gérer les erreurs HTTP
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Une erreur s\'est produite';
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      errorMessage = error.error.message;
    } else {
      // Erreur côté serveur
      errorMessage = `Code d'erreur : ${error.status}, message : ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

