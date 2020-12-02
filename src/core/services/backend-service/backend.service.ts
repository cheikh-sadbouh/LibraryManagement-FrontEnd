import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Book } from '../../model/Book';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'http://localhost:8090/api/v1';

  constructor(private http: HttpClient) {}

  borrowBook(bookId: string): Observable<string> {
    return this.http
      .put<string>(this.baseUrl + '/BorrowBook/' + bookId, {})
      .pipe(
        tap((data) => console.log('Data : ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  returnBook(bookId: string): Observable<string> {
    return this.http
      .put<string>(this.baseUrl + '/ReturnBook/' + bookId, {})
      .pipe(
        tap((data) => console.log('Data : ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getBorrowedBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrl + '/BorrowedBooks/', {}).pipe(
      tap((data) => console.log('Data : ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getLibraryBookList() {
    return this.http
      .get<Book[]>(this.baseUrl + '/libraryBooks/', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          // 'Content-Type': 'application/json'
        },
      })
      .toPromise();
  }

  private handleError(error: any, caught: Observable<any>): any {
    console.log(error);
  }
}
