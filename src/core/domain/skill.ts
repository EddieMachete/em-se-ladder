/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

export class Skill {
    public code: string;
    public description: string;
    public name: string;
    public type: string;
    
    public static get is(): string {
        return "em-se-ladder-core.Skill";
    }

    public constructor(code: string, name: string, description: string, type: string) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.type = type;
    }
}