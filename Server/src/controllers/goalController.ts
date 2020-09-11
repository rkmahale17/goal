
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
            console.log(goal._id);
            await Phase.create({ userId: req.params.id, goalId: goal._id, phases:[]})
            res.send(USER_GOALS.goals[totalGoals-1]);
       }
    }

    public async updateGoal(req: Request, res: Response): Promise<void> {
        // const data = await Phase.findOneAndUpdate({ userId: req.params.id, goalId: req.params.goalId }, { $push: { "phases": req.body } });
        const goal = await Goal.replaceOne(
            { userId: req.params.id, 'goals': { _id: req.params.goalId }},
             req.body);
        if (goal === null) {
            res.sendStatus(404);
        } else {
            console.log(goal);
            const goalDetail = { productId: req.params.id, ...req.body };
            res.json({ status: res.status, data: goalDetail });
        }
    }

    // public async deleteProduct(req: Request, res: Response): Promise<void> {
    //     const product = await Goal.findOneAndDelete({ productId: req.params.id });
    //     if (product === null) {
    //         res.sendStatus(404);
    //     } else {
    //         res.json({ response: "Product deleted Successfully" });
    //     }
    // }
}