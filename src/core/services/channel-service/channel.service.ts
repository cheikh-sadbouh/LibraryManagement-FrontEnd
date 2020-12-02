import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Book } from 'src/core/model/Book';
import { BackendService } from '../backend-service/backend.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  libraryBookList: Book[] = [];
  userBorrowedBookList: Book[] = [];
  constructor(private backend: BackendService) {}
  returnedData: string = '';

  borrowBook(bookId: string) {
    this.backend.borrowBook(bookId).subscribe({
      next: (data) => {
        this.returnedData = data;
      },
      error: (error) => {
        console.log('error' + error);
      },
    });
    return this.returnedData;
  }
  returnBook(bookId: string) {
    this.backend.returnBook(bookId).subscribe({
      next: (data) => {
        this.returnedData = data;
      },
      error: (error) => {
        console.log('error' + error);
      },
    });
    return this.returnedData;
  }
  async getLibraryBookList() {
    await this.backend
      .getLibraryBookList()
      .then((data) => {
        console.log(JSON.stringify(data));
        this.libraryBookList = data;
      })
      .catch((error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
      });

    return this.libraryBookList;
  }

  async getBorrowedBookList() {
    await this.backend
      .getBorrowedBookList()
      .then((data) => {
        console.log(JSON.stringify(data));
        this.userBorrowedBookList = data;
      })
      .catch((error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
      });

    return this.userBorrowedBookList;
  }
}
