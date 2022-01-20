import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.page.html',
  styleUrls: ['./sections.page.scss'],
})
export class SectionsPage implements OnInit {
  sections: { name: string; icon: string; path: string; }[];

  constructor() { }

  ngOnInit() {
    this.loadSections();
  }

  loadSections(): void {
    this.sections = [
      {
        name: 'In-Progress',
        icon: 'eye-outline',
        path: '/tabs/books/sections/in-progress'
      },
      {
        name: 'Stand-By',
        icon: 'pause-circle-outline',
        path: '/tabs/books/sections/stand-by'
      },
      {
        name: 'Backlog',
        icon: 'library-outline',
        path: '/tabs/books/sections/backlog'
      },
      {
        name: 'Waiting',
        icon: 'calendar-outline',
        path: '/tabs/books/sections/waiting'
      },
      {
        name: 'Finished',
        icon: 'star-outline',
        path: '/tabs/books/sections/finished'
      },
    ]
  }

}
