import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DescriptionComponent } from './description/description.component';
import { NgClass, NgFor } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { LinkedinProfile, LinkedinProject } from '../../../service/linkedin.service';

@Component({
  selector: 'resume-timeline',
  standalone: true,
  imports: [MatIcon, DescriptionComponent, NgFor, CdkDropList, CdkDrag, NgClass],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input()
  profile: LinkedinProfile | undefined

  highlightedProjects = new Array<LinkedinProject>()

  removedProjects = new Array<LinkedinProject>()

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

  removedSkills = new Array<string>() 

  removeSkill(skill: string) {
    const idx = this.skills.indexOf(skill)
    transferArrayItem(this.skills, this.removedSkills, idx, idx)
  }

  moveSkill(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }

  removeProject(project: any) {
    if (this.profile) {
      const idx = this.profile.Projects.indexOf(project)
      transferArrayItem(this.profile.Projects as LinkedinProject[], this.removedProjects, idx, idx)
    }
  }

  hideProject(project: any) {
    if (this.profile) {
      const idx = this.profile.Projects.indexOf(project)
      if (idx >= 0) {
        this.profile.Projects[idx].hide = true;
      }
    }
  }

  unhideProject(project: any) {
    if (this.profile) {
      const idx = this.profile.Projects.indexOf(project)
      if (idx && idx >= 0) {
        this.profile.Projects[idx].hide = false;
      }
    }
  }

  highlightProject(project: any) {
    const idx = this.profile?.Projects.indexOf(project)
    if (idx) {
      transferArrayItem(this.profile?.Projects as LinkedinProject[], this.highlightedProjects, idx, idx)
    }
  }

  unHighlightProject(project: any) {
    const idx = this.highlightedProjects.indexOf(project)
    transferArrayItem(this.highlightedProjects, this.profile?.Projects as LinkedinProject[], idx, idx)
  }
}
