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