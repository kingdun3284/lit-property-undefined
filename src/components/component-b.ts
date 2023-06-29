import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('component-b')
export class ComponentB extends LitElement {
    @property({ type: Object }) config;
    connectedCallback(): void {
        console.log('component-b connectedCallback:');
        console.log(this.config);
    }
    willUpdate() {
        console.log('component-b willUpdate:');
        console.log(this.config);
    }
    render() {
        return html`
            <div class="">
                <h1>Hello, world!</h1>
            </div>
        `;
    }
}
