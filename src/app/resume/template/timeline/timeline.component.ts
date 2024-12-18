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
  imports: [MatIcon, DescriptionComponent, NgFor, CdkDropListGroup, CdkDropList, CdkDrag, NgClass],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input()
  profile: any | undefined

  highlightedProjects = new Array<any>()

  removedProjects = new Array<any>()

  skills = [
    "Team lead & technical coach",
    "Customer facing experience",
    "Java",
    "Scala",
    "CI/CD",
    "Software Design & Testing",
    "SDLC tools and practices",
    "Github",
    "Jenkins",
    "Capacity Planning",
    "Harness",
    "Full-stack development",
    "SOA & REST",
    "RDBMS & SQL",
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
    "Powershell",
    "Bash"
  ]

  removedSkills = new Array<string>()

  removeSkill(skill: string) {
    const idx = this.skills.indexOf(skill)
    transferArrayItem(this.skills, this.removedSkills, idx, idx)
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
