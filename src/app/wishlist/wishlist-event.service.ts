import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONSTANTS } from '../shared/constants/app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class WishlistEventService {
  constructor(private http: HttpClient) {}
  getWishlistEvents(user_id: number): Observable<any> {
    return this.http.post(
      APP_CONSTANTS.BACKEND_URL + 'wishlist',user_id);
  }
}
