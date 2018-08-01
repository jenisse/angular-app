import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public API = '//localhost:8080';
  public EMPLOYEES_LIST = this.API + '/employee'; 
  public EMPLOYEE_DETAIL = this.API + '/show-employee/'; 
  public EMPLOYEE_DEL = this.API + '/delete-employee/';
  public EMPLOYEE_ADD = this.API + '/new-employee';
  public EMPLOYEE_EDIT = this.API + '/edit-employee';
  private headers;

  constructor(private http: HttpClient) {let headers = new Headers();
    headers.append('Content-Type','application/json'); this.headers=headers}

  public getEmployees() {
    return this.http.get<Employee[]>(this.EMPLOYEES_LIST);
  }

  public getEmployee(id: string) {
    return this.http.get<Employee>(this.EMPLOYEE_DETAIL+id);
  }

  public deleteEmployee(id: string) {
    return this.http.delete(this.EMPLOYEE_DEL+id);
  }

  public createEmployee(user) {
    return this.http.post<Employee>(this.EMPLOYEE_ADD, user, { headers: this.headers});
  }

  public updateEmployee(user) {
    return this.http.put<Employee>(this.EMPLOYEE_EDIT, user, { headers: this.headers});
  }
}
