import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  User;
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.apiService.getUser(id).subscribe(data => {
      console.log(data);
      this.User = data;
    })
  }
}
