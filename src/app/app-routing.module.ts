import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibraryBookListComponent } from './components/library-book-list/library-book-list.component';
import { UserBookListComponent } from './components/user-book-list/user-book-list.component';

const routes: Routes = [
  { path: 'librarybooks', component: LibraryBookListComponent },
  { path: 'borrowedBooks', component: UserBookListComponent },
  { path: '', redirectTo: '/librarybooks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
