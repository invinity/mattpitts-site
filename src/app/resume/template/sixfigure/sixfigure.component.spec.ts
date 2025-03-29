import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixfigureComponent } from './sixfigure.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
