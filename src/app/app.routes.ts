import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';

export const routes: Routes = [
    {path: '', component: ProjectComponent, title: 'Dự án'},
    {path: 'du-an/:id', component: ProjectdetailComponent, title: 'Chi tiết dự án'},
    {path: '**', component: ProjectComponent, title: 'Dự án'}
];
