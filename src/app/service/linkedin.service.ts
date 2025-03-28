import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface LinkedinService {
  retrieveProfileData(): Observable<Object>
}

export type LinkedinTimelineEntry = {
  Title: string,
  StartDate: string,
  EndDate: string,
  Description: string,
  hide: boolean
}

export type LinkedinEducation = LinkedinTimelineEntry & {
  Subtitle: string
}

export type LinkedinProject = LinkedinTimelineEntry & {
}

export type LinkedinPosition = LinkedinTimelineEntry & {
  Location: string
}

export type LinkedinExperience = {
  Company: string,
  CompanyImage: string,
  Positions: LinkedinPosition[]
}

export type LinkedinCertification = {
  Title: string,
  Institution: string,
  ImgUrl: string,
  IssuedOn: string,
  ExpiresOn: string,
}

export type LinkedinProfile = {
  GeneratedAt: string
  Name: string
  Headline: string
  Summary: string
  Experience: LinkedinExperience[]
  Education: LinkedinEducation[]
  Projects: LinkedinProject[]
  Certifications: LinkedinCertification[]
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
