/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { iProjectContributionsModel } from "./iProjectContributionsModel";

export interface iDeveloperModel {
    firstName: string;
    lastName: string;
    projectContributions: iProjectContributionsModel[];
    skillsStatus: { code: string, aquired: string, lastUsed: string, proficiency: string }[];
}