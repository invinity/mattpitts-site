import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path: 'resume', component: ResumeComponent},
    {path: '', component: DashboardComponent}
];
