import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import localeVI from '@angular/common/locales/vi';
import { RouterLink } from '@angular/router';
registerLocaleData(localeVI);
@Component({
  selector: 'app-projectdetail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projectdetail.component.html',
  styleUrl: './projectdetail.component.css'
})
export class ProjectdetailComponent {
  @Input() id: number = 0;
  project:Project = {} as Project
  listMembers:any[] = {} as any
  teamleader:any
  constructor(private projectService: ProjectService) { }
  ngOnInit():void {
    this.projectService.getProject(this.id).then(data => {
      this.project = data;
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
    this.projectService.getMemberOfProject(this.id).then(data => {
      this.listMembers = data
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
    this.projectService.getLeaderOfProject(this.id).then(data => {
      this.teamleader = data
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }

  

}
