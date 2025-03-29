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

  @Input()
  skills: string[] = []

  highlightedProjects = new Array<LinkedinProject>()

  removedProjects = new Array<LinkedinProject>()

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
      if (idx >= 0) {
        this.profile.Projects[idx].hide = false;
      }
    }
  }

  highlightProject(project: any) {
    if (this.profile) {
      const idx = this.profile.Projects.indexOf(project)
      if (idx >= 0) {
        transferArrayItem(this.profile?.Projects as LinkedinProject[], this.highlightedProjects, idx, idx)
      }
    }
  }

  unHighlightProject(project: any) {
    const idx = this.highlightedProjects.indexOf(project)
    transferArrayItem(this.highlightedProjects, this.profile?.Projects as LinkedinProject[], idx, idx)
  }
}
