import { Component } from '@angular/core';
import { ListPage } from '../../pages/list/list';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController) { }

  changePage() {
    this.navCtrl.setRoot(ListPage);
  }

}
