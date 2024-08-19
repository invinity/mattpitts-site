import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'resume', component: ResumeComponent, title: 'Resume'},
    {path: '', component: DashboardComponent, title: 'Home'}
];
