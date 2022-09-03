import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  showAlert: boolean = false;
  alertMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {}

  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  formSubmit() {
    if (this.form.valid) {
      this.authService.register(this.form.value).subscribe((res: any) => {
        if (res.code == 201) {
          // this.router.navigate(['/dashboard']);
        } else {
          this.showAlert = true;
          this.alertMessage = res.error;
        }
      });
    } else {
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login'])
  }
}
