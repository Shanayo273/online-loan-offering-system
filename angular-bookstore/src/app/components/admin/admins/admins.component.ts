import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/common/book';
import { Admin } from 'src/app/models/Admin';

import { AdminService } from 'src/app/services/admin.service';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  users: Array<Admin>;
  books : Array<Book>;
  selectedBook : Book;
  selectedUser: Admin;
  action: string;

  constructor(private httpClientService: AdminService, private bookService : BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.refreshData();
    this.refreshData2();
  }

  refreshData() {
    this.httpClientService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedUserId = params['id'];
        if (selectedUserId) {
          this.selectedUser = this.users.find(user => user.id === +selectedUserId);
        }
      }
    );
  }


  refreshData2() {
    this.bookService.getAllBooks().subscribe(
      response => this.handleSuccessfulResponse2(response),
    );

    this.activatedRoute.queryParams.subscribe(
      (params) => {
        this.action = params['action'];
        const selectedBookId = params['id'];
        if (selectedBookId) {
          this.selectedBook = this.books.find(book => book.id === +selectedBookId);
        }
      }
    );
  }

  handleSuccessfulResponse2(response) {
    this.books = response;
  }


  handleSuccessfulResponse(response) {
    this.users = response;
  }

  viewUser(id: number) {
    this.router.navigate(['admin','users'], {queryParams : {id, action: 'view'}});
  }

  addUser() {
    this.selectedUser = new Admin();
    this.router.navigate(['admin', 'users'], { queryParams: { action: 'add' } });
  }

  viewBook(id: number) {
    this.router.navigate(['admin','books'], {queryParams : {id, action: 'view'}});
  }

  addBook() {
    this.selectedBook = new Book();
    this.router.navigate(['admin', 'books'], { queryParams: { action: 'add' } });
  }





}
