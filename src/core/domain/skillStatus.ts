/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { Skill } from "./skill";

export class SkillStatus {
    public aquired: string;
    public lastUsed: string;
    public proficiency: string;
    public skill: Skill;
    
    public static get is(): string {
        return "em-se-ladder-core.SkillStatus";
    }

    public constructor(aquired: string, lastUsed: string, proficiency: string, skill: Skill) {
        this.aquired = aquired;
        this.lastUsed = lastUsed;
        this.proficiency = proficiency;
        this.skill = skill;
    }
}