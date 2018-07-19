/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { ProjectContributions } from './projectContributions';
import { SkillStatus } from './skillStatus';

export class Developer {
    public static get is(): string {
        return "em-se-ladder-core.Developer";
    }

    public firstName: string;
    public lastName: string;

    private _skillsStatus: SkillStatus[];
    private _projectContributions: ProjectContributions[];

    public get projectContributions(): ProjectContributions[] {
        return this._projectContributions.splice(0);
    }

    public get skillsStatus(): SkillStatus[] {
        return this._skillsStatus.splice(0);
    }

    public constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._projectContributions = [];
        this._skillsStatus = [];
    }

    public addProjectContributions(projectContributions: ProjectContributions): void {
        this._projectContributions.push(projectContributions);
    }

    public addSkillStatus(skillStatus: SkillStatus): void {
        this._skillsStatus.push(skillStatus);
    }
}