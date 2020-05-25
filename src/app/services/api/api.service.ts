import { Injectable } from "@angular/core";
import { Observable } from "rxjs/";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiUrl } from './url.constant';
import { TOKEN_NAME } from '../auth/auth.constant';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }
  headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': `Bearer ${this.getToken()}` });

  public addAchievement(userId, body): Observable<any> {
    return this.http.put(apiUrl.createAchievement(userId), body);
  }
  public registerUser(body): Observable<any> {
    return this.http.post(apiUrl.registerUser(), body);
  }
  /**
   * getUserInfo
   */
  public getUserInfo(userId): Observable<any> {
    return this.http.get(apiUrl.getuser(userId));
  }

  public login(body: any) {
    return this.http.post(apiUrl.login(), body );
  }

  private handleError(error: Response | any) {
    console.error("ApiService::handleError", error);
    return Observable.throw(error);
  }
}
