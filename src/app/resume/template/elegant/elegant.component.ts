import { JsonPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarContainer } from '@angular/material/snack-bar';
import { DescriptionComponent } from "../../widget/description/description.component";

@Component({
  selector: 'resume-elegant',
  standalone: true,
  imports: [JsonPipe, NgFor, DescriptionComponent, MatIcon, MatProgressBarModule, MatSnackBarContainer],
  templateUrl: './elegant.component.html',
  styleUrl: './elegant.component.scss'
})
export class ElegantComponent {
  @Input()
  profile: any | undefined
}
