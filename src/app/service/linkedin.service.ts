import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LinkedinService {
  constructor(@Inject("linkedInProfileServiceUrl") private baseUrl: string, private http: HttpClient) { }

  retrieveProfileData(): Observable<Object> {
    const fullUrl = this.baseUrl.concat("/api/linkedin/profile")
    return this.http.get(fullUrl)
  }
}
