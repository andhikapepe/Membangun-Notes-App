class NoteForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    width: 100%;
                    max-width: 500px;
                    padding: 20px;
                    box-sizing: border-box;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    background-color: #f9f9f9;
                }

                input, textarea {
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    width: 100%;
                }

                button {
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    background-color: #333;
                    color: white;
                    cursor: pointer;
                    width: 100%;
                }
            </style>
            <form id="form">
                <input type="text" id="title" placeholder="Title" required>
                <textarea id="body" placeholder="Body" rows="5" required></textarea>
                <button type="submit">Add Note</button>
            </form>
        `;


        this.shadowRoot.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault();
            const title = this.shadowRoot.querySelector('#title').value;
            const body = this.shadowRoot.querySelector('#body').value;
            this.dispatchEvent(new CustomEvent('add-note', {
                detail: { title, body },
                bubbles: true,
                composed: true
            }));
            this.shadowRoot.querySelector('#form').reset();
        });
    }
}

customElements.define('note-form', NoteForm);
