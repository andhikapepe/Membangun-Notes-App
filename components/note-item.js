class NoteItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set noteData(data) {
        this.shadowRoot.innerHTML = `
            <style>
                .note {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 15px;
                    background-color: #ffffff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    max-width: 500px;
                    margin: 10px auto;
                    box-sizing: border-box;
                }

                .title {
                    font-size: 1.2em;
                    font-weight: bold;
                    margin-bottom: 10px;
                    color: #333;
                }
                .body {
                    font-size: 1em;
                    color: #555;
                    line-height: 1.5;
                    margin: 0;
                }
            </style>
            <div class="note">
                <div class="title">${data.title}</div>
                <div class="body">${data.body}</div>
            </div>
        `;
    }
}

customElements.define('note-item', NoteItem);
