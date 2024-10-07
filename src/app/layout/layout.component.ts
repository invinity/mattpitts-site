import { Component, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { filter, map, shareReplay, take } from 'rxjs/operators';
import { ActivationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    RouterLinkActive,
    JsonPipe
  ]
})
export class LayoutComponent implements OnInit {
  rootRoutes = routes.filter(r => r.path)
  private breakpointObserver = inject(BreakpointObserver)
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    )
  title: string | undefined

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router
      .events.pipe(
        filter(event => event instanceof ActivationEnd && event.snapshot.children.length == 0),
        map(e => {
          return (e as ActivationEnd).snapshot.title
        })
      ).subscribe(t => {
        this.title = t
      });
  }

}
