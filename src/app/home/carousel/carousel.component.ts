import { Component , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Book {
  title: string;
  author: string;
  image: string;
  pdfSrc: string; // Add pdfSrc to book interface
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slides: Book[][] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Book[]>('assets/books.json').subscribe(data => {
      this.slides = this.chunk(data, 5);
    });
  }

  chunk(arr: Book[], chunkSize: number): Book[][] {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }
}