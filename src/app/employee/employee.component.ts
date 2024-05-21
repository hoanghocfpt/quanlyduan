import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  listEmployees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }
  ngOnInit():void {
    this.employeeService.getEmployees().then(data => {
      this.listEmployees = data;
    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }
}
