import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  startApp(){
    this.navCtrl.setRoot(TabsPage.name, {}, {
      animate: true,
      direction: 'forward'
    });
  }

}
