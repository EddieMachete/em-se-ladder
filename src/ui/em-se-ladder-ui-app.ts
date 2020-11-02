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

import { Developer, ProjectContributions } from '@core/domain';

export class App extends HTMLElement {
  public static get is() { return 'em-se-ladder-ui-app'; }

  private template: string = `
    <style>
      :host {
        display: block;
        font-family: Segoe UI,CalibriLight,Helvetica Neue,Arial,sans-serif;
        -webkit-font-smoothing: antialiased;
      }
    </style>
    <!-- shadow DOM goes here -->
    <em-se-ladder-ui-developer firstName=""
                                lastName="">
    <em-se-ladder-ui-contribution projectContributions=""></em-se-ladder-ui-contribution>
    </em-se-ladder-ui-developer>
  `;

  private developerFirstName: string = '';
  private developerLastName: string = '';
  private projectContributions: ProjectContributions[] = [];

  constructor() {
    super();
  }

  static get properties() {
    return {};
  }

  public stateChanged(state: { developer: Developer }): void {
    this.developerFirstName = state.developer.firstName;
    this.developerLastName = state.developer.lastName;
    this.projectContributions = state.developer.projectContributions;

    // this.requestRender();
  }
}

customElements.define(App.is, App);