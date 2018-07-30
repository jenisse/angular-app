import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[];
  constructor(private empService: EmployeeService) { }
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

}
