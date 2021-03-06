import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
username:any;
password:any;
Reg: AbstractControl;
pass:AbstractControl;
forma:FormGroup;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private http:Http ) {
    this.forma = fb.group({
 
      Reg: ['', [Validators.required, Validators.minLength(15), Validators.pattern('^[A-Z0-9]+$')]],
      pass:['',[Validators.required, Validators.minLength(8)]]
    });
    
    this.Reg = this.forma.controls['Reg'];
    this.pass=this.forma.controls['pass'];
  
  }

  register(){
    let body = {
      username:this.username,
      password:this.password
    }
    this.http.post('http://localhost:3000/regcheck',body).subscribe(response=>{console.log(response.json())
    if(response.json().status==200){
      alert("successfully submited");
      this.navCtrl.setRoot(HomePage)
    }
    else{
      if(response.json().status==500){
        alert("user already exists");
      }
    }
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
