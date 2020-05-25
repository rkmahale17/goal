import { Document, Schema, Model, model, Error } from "mongoose";

export interface IGoal extends Document {
    userId: string;
    name: string;
    email: string;
    mobile: string;
    goals: Array<IGoals>;
}

export interface IGoals {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    reminder: boolean;
}


export const goalSchema = new Schema({
    userId: String,
    name: String,
    email: String,
    mobile: String,
    goals: [{
        title: String,
        description: String,
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        reminder: Boolean
    }]
});


export const Goal: Model<IGoal> = model<IGoal>("Goal", goalSchema);