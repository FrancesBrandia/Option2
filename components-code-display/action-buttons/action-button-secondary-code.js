const actionButtonSecondaryCode = `
<pre><code class="language-html">&lt;button class="button secondary"&gt;Action&lt;/button&gt;
&lt;button class="button secondary round"&gt;Action&lt;/button&gt;
</code></pre>
`;

class ActionButtonSecondaryCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = actionButtonSecondaryCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('action-button-secondary-code', ActionButtonSecondaryCode);