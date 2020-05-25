export interface IPhase {
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
