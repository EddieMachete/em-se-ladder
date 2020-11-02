/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { Salary } from './salary';
import { Skill } from './skill';

export class Company {
    public code: string;
    public description: string;
    public name: string;
    
    public static get is(): string {
        return "em-se-ladder-core.Company";
    }

    public constructor(code: string, description: string, name: string) {
        this.code = code;
        this.description = description;
        this.name = name;
    }
}