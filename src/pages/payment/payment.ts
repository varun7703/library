import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items=navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
