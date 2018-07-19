/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';
import { Developer, ProjectContributions } from '../core';

export class App extends LitElement {
  static get is() { return 'em-se-ladder-ui-app'; }

  public _render(props: any): TemplateResult {
    return html`
      <style>
        :host {
          display: block;
          font-family: Segoe UI,CalibriLight,Helvetica Neue,Arial,sans-serif;
          -webkit-font-smoothing: antialiased;
        }
      </style>
      <!-- shadow DOM goes here -->
      <em-se-ladder-ui-developer firstName="${this.developerFirstName}"
                                 lastName="${this.developerLastName}">
        ${this.projectContributions.map(
          (pcs) => html`<em-se-ladder-ui-contribution projectContributions="${pcs}"></em-se-ladder-ui-contribution>`
        )}
      </em-se-ladder-ui-developer>
    `;
  }

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

    this.requestRender();
  }
}

customElements.define(App.is, App);