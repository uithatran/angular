import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  Users: any = [];
  Paginations;
  counter = Array;

  constructor(
    private apiService: ApiService,
  ) {
    this.readUsers();
  }

  ngOnInit(): void {

  }

  // handle JSON in javascript: 
  // https://o7planning.org/vi/12287/huong-dan-xu-ly-json-trong-javascript#a36049089
  readUsers() {
    this.apiService.getUsers().subscribe((data) => {
      const json = JSON.stringify(data);
      // var 
      var obj = JSON.parse(json);
      this.Users = obj.data;
      this.Paginations = obj.totalPage;
      console.log(this.Paginations)
    })
  }

}
