import { Injectable } from '@angular/core';
import { Admin } from '../models/Admin';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<Admin[]>('http://localhost:8080/users/get');
  }

  addUser(newUser: Admin) {
    return this.httpClient.post<Admin>('http://localhost:8080/users/add', newUser);
  }

  deleteUser(id) {
    return this.httpClient.delete<Admin>('http://localhost:8080/users/' + id);
  }
}
