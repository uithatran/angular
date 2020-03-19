import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  error;
  submitted = false;
  userForm: FormGroup;
  userPosition: any = ['Guest', 'Admin']

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {}
  ngOnInit() {this.mainForm(); }

  mainForm() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      position: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updatePosition(e) {
    this.userForm.get('position').setValue(e, {
      onlySelf: true
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return false;
    } else {
      this.apiService.createUser(this.userForm.value).subscribe(
        () => {
          // console.log("User successfully created");
          this.ngZone.run(() => this.router.navigateByUrl('/users'))
        }, (error) => {
           
          console.log(error);
        }
      )
      // console.log(this.userForm.value);
    }
  }
}
