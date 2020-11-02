/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { Project } from "./project";
import { Skill } from "./skill";

export class ProjectContributions {
    public project: Project;
    public contributions: string[];
    public skills: Skill[];
    
    public static get is(): string {
        return "em-se-ladder-core.ProjectContributions";
    }

    public constructor(project: Project) {
        this.project = project;
        this.contributions = [];
        this.skills = [];
    }
}