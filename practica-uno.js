import { LitElement, html, css } from 'lit-element';
import '@material/mwc-button';

export class PracticaUno extends LitElement {

    constructor(){
        super();
    }

    static styles = css`
    :host {
        display: block;
    }
    `;

    render() {
        return html`
            <mwc-button raised label="Clic"></mwc-button>
        `;
    }
}
customElements.define('practica-uno', PracticaUno);