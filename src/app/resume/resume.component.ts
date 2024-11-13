import { Component, Inject, OnInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LINKEDIN_SERVICE, LinkedinService } from '../service/linkedin.service';
import { ElegantComponent } from './template/elegant/elegant.component';
import { TimelineComponent } from "./template/timeline/timeline.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ElegantComponent, MatProgressBarModule, TimelineComponent, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  profile: any | undefined
  profileLoaded = false
  selectedSpecialization: string | undefined

  constructor(@Inject(LINKEDIN_SERVICE) private linkedin: LinkedinService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadLinkedInProfile()
  }


  loadLinkedInProfile() {
    this.linkedin.retrieveProfileData().subscribe(data => {
      this.profile = data
      this.profileLoaded = true
      this.snackBar.open("Thanks for accessing my resume! The content here is rendered directly from my Linkedin profile information. Feel free to use your browser's print function to save a copy as a PDF for electronic distribution.", 'Dismiss', { duration: 30000 });
    });
  }

  print() {
    window.print()
  }
}
