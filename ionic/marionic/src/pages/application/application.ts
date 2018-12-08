import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Application } from '../../models/Application';
import { ApplicationService } from '../../providers/applicationService';
import { TabsPage } from '../tabs/tabs';
import { HttpErrorResponse } from '@angular/common/http';

/**
 * Generated class for the ApplicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-application',
  templateUrl: 'application.html',
})
export class ApplicationPage {

  application: Application;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public applicationService: ApplicationService
    , public toastCtrl: ToastController) {
  }

  public ionViewWillEnter(){
    this.application = this.navParams.get('app');

    if(!this.application){
      this.application = new Application();
    }
  }

  public saveOrUpdate(){
    this.applicationService.saveOrUpdate(this.application).subscribe(data => {
      const toast = this.toastCtrl.create({
        message: 'Application saved successfully',
        duration: 3000
      });
      toast.present();
      this.navCtrl.setRoot(TabsPage.name, {}, {
        animate: true,
        direction: 'forward'
      });      
    },
    (error: HttpErrorResponse) => {
      const toast = this.toastCtrl.create({
        message: 'Error saving person',
        duration: 3000
      });
      toast.present();
    });
  }

}
