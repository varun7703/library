import { Component } from '@angular/core';
import { NavController, DeepLinkMetadata } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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



  constructor(public navCtrl: NavController, private http: Http) {

    
    this.http.get("http://localhost:3000/display").subscribe(data=>{
      this.items=data.json();
      console.log(data);
      }) 
  
    var date = new Date();

      
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

}
