import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import sampleLinkedInProfile from '../../../../assets/test-data/sample-linkedin-profile.json'
import { LinkedinProfile } from '../../../service/linkedin.service';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineComponent);
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

  it('should remove projects accordingly', () => {
    const beforeSize = component.profile?.Projects.length as number
    component.removeProject(sampleLinkedInProfile.Projects[0])
    expect(component.removedProjects).toHaveSize(1)
    expect(component.profile?.Projects.length).toEqual(beforeSize - 1)
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

  it('should hide and unhide projects accordingly', () => {
    component.hideProject(sampleLinkedInProfile.Projects[0])
    expect(component.profile?.Projects[0].hide).toBeTrue()
    component.unhideProject(component.removedProjects[0])
    expect(component.profile?.Projects[0].hide).toBeFalse()
  })
});
