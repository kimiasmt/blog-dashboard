import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showAlert: boolean = false;
  alertMessage: string = '';

  constructor(private fb: FormBuilder,
              private router:Router,
              private authService:AuthenticationService) { }

  form = this.fb.group({
    email: ['' , [Validators.required]],
    password: ['' , [Validators.required]]
  })

  ngOnInit(): void {
  }

  submitKIM () {
    console.log("dasdasdddddddddd");

    if(this.form.valid){
      this.authService.login(this.form.value).subscribe((res:any) => {
        console.log(res.code,'sjklsj');
        if(res.code == 201) {
          console.log("soihdj");
          // this.router.navigate(['/dashboard']);
        } else {
          console.log("gozasdh")
          this.showAlert = true;
          this.alertMessage = res.error;
        }
      })
    }
  }

}
