const actionButtonDisabledCode = `
<pre><code class="language-html">&lt;button class="button disabled"&gt;Action&lt;/button&gt;
&lt;button class="button disabled round"&gt;Action&lt;/button&gt;
</code></pre>
`;

class ActionButtonDisabledCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = actionButtonDisabledCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('action-button-disabled-code', ActionButtonDisabledCode);