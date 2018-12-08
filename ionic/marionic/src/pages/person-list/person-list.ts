import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonService } from '../../providers/personService';
import { Person } from '../../models/Person';
import { PersonPage } from '../person/person';

@IonicPage()
@Component({
  selector: 'page-person-list',
  templateUrl: 'person-list.html',
})
export class PersonListPage {

  public people: Person[];
  public groups = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private personService: PersonService) {
  }

  public itemSelected(person: Person){
    this.navCtrl.push(PersonPage.name, {
      person: person 
    });
  }

  public newPerson(){
    this.itemSelected(null);
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter PersonListPage');
    this.personService.loadPeople().subscribe(
      (data) => {
        this.people = data;
        this.loadGroups();
      });
  }

  private loadGroups(){
    this.people.forEach(person => {
      let exists = this.groups.findIndex(x => x === person.name[0]) != -1;
      if(!exists){
        this.groups.push(person.name[0]);
      }
    });

    this.groups.sort( (a, b) => a > b ? 1 : -1 );
  }

}
