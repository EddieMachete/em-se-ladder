'use strict';

import { Project, ProjectContributions, Skill } from '@core/domain';

export class EmSeLadderUiContribution extends HTMLElement {
  public static get is() {
    return 'em-se-ladder-ui-contribution';
  }

  private companyName: string = '';
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

    // this.requestRender();
  }

  private template: string = `
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
                ${this.contributions.map((c: string) => `<div>${c}</div>`)}
            </div>
            <div>Skills developed:</div>
            <div>
                ${this.skills.map((s: Skill) => `<div>${s.description}</div>`)}
            </div>
        </div>
    `;

  constructor() {
    super();
  }

  static get properties() {
    return {};
  }
}

customElements.define(EmSeLadderUiContribution.is, EmSeLadderUiContribution);