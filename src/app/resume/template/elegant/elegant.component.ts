import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DescriptionComponent } from "./description/description.component";
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'resume-elegant',
  standalone: true,
  imports: [MatIcon, DescriptionComponent, NgFor, CdkDropList, CdkDrag, NgClass],
  templateUrl: './elegant.component.html',
  styleUrl: './elegant.component.scss'
})
export class ElegantComponent {
  @Input()
  profile: any | undefined

  @Input()
  skills: string[] = []

  hiddenSkills: string[] = []

  hideSkill(skill: string) {
    this.hiddenSkills.push(skill)
  }

  moveSkill(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.skills, event.previousIndex, event.currentIndex);
  }
}
