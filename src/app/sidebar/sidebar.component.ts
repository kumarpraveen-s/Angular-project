import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  currentUrl!: String;

  constructor(private roueter: Router) {
    this.roueter.events.subscribe((value) => {
      // const routerObj = NavigationEnd;
      if (value instanceof NavigationEnd) {
        this.currentUrl = value.url;
      }
    });
  }
  ngOnInit() {}
}
