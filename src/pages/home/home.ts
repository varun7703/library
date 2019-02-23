import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';;
import { FrontpagePage } from '../frontpage/frontpage';
import { AdminPage } from '../admin/admin';
import { RegisterPage } from '../register/register';
import {Http} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: any;
  forma: FormGroup;
  password:any;
  Reg: AbstractControl;
  pass:AbstractControl;
  
  constructor(public navCtrl: NavController, public np: NavParams, public fb: FormBuilder, private http:Http) {
    this.forma = fb.group({
 
      Reg: ['', [Validators.required, Validators.minLength(15), Validators.pattern('^[A-Z0-9]+$')]],
      pass:['',[Validators.required]]
    });
    
    this.Reg = this.forma.controls['Reg'];
    this.pass=this.forma.controls['pass'];
  }
  submit(){
    let body = {
      password:this.password,
      username:this.name
    }
        this.http.post('http://localhost:3000/passcheck',body).subscribe(response=>{console.log(response.json())
        
        if(response.json().status==400){
          alert("Password incorrect");
    }
    else{
      this.navCtrl.setRoot(FrontpagePage,{ data:this.name})
      }
    })
      
     
  }
  admin(){
    this.navCtrl.push(RegisterPage)
   
}
  
}