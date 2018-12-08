import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../providers/profileService';
import { Profile } from '../../models/Profile';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  public profiles: Profile[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private profileService: ProfileService) {
  }

  ionViewWillEnter(){
    this.profileService.loadProfiles().subscribe((data)=>{
      this.profiles = data;
    })
  }
}
