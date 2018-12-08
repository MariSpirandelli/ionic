import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonListPage } from '../person-list/person-list';
import { ApplicationListPage } from '../application-list/application-list';
import { UserProfilePage } from '../user-profile/user-profile';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1 = PersonListPage.name;
  tab2 = ApplicationListPage.name;
  tab3 = UserProfilePage.name;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
