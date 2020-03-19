import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { User } from '../../../models/user.model'
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  submitted = false;
  userData: User[];
  editForm: FormGroup;
  userPosition: any = ['Guest', 'Admin']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private actRoute: ActivatedRoute,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit(

  ) {
    this.mainForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      position: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  mainForm() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      position: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  getUser(id) {
    this.apiService.getUser(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        password: data['password'],
        phone: data['phone'],
        position: data['position'],
      });
    });
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.editForm.get('position').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      console.log("false");
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateUser(id, this.editForm.value).subscribe(
          (res) => {
            // console.log('Employee successfully created!')
            this.router.navigateByUrl('/users')
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error);
          });
      }
    }
  }
}