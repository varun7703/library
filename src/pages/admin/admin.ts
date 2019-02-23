import { Component } from '@angular/core';
import { NavController, DeepLinkMetadata } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AdminloginPage } from '../adminlogin/adminlogin';
@Component({
  selector: 'page-home',
  templateUrl: 'admin.html'
})
export class AdminPage {
items=[];
book:any;
due:any;
issue:any;
username:any;
formb: FormGroup;
 book1: AbstractControl;
 due1: AbstractControl;
 issue1: AbstractControl;
 user1: AbstractControl;

  constructor(public navCtrl: NavController, private http: Http, public fb:FormBuilder) {
    this.formb = fb.group({
 
      user1: ['', [Validators.required, Validators.minLength(14), Validators.pattern('^[RA0-9]+$')]],
      book1:['',[Validators.required]],
      due1:['',[Validators.required]],
      issue1:['',[Validators.required]]
    });
    
    this.book1 = this.formb.controls['book1'];
    this.user1=this.formb.controls['user1'];
    this.due1 = this.formb.controls['due1'];
    this.issue1 = this.formb.controls['issue1'];
      
  }
getdata(){
  let body = {
book:this.book,
due:this.due,
issue:this.issue,
username:this.username

  }
this.http.post('http://localhost:3000/books',body).subscribe(response=>{console.log(response.json())
if(response.json().status==200){
  alert("successfully submited");
  
}
else{alert("failed");}
})
}

deldata(){
  let body = {
    book:this.book
  }
  this.http.post('http://localhost:3000/delete',body).subscribe(response=>{console.log(response.json())
  if(response.json().status==200){
    alert("successfully deleted");
    
  }
  else{alert("failed");}
  })
}
a1(){
  this.navCtrl.setRoot(AdminloginPage);
}
}
