import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Person } from '../../models/Person';
import { ApplicationService } from '../../providers/applicationService';
import { Application } from '../../models/Application';
import { PersonService } from '../../providers/personService';
import { ProfileService } from '../../providers/profileService';
import { Profile } from '../../models/Profile';
import { TabsPage } from '../tabs/tabs';
import { HttpErrorResponse } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-person',
  templateUrl: 'person.html',
})
export class PersonPage {

  person: Person;
  birthday: any;
  applications: Application[];
  profiles: Profile[];

  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  pureResult: any;
  maskedId: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public personService: PersonService,
    public applicationService: ApplicationService,
    public profileService: ProfileService,
    public toastCtrl: ToastController) {
  }

  public isSelected(app, property){

    if(property === "applications"){
      return this.person[property].findIndex(item => item.id === app.id) != -1;
    }
    else{
      return this.person[property].id === app.id;
    }
  }

  public ionViewWillEnter(){
    this.applicationService.loadApps().subscribe((data)=>{
      this.applications = data;
    });

    this.profileService.loadProfiles().subscribe((data)=>{
      this.profiles = data;
    });

    this.person = this.navParams.get('person');

    if(!this.person){
      this.person = new Person();
    }else{
      this.birthday = new Date(this.person.birthday).toISOString();
      this.cpfFormat();
    }
  }

  public saveOrUpdate(){
    this.person.birthday = this.birthday;
    this.person.cpf = this.unFormat(this.person.cpf);
    this.personService.saveOrUpdate(this.person).subscribe(data => {
      const toast = this.toastCtrl.create({
        message: 'Person saved successfully',
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

  public cpfFormat(){
    if (!this.person.cpf) {
      return '';
    }
    const parts = this.unFormat(this.person.cpf).split(this.DECIMAL_SEPARATOR);
    this.pureResult = parts;
    if(parts[0].length <= 11){
      this.person.cpf = this.cpf_mask(parts[0]);
    }
  }

  private unFormat(val) {
    if (!val) {
        return '';
    }
    val = val.replace(/\D/g, '');

    if (this.GROUP_SEPARATOR === ',') {
        return val.replace(/,/g, '');
    } else {
        return val.replace(/\./g, '');
    }
  };

 private cpf_mask(v) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
  }


  public deletePerson(){
    this.personService.delete(this.person).subscribe(data => {
        const toast = this.toastCtrl.create({
          message: 'Person deleted successfully',
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
        message: 'Error deleting person',
        duration: 3000
      });
      toast.present();
    });
  }

}
