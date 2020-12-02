import { Component, OnInit } from '@angular/core';
import { Book } from 'src/core/model/Book';
import { ChannelService } from 'src/core/services/channel-service/channel.service';

@Component({
  selector: 'app-library-book-list',
  templateUrl: './library-book-list.component.html',
  styleUrls: ['./library-book-list.component.css'],
})
export class LibraryBookListComponent implements OnInit {
  libraryBookList: Book[];
  constructor(private channelService: ChannelService) {
    this.getLibraryBookList();
  }

  ngOnInit(): void {}

  borrowBook(bookId: string) {
    this.channelService.borrowBook(bookId);

    this.libraryBookList.forEach((book) => {
      if (book.isbn == bookId) {
        console.log('found ');
        book.numberOfCopy = book.numberOfCopy - 1;
      }
    });
  }

  async getLibraryBookList() {
    this.libraryBookList = await this.channelService.getLibraryBookList();
  }
}
