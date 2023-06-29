import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/component-b.js';
@customElement('app-root')
export class AppRoot extends LitElement {
    connectedCallback(): void {
        super.connectedCallback();
        setTimeout(() => {
            import('./components/component-a.js');
        }, 2000);
    }
    render() {
        return html`
            <div class="">
                <h1>Hello, world!</h1>
                <component-a .config=${{ something: { something: 'something' } }}></component-a>
                <component-b .config=${{ something: { something: 'something' } }}></component-b>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'app-root': AppRoot;
    }
}
