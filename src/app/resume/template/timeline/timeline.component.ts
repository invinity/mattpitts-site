import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DescriptionComponent } from './description/description.component';
import { NgFor } from '@angular/common';
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
  imports: [MatIcon, DescriptionComponent, NgFor, CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  @Input()
  profile: any | undefined

  removedProjects = new Array<Element>()

  skills = [
    "Java",
    "SOA & REST",
    "Full-stack development",
    "RDBMS",
    "Kafka",
    "Reactive Programming",
    "CI/CD",
    "Software Design & Testing",
    "SDLC tools and practices",
    "Team lead & Technical coach",
    "Microservices",
    "AWS",
    "TCP/IP Socket Communications",
    "Golang",
    "Docker",
    "Angular",
    "Github"
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
}
