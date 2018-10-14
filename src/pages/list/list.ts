import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from "jquery";
import * as _ from 'lodash';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  // userArr = [{
  //   userId: "0001",
  //   userName: "Rajesh",
  //   users: [{
  //     userId: "0002",
  //     userName: "Vinod",
  //     users: [{
  //       userId: "0012",
  //       userName: "User1"
  //     }, {
  //       userId: "0013",
  //       userName: "User2"
  //     }, {
  //       userId: "0014",
  //       userName: "User3"
  //     }, {
  //       userId: "0015",
  //       userName: "User4"
  //     }, {
  //       userId: "0016",
  //       userName: "User5"
  //     }, {
  //       userId: "0017",
  //       userName: "User6"
  //     }, {
  //       userId: "0018",
  //       userName: "User7"
  //     }]
  //   }, {
  //     userId: "0003",
  //     userName: "Hiren",
  //     users: [{
  //       userId: "0006",
  //       userName: "Abhijeet",
  //       users: [{
  //         userId: "0007",
  //         userName: "Bharat"
  //       }, {
  //         userId: "0009",
  //         userName: "Nikhil"
  //       }, {
  //         userId: "0010",
  //         userName: "Ashwini"
  //       }, {
  //         userId: "0011",
  //         userName: "Shivaji"
  //       }]
  //     }]
  //   }, {
  //     userId: "0004",
  //     userName: "Sanchit"
  //   }, {
  //     userId: "0005",
  //     userName: "Aarif"
  //   }]
  // }]
  userArr: any = [];
  filterUser = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.getUserTree('1')
  }

  getUserTree(id) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    this.http.get("http://admin.findacross.com/index.php/json/getTree?id=" + id, { headers: headers }).subscribe(data => {
      console.log('my data: ', data);
      this.userArr = data;
      let gval = _.groupBy(this.userArr, 'parentid');
      this.filterUser = gval[1];
      this.filterUser.forEach(element => {
        console.log(element)
        element.users = gval[element.id];
        element.users.forEach(element => {
          element.users = gval[element.id];
        });
      });
      console.log("aaaa", this.filterUser);

    })
  }
}
