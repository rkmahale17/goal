import { Action } from '@ngrx/store';
import { IUser } from '../../models/users.model'
import * as UserActions from './../actions/user.actions';

// Section 1
const initialState: [IUser] = [{
    userId: '',
    name: 'Guest',
    email: '',
    mobile: '',
    goals: []
}];

// Section 2
export function reducer(state: IUser | [{}] = [initialState], action: UserActions.Actions) {

    // Section 3
    switch (action.type) {
        case UserActions.Add_User:
            state = action.payload;
            return state;
        case UserActions.Remove_User:
            state = action.payload;
            break;
        case UserActions.Set_Goals:
            state[0].goals = action.payload;
            break;

        default:
            return state;
    }
}
