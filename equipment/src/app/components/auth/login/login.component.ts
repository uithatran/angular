import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    public formBuilder: FormBuilder,
    public loginService: LoginService,
    public ngZone: NgZone,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.mainForm()
  }

  mainForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return false;
    } else {
      this.loginService.loginPost(this.loginForm.value).subscribe(
        ()=> {
          this.router.navigateByUrl('/users')
        }, (error) => {
          console.log(error);
        }
      )
    }
  }

}
