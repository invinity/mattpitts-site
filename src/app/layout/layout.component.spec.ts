import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutComponent } from './layout.component';
import { ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd, NavigationEnd, Router, RouterModule, UrlSegment } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>
  let routerEvents = new BehaviorSubject<any>('test')
  let router: Router

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({}),
            title: of("my title")
          },
        }
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router)
    spyOnProperty(router, 'events', 'get').and.returnValue(routerEvents)
    fixture = TestBed.createComponent(LayoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should compile', () => {
    expect(component).toBeTruthy()
  });

  it('should acquire page title from NavigationEnd event', () => {
    const mockRoute = {title: 'my title', children: []} as unknown as ActivatedRouteSnapshot
    const navEvent = new ActivationEnd(mockRoute)
    routerEvents.next(navEvent);
    fixture.detectChanges();
    expect(component.title).toEqual('my title');
  });
});

