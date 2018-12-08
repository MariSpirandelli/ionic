import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplicationService } from '../../providers/applicationService';
import { Application } from '../../models/Application';
import { ApplicationPage } from '../application/application';

/**
 * Generated class for the ApplicationListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-application-list',
  templateUrl: 'application-list.html',
})
export class ApplicationListPage {

  applications: Application[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public applicationService: ApplicationService) {
  }

  ionViewWillEnter(){
    this.applicationService.loadApps().subscribe((data)=>{
      this.applications = data;
      console.log(this.applications);
    });
  }

  public newApplication(){
    this.editApp(null);
  }

  public editApp(application){
    this.navCtrl.push(ApplicationPage.name, {
      app: application
    });
  }

}
