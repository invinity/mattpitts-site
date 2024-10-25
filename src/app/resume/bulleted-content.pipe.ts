import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bulletedContent',
  standalone: true
})
export class BulletedContentPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): unknown {
    return this.convertToSpan(value)?.outerHTML
  }

  convertToSpan(value: string | undefined): HTMLSpanElement | undefined {
    if (value === undefined)
      return undefined
    value = value.trim()
    const content = document.createElement("span")
    const ul = document.createElement("ul")
    var currentItem: HTMLLIElement | undefined = undefined
    chars: for (let index = 0; index < value.length; index++) {
      const char = value[index];
      if (char === "*") {
        currentItem = document.createElement("li")
        ul.appendChild(currentItem)
      } else {
        if (currentItem) {
          currentItem.innerText += char
        } else {
          content.innerText += char
        }
      }
    }
    content.appendChild(ul)
    return content
  }
}
