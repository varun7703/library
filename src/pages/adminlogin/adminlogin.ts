import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { FrontpagePage } from '../frontpage/frontpage';
import { AdminPage } from '../admin/admin';
import { RegisterPage } from '../register/register';
import {Http} from '@angular/http';
import { AdminregisterPage } from '../adminregister/adminregister';


/**
 * Generated class for the AdminloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminlogin',
  templateUrl: 'adminlogin.html',
})
export class AdminloginPage {
  name: any;
  forma: FormGroup;
  password:any;
  Reg: AbstractControl;
  pass:AbstractControl;
  

  constructor(public navCtrl: NavController, public np: NavParams, public fb: FormBuilder, private http:Http) {
    this.forma = fb.group({
 
      Reg: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]+$')]],
      pass:['',[Validators.required,Validators.minLength(8)]]
    });
    
    this.Reg = this.forma.controls['Reg'];
    this.pass=this.forma.controls['pass'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminloginPage');
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
      this.navCtrl.setRoot(AdminPage)
      }
    })
      
     
  }
  admin(){
    this.navCtrl.push(AdminregisterPage)
   
}

}
