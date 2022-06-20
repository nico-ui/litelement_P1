import { LitElement, html } from 'lit-element';

export class OtroComponente extends LitElement {

    constructor() {
        super();
    }

    render() {
        return html`
        <p>Soy el otro componente</p>
        `;
    }
}
customElements.define('otro-componente', OtroComponente);