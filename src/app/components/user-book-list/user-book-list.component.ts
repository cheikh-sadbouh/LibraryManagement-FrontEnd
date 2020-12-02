import { Component, OnInit } from '@angular/core';
import { Book } from 'src/core/model/Book';
import { ChannelService } from '../../../core/services/channel-service/channel.service';
@Component({
  selector: 'app-user-book-list',
  templateUrl: './user-book-list.component.html',
  styleUrls: ['./user-book-list.component.css'],
})
export class UserBookListComponent implements OnInit {
  userBorrowedBookList: Book[];
  constructor(private channelService: ChannelService) {
    this.getBorrowedBookList();
  }

  ngOnInit(): void {}

  returnBook(bookId: string) {
    this.channelService.returnBook(bookId);

    this.getBorrowedBookList();
  }
  async getBorrowedBookList() {
    console.log('called getBorrowedBookList');
    this.userBorrowedBookList = await this.channelService.getBorrowedBookList();
  }
}
