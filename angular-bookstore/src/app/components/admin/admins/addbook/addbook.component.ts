import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/common/book';


import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  
  @Input()
  book: Book

  @Output()
  bookAddedEvent = new EventEmitter();

  message: string;
  password: string;

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
  }

  addBook() {
    this.bookService.addBook(this.book).subscribe(
      (book) => {
        this.bookAddedEvent.emit();
        this.router.navigate(['admin', 'books']);
      }
    );
  }
}
