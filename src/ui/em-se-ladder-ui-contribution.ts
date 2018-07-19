/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
import { Project, ProjectContributions, Skill } from '../core';

export class EmSeLadderUiContribution extends LitElement {
    static get is() { return 'em-se-ladder-ui-contribution'; }

    private companyName: string ='';
    private projectDescription: String = '';
    private projectName: String = '';
    private contributions: string[] = [];
    private skills: Skill[] = [];

    public set projectContributions(projectContributions: ProjectContributions) {
        const project: Project = projectContributions ? projectContributions.project : null;

        this.projectDescription = project ? project.description : '';
        this.projectName = project ? project.name : '';
        this.companyName = project ? project.company.name : '';
        this.contributions = projectContributions ? projectContributions.contributions : [];

        this.requestRender();
    }

    public _render(props: any): TemplateResult {
        return html`
            <style>
                :host {
                    background: var(--nav-background-color, #FFF); /* white is the fallback value */
                    display: inline-block;
                }
            </style>
            <!-- shadow DOM goes here -->
            <div class="date">2009-02-01</div>
            <div>
                <div>${this.projectName}</div>
                <div>Rick Hansen Institute</div>
                <div>${this.projectDescription}</div>
                <div>My contributions to this project include:</div>
                <div>
                    ${this.contributions.map((c: string) => html`<div>${c}</div>`)}
                </div>
                <div>Skills developed:</div>
                <div>
                    ${this.skills.map((s: Skill) => html`<div>${s.description}</div>`)}
                </div>
            </div>
        `;
    }

    constructor() {
        super();
    }

    static get properties() {
        return {};
    }
}

customElements.define(EmSeLadderUiContribution.is, EmSeLadderUiContribution);