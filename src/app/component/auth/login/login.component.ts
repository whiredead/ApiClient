import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  loginForm: FormGroup = new FormGroup({});
  submitted: boolean = false;
  errorMessages: string[]=[];

  constructor(private formBuilder: FormBuilder, private authService: AuthService,private route:Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z_]{2,3}$')]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.submitted = true;
    console.log("clicked")
    this.errorMessages=[];
    if (this.loginForm.valid) {
      console.log("fom valide")

      //this.isProcessing = true; // Show spinner
      
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          // Handle login response
          console.log(response)
          this.route.navigateByUrl('/')
        },
        error: (error: any) => {
          console.log(error)
          this.errorMessages=error.error.value.message;
        },
        complete: () => {
          //this.isProcessing = false; // Hide spinner
        }
      });
    }
  }
}
