import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { AdminloginPage } from '../adminlogin/adminlogin';

/**
 * Generated class for the AdminregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminregister',
  templateUrl: 'adminregister.html',
})
export class AdminregisterPage {
  username:any;
  password:any;
  Reg: AbstractControl;
  pass:AbstractControl;
  forma:FormGroup;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private http:Http) {
    this.forma = fb.group({
 
      Reg: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]+$')]],
      pass:['',[Validators.required, Validators.minLength(8)]]
    });
    
    this.Reg = this.forma.controls['Reg'];
    this.pass=this.forma.controls['pass'];
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminregisterPage');
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

}
