import { Component, Input } from '@angular/core';
import { LinkedinProfile, LinkedinProject } from '../../../service/linkedin.service';
import { MatIcon } from '@angular/material/icon';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { DescriptionComponent } from '../sixfigure/description/description.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'resume-sixfigure',
  standalone: true,
  imports: [MatIcon, DescriptionComponent, NgFor, CdkDropList, CdkDrag, NgClass],
  templateUrl: './sixfigure.component.html',
  styleUrl: './sixfigure.component.scss'
})
export class SixfigureComponent {
  @Input()
  profile: LinkedinProfile | undefined

  @Input()
  skills: string[] = []

  hiddenSkills: string[] = []

  highlightedProjects = new Array<LinkedinProject>()

  toggleSkill(skill: string) {
    const idx = this.hiddenSkills.indexOf(skill)
    if (idx >= 0) {
      this.hiddenSkills.splice(idx, 1)
    } else {
      this.hiddenSkills.push(skill)
    }
  }

  moveSkill(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
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
