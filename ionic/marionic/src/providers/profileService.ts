import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../pages/constants';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/Profile';

@Injectable()
export class ProfileService {
  private url: string = `${API}/profile`;

  constructor(public http: HttpClient) { }

  public loadProfiles() : Observable<Profile[]>{
    return this.http.get<Profile[]>(this.url + '/');
  }
}
