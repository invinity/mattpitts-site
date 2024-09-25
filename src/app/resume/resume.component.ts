import { Component } from '@angular/core';
import { LinkedinService } from '../service/linkedin.service';
import { RestliEntity } from 'linkedin-api-client';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {
  linkedInAuthUrl: string;
  userdata: RestliEntity | undefined;

  constructor(private linkedin: LinkedinService) {
    this.linkedInAuthUrl = this.linkedin.authClient.generateMemberAuthorizationUrl(['openid', 'profile'])
  }

  loadLinkedInProfile() {
    this.linkedin.readUserData('AQSXHlEgwI1u6A99cFFd-90DTotB1p09JKu2awLV8br-66DyUQDRsL9NGf43KsPJusIziYMdiTIlwj6tQVQxE4c6JPp_GErR_MfRrfTRnHAb8Xag6B1LoR9BiAwK5_yorF9sHQTxjPZV-Q205i1Q69X-6Mu7pxI2mv5PeDP56y9wbphexYpE9qjtQcUrrk12o-8kKszIdUKT0uFe0Eo').then(data => {
      alert(data);
    });
  }
}
