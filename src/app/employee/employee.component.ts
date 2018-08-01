import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private empService: EmployeeService, private router: Router) { }
  ngOnInit() {
    this.empService.getEmployees()
      .subscribe( data => {
        this.employees = data;
      });
  }
  deleteEmployee(employee: Employee): void {
    this.empService.deleteEmployee(employee.id)
      .subscribe( data => {
        this.employees = this.employees.filter(u => u !== employee);
      })
  };

  viewEmployee(employee: Employee): void {
    this.router.navigate(['/users', employee.id])
  };

  editEmployee(employee: Employee): void {
    this.router.navigate(['/users/edit', employee.id])
  };
}
