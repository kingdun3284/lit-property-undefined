import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('component-a')
export class ComponentA extends LitElement {
    @property({ type: Object }) config;
    otherConfig;
    connectedCallback(): void {
        console.log('component-a connectedCallback:');
        console.log('config:', this.config);
        console.log('otherConfig:', this.otherConfig);
    }
    willUpdate() {
        console.log('component-a willUpdate:');
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
