import { Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'resume', component: ResumeComponent, title: 'Matt Pitts :: Resume'},
    {path: '', component: HomeComponent, title: 'Matt Pitts :: Home'}
];
