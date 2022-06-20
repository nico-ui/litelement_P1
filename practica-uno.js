import { LitElement, html } from 'lit-element';
import '@material/mwc-button';

export class PracticaUno extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`
            <mwc-button></mwc-button>
        `;
    }
}
customElements.define('practica-uno', PracticaUno);