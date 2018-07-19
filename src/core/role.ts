/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { Salary } from './salary';
import { Skill } from './skill';

export class Role {
    public code: string;
    public description: string;
    public expectations: string;
    public experience: number;
    public name: string;
    public ordinal: number;
    public salary: Salary;
    public skills: Skill[];
    
    public static get is(): string {
        return "em-se-ladder-core.Role";
    }

    public constructor() {
        this.skills = [];
    }
}