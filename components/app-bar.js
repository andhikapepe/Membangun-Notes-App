class AppBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    background: #333;
                    color: white;
                    padding: 10px;
                    text-align: center;
                }
            </style>
            <div>
                <h1>Notes App</h1>
            </div>
        `;
    }
}

customElements.define('app-bar', AppBar);
