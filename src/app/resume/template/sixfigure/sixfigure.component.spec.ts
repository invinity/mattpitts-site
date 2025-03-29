import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SixfigureComponent } from './sixfigure.component';
import sampleLinkedInProfile from '../../../../assets/test-data/sample-linkedin-profile.json'
import { LinkedinProfile } from '../../../service/linkedin.service';

describe('SixfigureComponent', () => {
  let component: SixfigureComponent;
  let fixture: ComponentFixture<SixfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixfigureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixfigureComponent);
    component = fixture.componentInstance;
    component.profile = sampleLinkedInProfile as LinkedinProfile
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a profile defined', () => {
    expect(component.profile).toBeDefined();
  })

  it('should hide and unhide skills accordingly', () => {
    const beforeSize = component.skills.length as number
    component.toggleSkill(component.skills[0])
    expect(component.hiddenSkills).toHaveSize(1)
    expect(component.skills).toHaveSize(beforeSize)
    component.toggleSkill(component.skills[0])
    expect(component.hiddenSkills).toHaveSize(0)
    expect(component.skills).toHaveSize(beforeSize)
  })

  it('should highlight and unhighlight projects accordingly', () => {
    const beforeSize = component.profile?.Projects.length as number
    component.highlightProject(sampleLinkedInProfile.Projects[0])
    expect(component.highlightedProjects).toHaveSize(1)
    expect(component.profile?.Projects.length).toEqual(beforeSize - 1)
    component.unHighlightProject(component.highlightedProjects[0])
    expect(component.highlightedProjects).toHaveSize(0)
    expect(component.profile?.Projects.length).toEqual(beforeSize)
  })
});
