import { AfterContentInit, AfterViewInit, Component, Inject, inject, OnInit } from '@angular/core';
import { LINKEDIN_SERVICE, LinkedinService } from '../service/linkedin.service';
import { JsonPipe, NgFor } from '@angular/common';
import { DescriptionComponent } from "./widget/description/description.component";
import { MatIcon } from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBar, MatSnackBarContainer, MatSnackBarModule} from '@angular/material/snack-bar'

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [JsonPipe, NgFor, DescriptionComponent, MatIcon, MatProgressBarModule, MatSnackBarContainer],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements AfterContentInit {
  profile: any | undefined
  profileLoaded = false

  constructor(@Inject(LINKEDIN_SERVICE) private linkedin: LinkedinService, private snackBar: MatSnackBar) {
  }

  ngAfterContentInit(): void {
    this.loadLinkedInProfile()
    this.snackBar.open("Thanks for accessing my resume! The content here is rendered directly from my Linkedin profile information. Feel free to use your browser's print function to save a copy as a PDF for electronic distribution.", 'Dismiss');
  }

  loadLinkedInProfile() {
    this.linkedin.retrieveProfileData().subscribe(data => {
      this.profile = data
      this.profileLoaded = true
    });
  }
}
