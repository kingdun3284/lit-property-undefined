import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('component-b')
export class ComponentB extends LitElement {
    @property({ type: Object }) config;
    otherConfig;
    connectedCallback(): void {
        console.log('component-b connectedCallback:');
        console.log('config:', this.config);
        console.log('otherConfig:', this.otherConfig);
    }
    willUpdate() {
        console.log('component-b willUpdate:');
        console.log('config:', this.config);
        console.log('otherConfig:', this.otherConfig);
    }
    render() {
        return html`
            <div class="">
                <h1>Hello, world!</h1>
            </div>
        `;
    }
}
