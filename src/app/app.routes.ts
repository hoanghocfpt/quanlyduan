import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { ProjectdetailComponent } from './projectdetail/projectdetail.component';
import { TaskComponent } from './task/task.component';
import { TaskdetailComponent } from './taskdetail/taskdetail.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';

export const routes: Routes = [
    {path: '', component: ProjectComponent, title: 'Dự án'},
    {path: 'du-an', component: ProjectComponent, title: 'Dự án'},
    {path: 'du-an/:id', component: ProjectdetailComponent, title: 'Chi tiết dự án'},
    {path: 'cong-viec', component: TaskComponent, title: 'Công việc'},
    {path: 'cong-viec/:id', component: TaskdetailComponent, title: 'Chi tiết công việc'},
    {path: 'nhan-vien', component: EmployeeComponent, title: 'Nhân viên'},
    {path: 'nhan-vien/:id', component: EmployeedetailComponent, title: 'Chi tiết nhân viên'},
    {path: '**', component: ProjectComponent, title: 'Dự án'}
];
