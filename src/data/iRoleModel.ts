/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/
'use strict';

export interface iRoleModel {
    code: string;
    name: string;
    ordinal: number;
    description: string;
    experience: number;
    salary: {
        dateChecked: string;
        comments: string;
        median: number;
    };
    expectations: string;
    skills: { code: string, experience: number }[];
}