const languageName = {
    'html': 'HTML',
    'javascript': 'JS'
};

class CodeBlock extends HTMLElement {
    constructor() {
        super();
        this.languages = Array.from(this.classList);
        this.code = document.createElement('div');
        this.code.innerHTML = this.innerHTML;
        this.innerHTML = this.createInnerHTML();
        this.setAttribute('class', 'code-section');
    }

    createInnerHTML() {
        const innerHTML = `
            <pre><div class="code-language-tabs">
                ${this.languages.map(language => (
                    `<button class="${language}">${languageName[language]}</button>`
                )).join('')}
                </div>${this.languages.map(language => (
                    `<code class="language-${language} ${language}">${this.code.querySelector(`.code.${language}`).innerHTML}</code>`
                    )).join('')}</pre>
        `;

        return innerHTML;
    }

    connectedCallback() {
        this.languages.forEach(language => {
            const languageButton = this.querySelector(`.code-language-tabs button.${language}`);
            languageButton.addEventListener('click', () => this.changeTabs(language));
        });

        this.changeTabs(this.languages[0]);
    }

    changeTabs(language) {
        const languageButtons = this.querySelectorAll('.code-language-tabs button');
        languageButtons.forEach(button => {
            button.classList.remove('active');
        });

        const activeButton = this.querySelector(`.code-language-tabs button.${language}`);
        activeButton.classList.add('active');

        const codeDisplays = this.querySelectorAll('code');
        codeDisplays.forEach(display => {
            display.style.display = 'none';
        });

        const activeDisplay = this.querySelector(`code.${language}`);
        activeDisplay.style.display = 'block';
    }
}

customElements.define('code-block', CodeBlock);