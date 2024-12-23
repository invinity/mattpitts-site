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

@Component({
  selector: 'resume-timeline',
  standalone: true,
  imports: [MatIcon, DescriptionComponent, NgFor, CdkDropList, CdkDrag, NgClass],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input()
  profile: any | undefined

  highlightedProjects = new Array<any>()

  removedProjects = new Array<any>()

  skills = [
    "Java",
    "Scala",
    "CI/CD",
    "Software Design & Testing",
    "Spring",
    "SDLC tools and practices",
    "Github",
    "GCP",
    "Jenkins",
    "Team lead/coach",
    "Capacity Planning",
    "Harness",
    "Full-stack development",
    "SOA & REST",
    "RDBMS & SQL",
    "Python",
    "Crypto libraries/algorithms",
    "Angular",
    "Kafka",
    "Reactive Programming",
    "Microservices",
    "AWS",
    "TCP/IP Socket Communications",
    "Golang",
    "Docker",
    "Logging",
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
    const idx = this.profile?.Projects.indexOf(project)
    transferArrayItem(this.profile?.Projects, this.removedProjects, idx, idx)
  }

  hideProject(project: any) {
    const idx = this.profile?.Projects.indexOf(project)
    if (idx >= 0) {
      this.profile.Projects[idx].hide = true;
    }
  }

  unhideProject(project: any) {
    const idx = this.profile?.Projects.indexOf(project)
    if (idx >= 0) {
      this.profile.Projects[idx].hide = false;
    }
  }

  highlightProject(project: any) {
    const idx = this.profile?.Projects.indexOf(project)
    transferArrayItem(this.profile?.Projects, this.highlightedProjects, idx, idx)
  }

  unHighlightProject(project: any) {
    const idx = this.highlightedProjects.indexOf(project)
    transferArrayItem(this.highlightedProjects, this.profile?.Projects, idx, idx)
  }
}
