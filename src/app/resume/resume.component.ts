import { Component, OnInit } from '@angular/core';
import { LinkedinService } from '../service/linkedin.service';
import { JsonPipe, NgFor } from '@angular/common';
import { DescriptionComponent } from "./widget/description/description.component";

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [JsonPipe, NgFor, DescriptionComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  profile: any | undefined

  constructor(private linkedin: LinkedinService) {
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
