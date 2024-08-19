import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LinkedinService } from './service/linkedin.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Meet Matt Pitts';
  linkedInAuthUrl: string;

  constructor(private linkedin: LinkedinService) {
    this.linkedInAuthUrl = this.linkedin.authClient.generateMemberAuthorizationUrl(['r_liteprofile'])
  }

  loadLinkedInProfile() {
  }
}
