const alternateIconsCode = `
<pre><code class="language-html">&lt;div class="material-icons modal-icon warning"&gt;
    error
&lt;/div&gt;

&lt;div class="material-icons modal-icon error"&gt;
    cancel
&lt;/div&gt;
</code></pre>
`;

class AlternateIconsCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = alternateIconsCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('alternate-icons-code', AlternateIconsCode);