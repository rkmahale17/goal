import { Component } from '@angular/core';
import { LoaderService } from '../Loader/loader.service'
import { ApiService } from '../../services';

import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'backend/lib/models/user';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss'],
})
export class LandingComponent {
  tutorials: Observable<[IUser]>;

  feature = ['Thought Reminder', 'Share Pamyat', 'Daily Log', 'Categorization'];
  constructor(
    private loaderService: LoaderService,
    private apiService: ApiService,
    private router: Router,
    private store: Store<AppState>
  ) {

  }
  ngOnInit() {


  }
}
