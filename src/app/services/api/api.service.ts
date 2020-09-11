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

  getEditingGoal() {
    const goal = localStorage.getItem('Goal');
    return JSON.parse(goal);
  }


  setEditingGoal(item) {
    localStorage.setItem('Goal', JSON.stringify(item));
  }

  getEditingPhase() {
    const phase = localStorage.getItem('Phase');
    return JSON.parse(phase);
  }


  setEditingPhase(item) {
    localStorage.setItem('Phase', JSON.stringify(item));
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

  // get all goals related to the person
  public getGoals(userId): Observable<any> {
    console.log(this.getToken());
    return this.http.get(apiUrl.getGoals(userId), { headers : this.headers});
  }


  public login(body: any) {
    return this.http.post(apiUrl.login(), body );
  }


  public createGoal(userId, body: any) {
    return this.http.post(apiUrl.createGoal(userId), body, {headers: this.headers});
  }

  public getSingleGoal(userId, goalId, body: any) {
    return this.http.post(apiUrl.getSingleGoal(userId,goalId), body, { headers: this.headers });
  }

  public getPhase(userId, goalId) {
    return this.http.get(apiUrl.createPhase(userId, goalId), { headers: this.headers });
  }

  public createPhase(userId, goalId, body: any) {
    return this.http.post(apiUrl.createPhase(userId, goalId), body, { headers: this.headers });
  }
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

   getPdf() {
      const options = {
        responseType: 'blob' as 'json'
      };
    return this.http.get('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', options);
  
  }

}
