import { BulletedContentPipe } from './bulleted-content.pipe';

describe('BulletedContentPipe', () => {
  it('create an instance', () => {
    const pipe = new BulletedContentPipe();
    expect(pipe).toBeTruthy();
  });

  it('converts only line-delimited and bulleted content', () => {
    const pipe = new BulletedContentPipe();
    const output = pipe.convertToSpan(`
      This is a dummy description raw value.
      * It has an initial summary text above
      * And then this list of bulleted items
      * Which should be converted into individual <li>
`)
    expect(output).toBeInstanceOf(HTMLSpanElement)
    expect(output?.children).toHaveSize(1)
    expect(output?.innerText.trim()).toMatch(/^This is a dummy description raw value./)
    expect(output?.children[0]).toBeInstanceOf(HTMLUListElement)
    expect(output?.children[0].children).toHaveSize(3)
    expect(output?.children[0].children[0].innerHTML.trim()).toEqual("It has an initial summary text above")
    expect(output?.children[0].children[2].innerHTML.trim()).toEqual("Which should be converted into individual &lt;li&gt;")
  });
});
