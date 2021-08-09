import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gallery } from '../models/gallery';

const baseUrl = `${environment.apiUrl}/gallery/`;

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  check(): Observable<any> {
    return this.http.get(baseUrl, { responseType: 'text' });
  }
  adminAreaCheck(): Observable<any> {
    return this.http.get(baseUrl + 'admin', { responseType: 'text' });
  }

  getAll(): Observable<Gallery> {
    return this.http.get<Gallery>(baseUrl + '1');
  }
}
