import { IUser } from './../models/users.model';
export interface AppState {
    readonly user: [IUser];
}