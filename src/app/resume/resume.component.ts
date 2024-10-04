import { Component, Inject, inject, OnInit } from '@angular/core';
import { LINKEDIN_SERVICE, LinkedinService } from '../service/linkedin.service';
import { JsonPipe, NgFor } from '@angular/common';
import { DescriptionComponent } from "./widget/description/description.component";
import { MatIcon } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [JsonPipe, NgFor, DescriptionComponent, MatIcon, MatProgressBarModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  profile: any | undefined
  profileLoaded = false

  constructor(@Inject(LINKEDIN_SERVICE) private linkedin: LinkedinService) {
  }

  ngOnInit(): void {
    this.loadLinkedInProfile()
  }

  loadLinkedInProfile() {
    this.linkedin.retrieveProfileData().subscribe(data => {
      this.profile = data
      this.profileLoaded = true
    });
  }
}
