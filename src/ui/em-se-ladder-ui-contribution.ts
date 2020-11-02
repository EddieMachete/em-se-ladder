/**
 * @license
 * Copyright (c) 2020 Eduardo Echeverría. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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