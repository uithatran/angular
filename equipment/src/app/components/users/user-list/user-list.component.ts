import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  success;
  Users: any = [];
  Paginations;
  counter = Array;

  constructor(
    private apiService: ApiService,
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private router: Router,
  ) {
    this.readUsers();
  }

  ngOnInit(): void {

  }

  // handle JSON in javascript: 
  // https://o7planning.org/vi/12287/huong-dan-xu-ly-json-trong-javascript#a36049089
  readUsers() {
    this.apiService.getUsers().subscribe((usersData) => {
      const json = JSON.stringify(usersData);
      // var 
      var obj = JSON.parse(json);
      this.Users = obj.data;
      this.Paginations = obj.totalPage;
    })
  }

  deleteUser(id, index) {
    if (window.confirm("Do you want DELETE??")) {
      // let id = this.actRoute.snapshot.paramMap.get('id');
      this.apiService.deleteUser(id).subscribe((data) => {
        console.log(data);
        var json = JSON.stringify(data);
        var obj = JSON.parse(json);
        this.success = obj.success;

        // reload data user
        this.Users.splice(index, 1);
      });
      // this.router.navigateByUrl('/users');
    }
    // if (window.confirm('Are you sure?')) {
    //   let id = this.actRoute.snapshot.paramMap.get('id');
    //   this.apiService.updateEmployee(id, this.editForm.value)
    //     .subscribe(res => {
    //       this.router.navigateByUrl('/employees-list');
    //       console.log('Content updated successfully!')
    //     }, (error) => {
    //       console.log(error)
    //     })
    // }
  }
}
