import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import localeVI from '@angular/common/locales/vi';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Status, Task } from '../task';
registerLocaleData(localeVI);
@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projectdetail.component.html',
  styleUrl: './projectdetail.component.css'
})
export class ProjectdetailComponent {
  constructor(private projectService: ProjectService,private router:ActivatedRoute) { }
  project:Project = {} as Project
  listMembers:any = {} as any
  listTasks:any[] = {} as any[]
  id:any
  teamleader:any
  ngOnInit():void {
    this.id = this.router.snapshot.paramMap.get('id')
    // get project by id
    this.projectService.getProjectById(this.id).subscribe(data => {
      this.project = data;
      console.log("List loại (lấy về từ server): ", data);       
    })
    // get members of project
    this.projectService.getMemberOfProject(this.id).subscribe(data => {
      this.listMembers = data
      // this.teamleader = this.listMembers.find((member:any) => member.leader === 1)
      console.log("List nhân viên (lấy về từ server): ", data);       
    })
    // get tasks of project
    this.projectService.getTasksOfProject(this.id).subscribe(data => {
      this.listTasks = data
      this.listTasks.forEach(task => {
        if(task.status === Status.new) {
          task.statusText = 'Mới'
        } else if(task.status === Status.inprogress) {
          task.statusText = 'Đang thực hiện'
        } else if(task.status === Status.completed) {
          task.statusText = 'Hoàn thành'
        } else if(task.status === Status.canceled) {
          task.statusText = 'Đã hủy'
        } else{
          task.statusText = 'Không xác định'
        }
      })
      console.log(this.listTasks,this.id);
      
    })
  }

  

}
