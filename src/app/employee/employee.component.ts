import { Component } from '@angular/core';
import { Employee, Gender } from '../employee';
import { EmployeeService } from '../employee.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  listEmployees: Employee[] = [];
  searchEmployee: Employee[] = [];
  totalMale: number = 0;
  totalFemale: number = 0;
  totalLeader: number = 0;
  constructor(private employeeService: EmployeeService) { }
  ngOnInit():void {
    this.employeeService.getEmployees().subscribe(data => {
      this.listEmployees = data;
      this.listEmployees.forEach(employee => {
        if (employee.leader) {
          this.totalLeader++;
        }
        if (employee.gender === Gender.male) {
          employee.genderText = 'Nam';
          this.totalMale++;
        }else{
          employee.genderText = 'Nữ';
          this.totalFemale++;
        }
      })
      this.searchEmployee = this.listEmployees;
    });
  }
  removeVietnameseAccents(str:string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  // search
  key: string = '';
  search(): void {
  this.searchEmployee = this.listEmployees.filter((employee) => {
    return this.removeVietnameseAccents(employee.name.toLowerCase()).includes(this.removeVietnameseAccents(this.key.toLowerCase()));
  });
}
}
