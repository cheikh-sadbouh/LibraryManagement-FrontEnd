import { Injectable } from '@angular/core';
import { Book } from 'src/core/model/Book';
import { BackendService } from '../backend-service/backend.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  libraryBookList: Book[];
  userBorrowedBookList: Book[];
  constructor(private backend: BackendService) {}
  borrowBook(bookId: string) {
    this.backend.borrowBook(bookId).subscribe({
      next: (data) => {
        return data;
      },
      error: (error) => {
        console.log('error' + error);
      },
    });
  }
  returnBook(bookId: string) {
    this.backend.returnBook(bookId).subscribe({
      next: (data) => {
        return data;
      },
      error: (error) => {
        console.log('error' + error);
      },
    });
  }
  getLibraryBookList() {
    this.backend.getLibraryBookList().subscribe({
      next: (data) => {
        this.libraryBookList = data;
      },
      error: (err) => console.log('error' + err),
    });

    return this.libraryBookList;
  }
  getBorrowedBookList() {
    this.backend.getBorrowedBookList().subscribe({
      next: (data) => {
        this.userBorrowedBookList = data;
      },
      error: (err) => console.log('error' + err),
    });

    return this.userBorrowedBookList;
  }
}
