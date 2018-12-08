import { Injectable } from "@angular/core";
import { API } from "../pages/constants";
import { HttpClient } from "@angular/common/http";
import { Application } from "../models/Application";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApplicationService {

  private url: string = `${API}/application`;

  constructor(public http: HttpClient) { }

  public loadApps() : Observable<Application[]>{
    return this.http.get<Application[]>(this.url + '/');
  }

  public saveOrUpdate(application: Application): Observable<Application> {
    return this.http.post<Application>(this.url, application);
  }

}
