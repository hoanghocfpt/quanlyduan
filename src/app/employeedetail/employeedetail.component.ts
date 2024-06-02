import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Project } from '../project';
import { Task } from '../task';
import {Status} from '../task';
@Component({
  selector: 'app-employeedetail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employeedetail.component.html',
  styleUrl: './employeedetail.component.css'
})
export class EmployeedetailComponent {
  constructor(private employeeService: EmployeeService, private router:ActivatedRoute) {}
  listProjects: Project[] = [];
  listTasks: Task[] = [];
  employee: Employee = {} as Employee;
  id: any
  ngOnInit():void {
    this.id = this.router.snapshot.paramMap.get('id')
    this.employeeService.getProjectsOfEmployee(this.id).subscribe(data => {
      this.listProjects = data;
    })

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    })

    this.employeeService.getTasksOfEmployee(this.id).subscribe(data => {
      this.listTasks = data;
      if (this.listTasks.length == 0) {
        console.log('listTasks', this.listTasks);
        return;
      }
      this.listTasks.forEach(task => {
        if (task.status === Status.new) {
          task.statusText = 'Mới';
        } else if (task.status === Status.inprogress) {
          task.statusText = 'Đang thực hiện';
        } else if (task.status === Status.completed) {
          task.statusText = 'Hoàn thành';
        } else if (task.status === Status.canceled) {
          task.statusText = 'Đã hủy';
        } else {
          task.statusText = 'Không xác định';
        }
      })
      console.log('listTasks', this.listTasks);
      
    })
  }
  tab:boolean = false;
  tabClick(tab: boolean) {
    this.tab! = tab;
  }
}
