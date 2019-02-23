import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ItemSliding } from 'ionic-angular';
import { Http } from '@angular/http';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the FrontpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frontpage',
  templateUrl: 'frontpage.html',
})
export class FrontpagePage {
data:any;
items:any;
naam:any;
duedata:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http) {
    this.data=navParams.get('data');
    console.log(this.data);
let body = {
  fp:this.data
}
    this.http.post('http://localhost:3000/check',body).subscribe(response=>{console.log(response.json())
    
    if(response.json()!=null){
      this.items=response.json();
  alert("successfully submited");
  
  
}
else{alert("failed");}
})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrontpagePage');
  }
  p1(item) {
    this.navCtrl.push(PaymentPage,{data:item})
  }

}
