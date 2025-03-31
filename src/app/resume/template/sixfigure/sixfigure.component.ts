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
import { MyHighlightsService, Skill, Highlight } from '../../../service/my-highlights.service';

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

  skills: Skill[] = []
  highlights: Highlight[] = []

  highlightedProjects = new Array<LinkedinProject>()

  constructor(private myHighlights: MyHighlightsService) {
    this.skills = this.myHighlights.skills
    this.highlights = this.myHighlights.highlights
  }

  toggleSkill(skill: Skill) {
    skill.hidden = !skill.hidden
  }

  moveSkill(event: CdkDragDrop<Skill[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }

  toggleHighlight(h: Highlight) {
    h.hidden = !h.hidden
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
