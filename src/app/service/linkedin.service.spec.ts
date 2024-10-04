import { TestBed } from '@angular/core/testing';

import { LINKEDIN_SERVICE, LinkedinService, RealLinkedinService } from './linkedin.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('LinkedinService', () => {
  let service: LinkedinService
  let httpTesting: HttpTestingController

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LINKEDIN_SERVICE, useClass: RealLinkedinService},
        {
          provide: 'linkedInProfileServiceUrl',
          useValue: 'http://thisisnotarealsite'
        },
        provideHttpClient(),
        provideHttpClientTesting()]
    })
    service = TestBed.inject(LINKEDIN_SERVICE)
    httpTesting = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy()
  });

  it('should call the api', async () => {
    const dataPromise = firstValueFrom(service.retrieveProfileData())
    const req = httpTesting.expectOne({
      method: 'GET',
      url: 'http://thisisnotarealsite/api/linkedin/profile',
    }, 'Request to load the linkedin profile')
    req.flush({some: 'data'});
    expect(await dataPromise).toEqual({some: 'data'})
    httpTesting.verify()
  });
});
