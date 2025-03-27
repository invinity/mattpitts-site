import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionComponent } from './description.component';

describe('DescriptionComponent', () => {
  let component: DescriptionComponent;
  let fixture: ComponentFixture<DescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('converts only line-delimited and bulleted content', () => {
    component.text = `
      This is a dummy description raw value.
      * It has an initial summary text above
      * And then this list of bulleted items
      * Which should be converted into individual items in a list of bullets
`
    component.ngOnChanges()
    expect(component.heading).toEqual("This is a dummy description raw value.")
    expect(component.bullets).toBeDefined()
    expect(component.bullets).toHaveSize(3)
    expect(component.bullets[0].text).toEqual("It has an initial summary text above")
    expect(component.bullets[2].text).toEqual("Which should be converted into individual items in a list of bullets")
  });
});
