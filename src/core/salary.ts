/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

export class Salary {
    public comments: string;
    public dateChecked: Date;
    public median: number;
    
    public static get is(): string {
        return "em-se-ladder-core.Salary";
    }

    public constructor(comments, dateChecked, median) {
        this.comments = comments;
        this.dateChecked = dateChecked;
        this.median = median;
    }
}