/*
@license
Copyright (c) 2018 Eduardo Echeverria. All rights reserved.
This code should no be modified and/or distributed without explicit permission from Eduardo Echeverria.
Author: Eduardo Echeverria <@eddiemachete>
*/

'use strict';

import { html, LitElement } from '@polymer/lit-element';
import { TemplateResult } from 'lit-html';

export class EmSeLadderUiDeveloper extends LitElement {
  static get is() { return 'em-se-ladder-ui-developer'; }

  public _render(props: any): TemplateResult {
    return html`
      <style>
        :host {
          display: inline-block;
          font-family: Segoe UI,CalibriLight,Helvetica Neue,Arial,sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        h1 {
            font-weight: 200;
        }
      </style>
      <!-- shadow DOM goes here -->
      <h1>${props.firstName} ${props.lastName}</h1>
      <div class="projects">
        <slot></slot>
      </div>
    `;
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      firstName: String,
      lastName: String
    };
  }
}

customElements.define(EmSeLadderUiDeveloper.is, EmSeLadderUiDeveloper);