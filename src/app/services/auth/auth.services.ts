import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { IUser } from 'src/app/models/users.model';
import { ApiService } from '../api/api.service';
import { AddUser } from '../../store/actions/user.actions';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TOKEN_NAME } from './auth.constant';
import { IToken } from '../interfaces/common.Interface';
import { LoaderService } from '../../components/Loader/loader.service';


@Injectable()
export class AuthService {

    userInfo: Observable<[IUser]>;
    constructor(private store: Store<AppState>,
                private apiService: ApiService, private router: Router, private http: HttpClient,
                private loaderService: LoaderService) {
        this.userInfo = store.select('user');
    }
    getUserInfo() {
        let userData;
        this.userInfo.subscribe(user => {
            userData = user[0];
        });
        return userData[0];
    }


    getToken(): string {
        return localStorage.getItem(TOKEN_NAME);
    }

    setToken(token: string): void {
        localStorage.setItem(TOKEN_NAME, token);
    }

    login(body, loaderService) {

        this.apiService
            .login(body)
            .subscribe((result: IToken) => {
                loaderService.hideLoader();
                this.loaderService.hideLoader();
                if (result.token) {
                    // this.store.dispatch(new AddUser([result]));
                    this.setToken(result.token);
                    this.router.navigateByUrl('/Home');
                } else {
                    alert('Problem in Id Password');
                    this.router.navigateByUrl('/Login');
                }
            })
            ;

    }

    register(body) {
        this.apiService
            .registerUser(body)
            .subscribe((result) => {
                this.setToken(result.token);
                this.router.navigateByUrl('/Home');
            });


    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(TOKEN_NAME);
        this.router.navigateByUrl('/');
    }

    isAuthenitcated() {
        const isToken = this.getToken();
        if (isToken) {
            return true;
        }
        return false;

    }

}
