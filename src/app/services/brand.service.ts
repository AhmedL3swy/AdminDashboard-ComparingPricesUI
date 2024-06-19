import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl = 'http://localhost:5066/api/Brand';

  constructor(private http: HttpClient) { }

  getBrands(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}