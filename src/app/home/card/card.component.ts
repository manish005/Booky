import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

interface Book {
  title: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book!: Book;

  constructor(private router: Router) {}

  openPdfViewer(): void {
    this.router.navigate(['/pdf-viewer'], { queryParams: { pdfSrc: 'assets/read.pdf' } });
  }
}
