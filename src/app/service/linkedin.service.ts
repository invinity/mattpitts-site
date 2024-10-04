import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface LinkedinService {
  retrieveProfileData(): Observable<Object>
}

export const LINKEDIN_SERVICE = new InjectionToken<LinkedinService>('linkedin.service')

@Injectable({
  providedIn: 'root'
})
export class RealLinkedinService {
  constructor(@Inject("linkedInProfileServiceUrl") private baseUrl: string, private http: HttpClient) { }

  retrieveProfileData(): Observable<Object> {
    const fullUrl = this.baseUrl.concat("/api/linkedin/profile")
    return this.http.get(fullUrl)
  }
}
