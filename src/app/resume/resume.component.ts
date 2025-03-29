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
import { JsonPipe } from '@angular/common';
import { SixfigureComponent } from './template/sixfigure/sixfigure.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [ElegantComponent, MatProgressBarModule, TimelineComponent, MatButtonModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule, JsonPipe, SixfigureComponent ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  profile: any | undefined
  profileLoaded = false
  selectedSpecialization: string | undefined

  skills = [
    "Java",
    "Scala",
    "CI/CD",
    "Software Design & Testing",
    "Spring",
    // "DNS/HTTP/SSL/TLS",
    "Apigee",
    "SDLC tools and practices",
    "Github",
    "Code Security/SAST/SCA",
    "GCP",
    "Jenkins",
    "Team lead/coach",
    // "SSH/SFTP/SCP",
    // "Capacity Planning",
    "Harness",
    "Full-stack development",
    "SOA & REST",
    "RDBMS & SQL",
    "Python",
    "Crypto libraries/algorithms",
    "Angular",
    // "TCP/IP",
    "IAM/OAuth/OIDC",
    "Checkmarx",
    "Black Duck",
    "Kafka",
    "Reactive Programming",
    "DevOps",
    "Microservices",
    "AWS",
    "Golang",
    "Docker",
    "Logging/Monitoring",
    "MongoDB",
    "Automation/Scripting"
  ]

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
