import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  employee: Employee;

  constructor(private empService: EmployeeService) { }

  ngOnInit(){
    //dont know
  }

  selectUser(employee: Employee) {
    this.empService.getEmployee(employee.id)
      .subscribe( data => {
        this.employee = data;
      });
  }

}
