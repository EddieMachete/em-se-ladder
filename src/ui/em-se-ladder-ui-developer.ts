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