import { Component, Input, OnInit } from '@angular/core';
import { BulletedContentPipe } from '../../../bulleted-content.pipe';

@Component({
  selector: 'timeline-description',
  standalone: true,
  imports: [BulletedContentPipe],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent implements OnInit {
  @Input()
  text: string | undefined

  ngOnInit(): void {
  }

}
