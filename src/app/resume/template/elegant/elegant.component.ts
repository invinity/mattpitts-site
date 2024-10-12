import { JsonPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { DescriptionComponent } from "./description/description.component";

@Component({
  selector: 'resume-elegant',
  standalone: true,
  imports: [JsonPipe, NgFor, DescriptionComponent, MatIcon],
  templateUrl: './elegant.component.html',
  styleUrl: './elegant.component.scss'
})
export class ElegantComponent {
  @Input()
  profile: any | undefined
}
