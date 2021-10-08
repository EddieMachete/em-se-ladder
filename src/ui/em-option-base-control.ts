'use strict';

export class EMOptionBaseControl extends HTMLElement {
  public static get is() { return 'em-option-base-control'; }

  public static get observedAttributes(): string[] {
    return [];
  }

  private template: string = `
    <style>
      :host {
        display: block;
        font-family: Segoe UI,CalibriLight,Helvetica Neue,Arial,sans-serif;
        padding: 8px;
        -webkit-font-smoothing: antialiased;

        position: relative;
        z-index: 100;
      }

      :host([expanded]) [options] {
        box-shadow: 2px 2px 8px rgba(0, 0, 0, .4);
        display: contents;
        min-width: 280px;
        position: relative;
        z-index: 5;
      }

      [a] {
        position: relative;
      }

      [options] {
        display: none;
      }
    </style>
    <!-- shadow DOM goes here -->
    <button main-input>Select an option</button>
    <div a>
      <slot options></slot>
    </div>
  `;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this.template;

    shadowRoot.querySelector('[main-input]').addEventListener('click', (e: MouseEvent) => this.mainInputClicked(e));
  }

  private attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
    if (oldValue === newValue) return;

    switch (name) {
      // case EMOptionBaseControl.EXPANDED_ATTRIBUTE:
      //   break;
    }
  }

  private mainInputClicked(e: MouseEvent): boolean {
    if (this.hasAttribute('expanded')) {
      this.removeAttribute('expanded');
    } else {
      this.setAttributeNode(document.createAttribute('expanded'));
    }

    return true;
  }
}

customElements.define(EMOptionBaseControl.is, EMOptionBaseControl);
