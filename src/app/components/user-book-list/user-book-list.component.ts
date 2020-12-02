import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-book-list',
  templateUrl: './user-book-list.component.html',
  styleUrls: ['./user-book-list.component.css'],
})
export class UserBookListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  returnBook(bookId: string) {}
  getBorrowedBookList() {}
}
