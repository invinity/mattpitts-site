import { NgClass, NgFor } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

type Bullet = { text: string, hidden: boolean }

@Component({
  selector: 'timeline-description',
  standalone: true,
  imports: [NgFor, MatIcon, NgClass],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent implements OnChanges {
  @Input()
  text: string | undefined
  heading: string | undefined
  bullets: Array<Bullet> = []

  ngOnChanges(): void {
    if (this.text === undefined) {
      this.heading = undefined
      this.bullets.length = 0
      return;
    }

    var heading = ""
    var currentBullet: string | undefined = undefined
    for (let index = 0; index < this.text.length; index++) {
      const char = this.text[index];
      if (char === "*") {
        if (currentBullet && currentBullet.length > 0) {
          this.bullets.push({ text: currentBullet.trim(), hidden: false })
        }
        currentBullet = ""
      } else {
        if (currentBullet !== undefined) {
          currentBullet += char
        } else {
          heading += char
        }
      }
    }
    if (currentBullet && currentBullet.length > 0) {
      this.bullets.push({ text: currentBullet.trim(), hidden: false })
    }
    this.heading = heading.trim()
  }

  removeBullet(bullet: Bullet): void {
    const index = this.bullets.indexOf(bullet)
    if (index < 0 || index >= this.bullets.length) {
      return
    }
    this.bullets[index].hidden = true
  }
}
