/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { iDeveloperModel } from './iDeveloperModel';

export const developerData: iDeveloperModel = {
    firstName: 'Eduardo',
    lastName: 'Echeverria',
    projectContributions: [
        {
            projectCode: 'grp',
            contributions: [
                'Interaction and graphic design for the entire system.',
                'Most of the front-end development.',
                'Requirement gathering.',
                'Back-end development.',
            ],
            skills: ['goal-directed-design', 'c#']
        },
        {
            projectCode: 'isncsci-algorithm',
            contributions: [],
            skills: ['c#', 'goal-directed-design']
        }
    ],
    skillsStatus: [
        {
            code: 'c#',
            aquired: '2005-01-01',
            lastUsed: '',
            proficiency: 'high'
        },
        {
            code: 'goal-directed-design',
            aquired: '2003-07-01',
            lastUsed: '2012-08-12',
            proficiency: 'high'
        }
    ]
}