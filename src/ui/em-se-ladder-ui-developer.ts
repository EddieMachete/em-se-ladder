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

export class EmSeLadderUiDeveloper extends HTMLElement {
  public static get is() {
    return 'em-se-ladder-ui-developer';
  }

  public static get observedAttributes(): string[] {
    return [
      'developer-name'
    ];
  }

  private template: string = `
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
    <h1 developer-name></h1>
    <div class="projects">
      <slot></slot>
    </div>
  `;

  public constructor() {
    super();
  }
  
  public attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string,
    namespace: string,
  ): void {
    if (oldValue === newValue) {
      return;
    }

    if (name === 'developer-name') {
      return;
    }
  }
}

customElements.define(EmSeLadderUiDeveloper.is, EmSeLadderUiDeveloper);