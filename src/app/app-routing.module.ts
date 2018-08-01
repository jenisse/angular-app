import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { EditComponentComponent } from './edit-component/edit-component.component';


const routes: Routes = [
  { path: 'users', component: EmployeeComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'users/:id', component: ShowEmployeeComponent },
  { path: 'users/edit/:id', component: EditComponentComponent } 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
