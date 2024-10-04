import { Component, Inject, inject, OnInit } from '@angular/core';
import { LINKEDIN_SERVICE, LinkedinService, RealLinkedinService } from '../service/linkedin.service';
import { JsonPipe, NgFor } from '@angular/common';
import { DescriptionComponent } from "./widget/description/description.component";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [JsonPipe, NgFor, DescriptionComponent, MatIcon],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  profile: any | undefined

  constructor(@Inject(LINKEDIN_SERVICE) private linkedin: LinkedinService) {
  }

  ngOnInit(): void {
    this.loadLinkedInProfile()
  }

  loadLinkedInProfile() {
    this.linkedin.retrieveProfileData().subscribe(data => {
      this.profile = data;
    });
  }
}
