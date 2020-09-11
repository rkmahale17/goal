import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { IUser } from 'src/app/models/users.model';


@Injectable()
export class UserService {
    userInfo: Observable<[IUser]>;
    constructor(private store: Store<AppState>) {
        this.userInfo = store.select('user');
    }
    getUserInfo() {
        let userData;
        this.userInfo.subscribe(user => {
           userData = user[0];
       });
        return userData;
    }
}
