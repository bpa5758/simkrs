import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ResponseApiInterface } from './interface/response.api.interface';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  http = inject(HttpClient);

  getAbout(): Observable<ResponseApiInterface> {
    const url = environment.apiUrl + '/about';
    return this.http.get<ResponseApiInterface>(url);
  }
}
