import { Injectable } from '@angular/core';
import { RestliClient, LIGetResponse, AuthClient } from 'linkedin-api-client';

@Injectable({
  providedIn: 'root'
})
export class LinkedinService {
  restliClient = new RestliClient();
  authClient = new AuthClient({ clientId: '78rnobs27v0cz1', clientSecret: 'HEQnXW7ZTCUB8k8u', redirectUrl: 'http://localhost:4200/' });

  constructor() { }

  readUserData(userAccessToken: string): Promise<void | LIGetResponse> {
    return this.authClient.exchangeAuthCodeForAccessToken(userAccessToken)
    .then(resp => {
      this.restliClient.get({
        resourcePath: '/me',
        accessToken: resp.access_token
      });
    });
  }
}
