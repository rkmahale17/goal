import { Component } from '@angular/core';
import { ApiService, AuthService } from './services';
import { AddUser } from './store/actions/user.actions';
import { AppState } from './store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GOALS';
  constructor(private apiServices: ApiService, private authService: AuthService, private store: Store<AppState>) { }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    if (this.authService.isAuthenitcated()) {
      this.apiServices.getGoals(this.authService.getUserId()).subscribe((result) => {
        this.store.dispatch(new AddUser([result]));      });
    }
  }
}
