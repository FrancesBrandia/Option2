const spinnerCode = `
<pre><code class="language-html">&lt;div class="spinner"&gt;&lt;/div&gt;
</code></pre>
`;

class SpinnerCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = spinnerCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('spinner-code', SpinnerCode);