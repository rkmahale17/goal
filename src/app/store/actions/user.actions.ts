// Section 1
import { Action } from '@ngrx/store'
import { IUser } from '../../models/users.model'

// Section 2
export const Add_User = '[User] Add';
export const Remove_User = '[User] Add'

// Section 3
export class AddUser implements Action {
    readonly type = Add_User

    constructor(public payload: [IUser]) { }
}

export class RemoveUser implements Action {
    readonly type = Remove_User


    constructor(public payload: [{}]) { }
}



// Section 4
export type Actions = AddUser | RemoveUser