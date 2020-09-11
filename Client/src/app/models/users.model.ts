import { IGoals } from './goal.model';

export interface IUser {
    userId: string;
    name: string;
    email: string;
    mobile: string;
    goals: Array<IGoals> | [];
};