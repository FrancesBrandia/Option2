const actionButtonTextCode = `
<pre><code class="language-html">&lt;button class="button text"&gt;Action&lt;/button&gt;
&lt;button class="button text round"&gt;Action&lt;/button&gt;
</code></pre>
`;

class ActionButtonTextCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = actionButtonTextCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('action-button-text-code', ActionButtonTextCode);