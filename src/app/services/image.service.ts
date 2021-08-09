import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../models/image';

const baseUrl = `${environment.apiUrl}/image/`;

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { } 

  create(form: any): Observable<any> {
    return this.http.post(baseUrl, {
      title: form.title,
      url: form.url
    });
  }

  findAll(): Observable<Image[]> {
    return this.http.get<Image[]>(baseUrl);
  }

  findById(id: string): Observable<Image> {
    return this.http.get<Image>(baseUrl + id)
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(baseUrl + id, {
      title: data.title,
      url: data.url
    })
  } 

  delete(id: string): Observable<any> {
    return this.http.delete( baseUrl + id);
  }
  
}
