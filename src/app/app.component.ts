import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Book } from './shared/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tp_angular';
  books: Book[] = [
    new Book ('Crime and Punishment', true),
    new Book ('Harry Potter', true),
    new Book ('Secret', false),
  ];
}
