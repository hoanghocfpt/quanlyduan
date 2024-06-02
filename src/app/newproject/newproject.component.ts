import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-newproject',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newproject.component.html',
  styleUrl: './newproject.component.css'
})
export class NewprojectComponent {
  constructor(private projectService:ProjectService, private employeeService:EmployeeService, private router:Router) { }
  @Input() project: any = {} as any;
  listLeader:Employee[] = {} as Employee[]
  ngOnInit():void {
    this.employeeService.getEmployees().subscribe(data=> {
      this.listLeader = data.filter((employee:Employee) => employee.leader === 1)
    })
  }
  addProject(project:any) {
    console.log("Thêm dự án: ", project);
    this.projectService.addProject(project).subscribe( data => {
      if(data) {
        console.log("Thêm dự án thành công: ", data);
        alert("Thêm dự án thành công");
        this.router.navigate(['/admin/danhmuc']);
      }
    });
  }
}
