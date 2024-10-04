import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bulletedContent',
  standalone: true
})
export class BulletedContentPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): unknown {
    if (value === undefined)
      return null
    const list = value.split(/\*/)
    const ul = document.createElement("ul")
    list.forEach(i => {
      const li = document.createElement("li")
      li.innerHTML = i
      ul.appendChild(li)
    });
    return ul.outerHTML
  }

}
