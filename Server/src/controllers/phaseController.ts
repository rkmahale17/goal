

import { Request, Response } from "express";
import { IPhase, Phase } from "../models/phase";

export class PhaseController {

    public async getPhases(req: Request, res: Response): Promise<void> {
        const phase = await Phase.findOne({ userId: req.params.id, goalId: req.params.goalId});
        if (phase === null) {
            res.sendStatus(404);
        } else {
            res.json(phase);
        }
    }

    public async getPhaseWithId(req: Request, res: Response): Promise<void> {
        const phase = await Phase.findOne({ userId: req.params.id, goalId: req.params.goalId }, { phases: { $elemMatch: { "_id": req.params.phaseId } } });
        if (phase === null) {
            res.sendStatus(404);
        } else {
            res.json(phase.phases[0]);
        }
    }

    public async createPhase(req: Request, res: Response): Promise<void> {
        const data = await Phase.findOneAndUpdate({ userId: req.params.id, goalId: req.params.goalId }, { $push: { "phases": req.body } });
        if (data !== null) {
            data.phases.push(req.body);
            res.send(data);
        } else {
            res.sendStatus(422);
        }
    }
}
