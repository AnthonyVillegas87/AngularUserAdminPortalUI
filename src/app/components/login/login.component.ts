import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {


  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  loginForm!: FormGroup;
  
constructor(private fb : FormBuilder, private auth: AuthenticationService) {}

ngOnInit(): void {
  this.loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
}

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type = "text" : this.type = "password"
  }
 
  
onLogin() {

  // Send user Obj to Database
  if(this.loginForm.valid) {
    console.log(this.loginForm.value);

    this.auth.login(this.loginForm.value).subscribe({
      next: (res) => {
        alert(res.message)
      },
      error: (err) => {
        alert(err.message)
      }

    })
    
  }
   else {
    console.log("Invalid Request");
    
  }
}





}


