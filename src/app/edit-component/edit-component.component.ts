import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  user: Employee = new Employee();
  id: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private empService: EmployeeService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
       this.empService.getEmployee(this.id)
       .subscribe( data => {
         this.user = data;
       });

    });
  }

  updateEmployee(): void {
    this.user.id=this.id;
    this.empService.updateEmployee(this.user)
        .subscribe( data => {
          alert("Employee updated successfully.");
        });

  };

}
