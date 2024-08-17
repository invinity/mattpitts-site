import { Injectable } from '@angular/core';
import { RestliClient, LIGetResponse, AuthClient } from 'linkedin-api-client';

@Injectable({
  providedIn: 'root'
})
export class LinkedinService {
  restliClient = new RestliClient();
  authClient = new AuthClient({ clientId: 'xxxxx', clientSecret: 'xxxxxxx', redirectUrl: 'http://localhost:4200/' });

  constructor() { }

  readUserData(username: String): Promise<LIGetResponse> {
    return this.restliClient.get({
      resourcePath: '/me',
      accessToken: ''
    });
  }
}
