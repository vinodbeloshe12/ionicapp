import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;
  adduser: any;
  user = {
    userId: Math.floor(Math.random() * 899999 + 100000),
    name: ''
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }



  createUserSubmit(data) {
    console.log("dddd", data);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // this.adduser = this.http.get('http://localhost/faback/index.php/json/getallcategory');
    this.http.post("http://admin.findacross.com/index.php/json/addUser", JSON.stringify(data), { headers: headers }).subscribe(data => {
      console.log('my data: ', data);
    })
  }
}
