/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

import { Company } from "./company";

'use strict';

export class Project {
    public code: string;
    public company: Company;
    public description: string;
    public name: string;
    
    public static get is(): string {
        return "em-se-ladder-core.Project";
    }

    public constructor(code: string, company: Company, description: string, name: string) {
        this.code = code;
        this.company = company;
        this.description = description;
        this.name = name;
    }
}