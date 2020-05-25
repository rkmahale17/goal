import { Document, Schema, Model, model, Error } from "mongoose";

export interface IPhase extends Document {
    userId: string;
    goalId: string;
    phases: Array<IPhases>;
}

export interface IPhases {
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
}


export const phaseSchema = new Schema({
    userId: String,
    goalId: String,
    phases: [{
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
    }]
});
export const Phase: Model<IPhase> = model<IPhase>("Phase", phaseSchema);