import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedinService } from './service/linkedin.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mattpitts-site';
  linkedInAuthUrl: string;

  constructor(private  linkedin: LinkedinService) {
    this.linkedInAuthUrl =this.linkedin.authClient.generateMemberAuthorizationUrl(['r_liteprofile'])
  }

  loadLinkedInProfile() {
  }
}
