/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { iDeveloperModel } from './iDeveloperModel';
import { developerData as Eddie } from './eddie';
import { projectData } from './projects';
import { iProjectModel } from './iProjectModel';
import { iProjectContributionsModel } from './iProjectContributionsModel';
import { Company, Developer, Project, ProjectContributions } from '../core/domain';

export class DeveloperProvider {
    private developers: Developer[];
    private projects: Project[];
    private companies: Company[];

    public static get is(): string {
        return "em-se-ladder-data.DeveloperProvider";
    }

    public constructor() {
        this.companies = [
            new Company('rhi', '', 'Rick Hansen Institute')
        ];

        this.initializeProjects(this.companies);
        this.initializeDevelopers(this.projects);

        this.companies = [
            new Company('rhi', '', 'Rick Hansen Institute')
        ];
    }

    private initializeProjects(companies: Company[]): void {
        this.projects = projectData.map((model: iProjectModel) => this.getProjectFrom(model, companies));
    }

    private initializeDevelopers(projects: Project[]): void {
        this.developers = this.developerData.map((model: iDeveloperModel) => this.getDeveloperFrom(model, projects))
    }

    private getDeveloperFrom(developerModel: iDeveloperModel, projects: Project[]): Developer {
        const developer: Developer = new Developer(developerModel.firstName, developerModel.lastName);

        developerModel.projectContributions.forEach(
            (projectContributionModel: iProjectContributionsModel) => {
                const project: Project = projects.find((p: Project) => p.code === projectContributionModel.projectCode);

                if (project) {
                    const projectContributions: ProjectContributions = new ProjectContributions(project);
                    projectContributions.contributions = projectContributionModel.contributions.splice(0);
                    developer.addProjectContributions(projectContributions);
                }
            }
        );

        return developer;
    }

    private getProjectFrom(model: iProjectModel, companies: Company[]): Project {
        const companyCode: string = model.companyCode;
        const company: Company = companies.find((c: Company) => c.code === companyCode);
        return new Project(model.code, company, model.description, model.name);
    }

    public getDevelopers(): Developer[] {
        return this.developers;
    }

    private developerData: iDeveloperModel[] = [Eddie];
}