import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: 'books.page.html',
  styleUrls: ['books.page.scss']
})
export class BooksPage implements OnInit{

  section: string = ''; 
  icon: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const section = this.route.snapshot.paramMap.get('section');
    switch(section) {
      case 'in-progress':
        this.section = "Dont bite your nails";
        this.icon = "eye-outline";
        break;
      case 'stand-by':
        this.section = "Hurry up you lazy";
        this.icon = "pause-circle-outline";
        break;
      case 'backlog':
        this.section = "Collecting dust";
        this.icon = "library-outline";
        break;
      case 'waiting':
        this.section = "10 years later...";
        this.icon = "calendar-outline";
        break;
      case 'finished':
        this.section = "Nostalgia";
        this.icon = "star-outline";
        break;
    }
  } 
}
