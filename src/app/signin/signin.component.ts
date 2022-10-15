import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

signinForm!:FormGroup

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.signinForm=this.formbuilder.group({
       
       email:[''],
       pass:['']
       
    }

    );
  }
signin()
{
  this.http.get('http://localhost:3000/user').subscribe((res:any)=>{
    const user = res.find((a:any)=>{
      return a.email===this.signinForm.value.email && a.pass===this.signinForm.value.pass;
    })
    if (user){
    alert('user exists')
    this.signinForm.reset();
  }else{
    alert('hey fool enter your correct password')
  }
  
  })
}
}
