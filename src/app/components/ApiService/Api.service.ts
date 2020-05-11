import { Injectable } from "@angular/core";
import { Observable } from "rxjs/";
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { apiUrl } from './ApiUrl.constant';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}

  public addAchievement(userId, body): Observable<any> {
    return this.http.put(apiUrl.createAchievement(userId), body);
  }
  public createUser(body): Observable<any> {
    return this.http.post(apiUrl.createuser(), body);
  }
  /**
   * getUserInfo
   */
  public getUserInfo(userId) {
    return this.http.get(apiUrl.getuser(userId));
  }

  public login(body: any) {
    return this.http.get(apiUrl.login(body.userName, body.password));
  }

  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return Observable.throw(error);
  }
}
