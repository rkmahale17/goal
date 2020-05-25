import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.services';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public router: Router, private apiService: ApiService) { }

    canActivate() {
        if (this.auth.isAuthenitcated()) {
            return true;
        } else {
            this.router.navigateByUrl('Login');
        }
    }
}
