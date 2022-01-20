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
        path: '/tabs/shows/sections/in-progress'
      },
      {
        name: 'Stand-By',
        icon: 'pause-circle-outline',
        path: '/tabs/shows/sections/stand-by'
      },
      {
        name: 'Backlog',
        icon: 'library-outline',
        path: '/tabs/shows/sections/backlog'
      },
      {
        name: 'Waiting',
        icon: 'calendar-outline',
        path: '/tabs/shows/sections/waiting'
      },
      {
        name: 'Finished',
        icon: 'star-outline',
        path: '/tabs/shows/sections/finished'
      },
    ]
  }
}
