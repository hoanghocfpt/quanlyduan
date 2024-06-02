import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Project } from './project';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }
  private apiUrlEmployee = 'http://localhost:3000/nhan_vien';
  private apiUrlProject = 'http://localhost:3000/du_an';
  private apiUrlTask = 'http://localhost:3000/task';
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrlEmployee);
  }

  
  // get detail
  getEmployeeById(id: any):Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrlEmployee}/${id}`);
  }

  // get projects of employee
  getProjectsOfEmployee(id: any):Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrlProject}/nhan_vien/${id}`);
  }

  // get tasks of employee
  getTasksOfEmployee(id: any):Observable<any> {
    return this.http.get<any>(`${this.apiUrlTask}/nhan_vien/${id}`);
  }

  // add employee
  addEmployee(employee: any) {
    return this.http.post(this.apiUrlEmployee, employee);
  }

  // update employee
  updateEmployee(employee: any) {
    return this.http.put(`${this.apiUrlEmployee}/${employee.id}`, employee);
  }
  // delete employee
  deleteEmployee(id: any) {
    return this.http.delete(`${this.apiUrlEmployee}/${id}`);
  }
}