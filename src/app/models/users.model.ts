import { IGoals } from 'backend/src/models/goal';

export interface IUser {
    userId: string;
    name: string;
    email: string;
    mobile: string;
    goals: Array<IGoals> | [];
}