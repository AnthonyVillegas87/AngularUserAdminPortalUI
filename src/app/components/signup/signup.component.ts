import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  type: string = "password"
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash";
  signUpForm!: FormGroup;
constructor(private fb : FormBuilder, private auth: AuthenticationService) {
  
}

ngOnInit(): void {
  this.signUpForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
}

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"
    this.isText ? this.type = "text" : this.type = "password"
  }


  signUp() {
    if(this.signUpForm.valid) {

      this.auth.signUp(this.signUpForm.value).subscribe({
        next:(res => {
          alert(res.message);
          this.signUpForm.reset();
        }), 
        error: (err => {
          alert(err.message)
        })
      })


      console.log(this.signUpForm.value);
    } else {
      console.log("error");
      
    }
  }
}
