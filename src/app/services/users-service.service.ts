import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IResponse } from '../interfaces/iresponse.interface';
import { lastValueFrom, Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {
  private http = inject(HttpClient);
  private baseUrl: string = 'https://peticiones.online/api/users';

  getAllObservable(): Observable<IResponse> {
    return this.http.get<IResponse>(this.baseUrl);
  }

  getById(id: number): Promise<IUser> {
    return lastValueFrom(this.http.get<IUser>(`${this.baseUrl}/${id}`));
  }
}
