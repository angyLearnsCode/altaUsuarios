import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private http = inject(HttpClient);
  private baseUrl: string = 'https://peticiones.online/api/users';

  getAll(): any {
    return this.http.get<any>(this.baseUrl);
  }
}
