import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('http://localhost:3000/du_an');
  }
  // get category by id
  getProjectById(id: any):Observable<Project> {
    return this.http.get<Project>('http://localhost:3000/du_an/' + id);
  }
  // get member of project
  getMemberOfProject(id: any) {
    return this.http.get('http://localhost:3000/nhan_vien/du_an/' +id )
  }
  // get tasks of project
  getTasksOfProject(id: any):Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/task/du_an/' + id)
  }
  // add project
  addProject(project: any) {
    return this.http.post('http://localhost:3000/du_an', project);
  }
  // update project
  updateProject(project: any) {
    return this.http.put('http://localhost:3000/du_an/' + project.id, project);
  }
  // delete project
  deleteProject(id: any) {
    return this.http.delete('http://localhost:3000/du_an/' + id);
  }
}
