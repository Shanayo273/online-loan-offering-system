import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
 
  @Input()
  user: Admin

  @Output()
  userAddedEvent = new EventEmitter();

  message: string;
  password: string;

  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.adminService.addUser(this.user).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    );
  }

}
