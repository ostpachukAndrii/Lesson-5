import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppHighlightDirective } from '../shared/directives/appHighLight/app-highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  declarations: [BookComponent, BookListComponent],
  exports: [BookListComponent]
})
export class ProductsModule { }
