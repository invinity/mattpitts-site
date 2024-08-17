import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedinService } from './service/linkedin.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Meet Matt Pitts';
  linkedInAuthUrl: string;

  constructor(private  linkedin: LinkedinService) {
    this.linkedInAuthUrl =this.linkedin.authClient.generateMemberAuthorizationUrl(['r_liteprofile'])
  }

  loadLinkedInProfile() {
  }
}
