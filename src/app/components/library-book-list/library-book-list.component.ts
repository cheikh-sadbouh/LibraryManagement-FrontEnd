import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-book-list',
  templateUrl: './library-book-list.component.html',
  styleUrls: ['./library-book-list.component.css'],
})
export class LibraryBookListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  borrow(bookId: string) {}

  getLibraryBookList() {}
}
