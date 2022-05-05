import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Customers', url: '/customers', icon: 'people' },
    { title: 'City`s', url: '/citys', icon: 'location' },
    { title: 'Login', url: '/login', icon: 'log-in' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Trave l', 'Reminders'];
  constructor() {}
}
