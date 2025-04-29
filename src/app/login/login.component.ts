import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reqpwd:any;
  loginForm:FormGroup=new FormGroup({});
  constructor(private fb:FormBuilder,private router:Router){
    this.loginForm=fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }

  checklogin(){
    this.reqpwd=this.loginForm.value.username.slice(0,3)+"@123";
    if(this.loginForm.value.username=="admin" && this.loginForm.value.password=="admin@123"){
      
      Swal.fire({
        title: "Good job!",
        text: "HURRAY! NAVIGATING TO ADMIN DASHBOARD",
        icon: "success"
      });
      localStorage.setItem("logged",JSON.stringify(this.loginForm.value))
      this.router.navigateByUrl("/admin/home")

    }
    else if(this.reqpwd==this.loginForm.value.password){
      Swal.fire({
        title: "Good job!",
        text: "HURRAY! NAVIGATING TO USER DASHBOARD",
        icon: "success"
      });
      localStorage.setItem("logged",JSON.stringify(this.loginForm.value))
      this.router.navigateByUrl("/user/home")

    }
    else{
      Swal.fire({
        title: "Oops!",
        text: "username or password is invalid",
        icon: "error"
      });
      
      
    }
  }

}
