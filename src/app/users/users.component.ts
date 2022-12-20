import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$!: any;
  constructor(private data: DataService) {}
  ngOnInit() {
    this.data.getUsers().subscribe((value) => {
      console.log(value);
      this.users$ = value;
    });
  }
}
