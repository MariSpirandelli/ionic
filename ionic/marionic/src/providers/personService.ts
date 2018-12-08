import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../pages/constants';
import { Person } from '../models/Person';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
  private url: string = `${API}/person`;

  constructor(public http: HttpClient) { }

  public loadPeople() : Observable<Person[]>{
    return this.http.get<Person[]>(this.url + '/');
  }

  public saveOrUpdate(person: Person) : Observable<Person>{
    return this.http.post<Person>(this.url, person);
  }

  public delete(person: Person) : Observable<{}>{
    let deleteUrl = `${this.url}/${person.id}`;
    return this.http.delete(deleteUrl);
  }
}
