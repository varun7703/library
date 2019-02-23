import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';


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

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    
  
  }

  register(){
    let body = {
      username:this.username,
      password:this.password
    }
    this.http.post('http://localhost:3000/pass',body).subscribe(response=>{console.log(response.json())
    if(response.json().status==200){
      alert("successfully submited");
      this.navCtrl.setRoot(HomePage)
    }
    else{alert("failed");}
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
