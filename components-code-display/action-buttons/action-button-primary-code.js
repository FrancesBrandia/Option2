const actionButtonPrimaryCode = `
<pre><code class="language-html">&lt;button class="button primary"&gt;Action&lt;/button&gt;
&lt;button class="button primary round"&gt;Action&lt;/button&gt;
</code></pre>
`;

class ActionButtonPrimaryCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = actionButtonPrimaryCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('action-button-primary-code', ActionButtonPrimaryCode);