const actionButtonAlertCode = `
<pre><code class="language-html">&lt;button class="button alert"&gt;Action&lt;/button&gt;
&lt;button class="button alert round"&gt;Action&lt;/button&gt;
</code></pre>
`;

class ActionButtonAlertCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = actionButtonAlertCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('action-button-alert-code', ActionButtonAlertCode);