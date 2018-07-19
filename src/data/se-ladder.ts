/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/
'use strict';

import { iRoleModel } from './iRoleModel';

export const seLadder: iRoleModel[] = [
    {
        code: 'sde-1',
        name: 'Software Development Engineer I',
        ordinal: 1,
        description: 'Creates complex solutions to simple problems.  Straight out of college.  Education has not prepared you to work in a professional team environment with money on the line and customers that are not figments of a professor\'s imagination.',
        experience: 0,
        salary: {
            dateChecked: '2018-05-30',
            comments: 'Information retrieved from LinkedIn Salaries',
            median: 51000
        },
        expectations: 'Work towards independence. It will likely take you two to three years. Do not try to save the world. Do not try to impress your vice president. Do your job. Do it well. When something is broken, fix it. Show your manager and your peers that you can handle assignments and get past roadblocks on your own. Handling assignments on your own does not mean doing so in isolation, it means knowing what questions to ask, who can answer them, and how to get the answers.',
        skills: [
            {
                code: 'formal-training',
                experience: 0
            }
        ]
    },
    {
        code: 'sde-2',
        name: 'Software Engineer II',
        ordinal: 2,
        description: 'Creates simple solutions to simple problems.',
        experience: 3,
        salary: {
            dateChecked: '2018-05-30',
            comments: 'Information retrieved from LinkedIn Salaries',
            median: 73000
        },
        expectations: 'You can handle any individual assignment with little direction. You still ask plenty of questions and keep your manager informed, but you are the initiator. No one has to tell you what to do.',
        skills: [
            {
                code: 'independence',
                experience: 3
            }
        ]
    },
    {
        code: 'sde-3',
        name: 'Software Engineer III',
        ordinal: 3,
        description: 'Creates simple solutions to simple problems.',
        experience: 5,
        salary: {
            dateChecked: '2018-05-30',
            comments: 'Information retrieved from LinkedIn Salaries',
            median: 105000
        },
        expectations: 'Expected to be very reliable.  Can lead small teams.  Provides significant architecture design input, many times responsible for the whole design.',
        skills: []
    },
    {
        code: 'senior-sde',
        name: 'Senior Software Engineer',
        ordinal: 4,
        description: 'Creates simple solutions to complex problems.  Engineers are expected to make it to the team leadership stage, typically after three to five years of independence.',
        experience: 5,
        salary: {
            dateChecked: '2018-05-30',
            comments: 'Information retrieved from LinkedIn Salaries',
            median: 109000
        },
        expectations: 'A leader is not necessarily a people manager but their impact extends beyond themselves and their own work. Their influence guides the work of teammates (for example, mentoring, setting the example others follow, making broad design decisions that stick, and establishing quality practices that stick).  Encouragement and influence skills set them apart.',
        skills: [
            {
                code: 'team-leadership',
                experience: 0
            }
        ]
    },
    {
        code: 'principal-sde',
        name: 'Staff Software Engineer',
        ordinal: 5,
        description: 'Makes complex problems disappear.  Discipline manager, group manager, architect, or core technology guru.',
        experience: 0,
        salary: {
            dateChecked: '2018-05-30',
            comments: 'Information retrieved from LinkedIn Salaries',
            median: 128000
        },
        expectations: 'You get here by thinking and influencing outside the confines of your team.  At this level, ambition is a key element.',
        skills: [
            {
                code: 'group-leadership',
                experience: 0
            }
        ]
    }
];