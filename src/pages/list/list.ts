import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
// import { BrowserTab } from '@ionic-native/browser-tab';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  userArr = [{
    userId: "0001",
    userName: "Rajesh",
    users: [{
      userId: "0002",
      userName: "Vinod",
      users: [{
        userId: "0012",
        userName: "User1"
      }, {
        userId: "0013",
        userName: "User2"
      }, {
        userId: "0014",
        userName: "User3"
      }, {
        userId: "0015",
        userName: "User4"
      }, {
        userId: "0016",
        userName: "User5"
      }, {
        userId: "0017",
        userName: "User6"
      }, {
        userId: "0018",
        userName: "User7"
      }]
    }, {
      userId: "0003",
      userName: "Hiren"
    }, {
      userId: "0004",
      userName: "Sanchit"
    }, {
      userId: "0005",
      userName: "Aarif"
    }]
  }, {
    userId: "0006",
    userName: "Abhijeet",
    users: [{
      userId: "0007",
      userName: "Bharat"
    }, {
      userId: "0009",
      userName: "Nikhil"
    }, {
      userId: "0010",
      userName: "Ashwini"
    }, {
      userId: "0011",
      userName: "Shivaji"
    }]
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }



    //   browserTab.isAvailable()
    //     .then(isAvailable => {
    //       if (isAvailable) {
    //         browserTab.openUrl('https://ionic.io');
    //       } else {
    //         // open URL with InAppBrowser instead or SafariViewController
    //       }
    //     });
    // }

  }
}
