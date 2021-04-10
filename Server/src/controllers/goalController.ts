
import { Request, Response } from "express";
import { IGoals, Goal, IGoal, goalSchema } from "../models/goal";
import { Phase } from "../models/phase";

export class GoalController {

    public async getGoals(req: Request, res: Response): Promise<void> {
        const data = await Goal.findOne({ userId: req.params.id });
        if (data !== null) {
            res.json(data);
        } else {
            res.sendStatus(404);
        }
    }

    public async getGoaltWithId(req: Request, res: Response): Promise<void> {
        const goal = await Goal.findOne({ userId: req.params.id }, { goals: { $elemMatch: { "_id": req.params.goalId } } });
        if (goal === null) {
            res.sendStatus(404);
        } else {
            res.json(goal.goals[0]);
        }
    }

    public async createGoal(req: Request, res: Response): Promise<void> {
        console.log(req.params, 'createGoal')
        const data = await Goal.findOneAndUpdate({ userId: req.params.id }, { $push: { goals: req.body } });
        if (data) {
            let USER_GOALS = await Goal.findOne({ userId: req.params.id });
            let totalGoals = USER_GOALS.goals.length;
            let goal = USER_GOALS.goals[totalGoals - 1];
            await Phase.create({ userId: req.params.id, goalId: goal._id, phases:[]})
            res.send(USER_GOALS.goals[totalGoals-1]);
        } else {
            res.sendStatus(404);
       }
    }

    public async updateGoal(req: Request, res: Response): Promise<void> {
        // const data = await Phase.findOneAndUpdate({ userId: req.params.id, goalId: req.params.goalId }, { $push: { "phases": req.body } });
        const goal = await Goal.findOneAndUpdate(
            { userId: req.params.id, "goals._id": req.params.goalId }, {
                $set: {
                    "goals.$.title": req.body.title,
                    "goals.$.description": req.body.description,
                    "goals.$.startDate": req.body.startDate,
                    "goals.$.endDate": req.body.endDate,
                    "goals.$.reminder": req.body.reminder,
                }
            });
        if (goal === null) {
            res.sendStatus(404);
        } else {
            const goalDetail = { _id: req.params.id, goal };
            res.json({ status: res.status, data: goalDetail });
        }
    }
    // Delete Goal

    public async deleteGoal(req: Request, res: Response): Promise<void> {
        console.log('delete goal')
        const goal = await Goal.update({ userId: req.params.id }, {
            $pull: { goals: { _id: req.params.goalId } }
        });
        if (goal === null) {
            res.sendStatus(404);
        } else {
            res.json({ response: "Goal deleted Successfully" });
        }
    }
}