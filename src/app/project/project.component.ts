import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  listProjects: Project[] = [];
  constructor(private projectService: ProjectService) { }
  ngOnInit():void {
    this.projectService.getProjects().subscribe(data => {
      this.listProjects = data;
      console.log("List loại (lấy về từ server): ", data);
    })
  }
  
}
