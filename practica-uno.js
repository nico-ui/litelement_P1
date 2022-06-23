import { LitElement, html } from 'lit-element';
import '@material/mwc-button';

export class PracticaUno extends LitElement {

    constructor(){
        super();
    }

    render() {
        return html`
            <mwc-button raised label="Clic"></mwc-button>
        `;
    }
}
customElements.define('practica-uno', PracticaUno);