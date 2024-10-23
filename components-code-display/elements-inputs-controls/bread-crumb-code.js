const breadCrumbCode = `
<pre><code class="language-html">&lt;ul class="bread-crumb"&gt;
    &lt;li&gt;&lt;a href="#"&gt;Nav Root&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;div class="material-icons right-arrow"&gt;chevron_right&lt;/div&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#"&gt;Previous Page&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;div class="material-icons right-arrow"&gt;chevron_right&lt;/div&gt;&lt;/li&gt;
    &lt;li&gt;Present Page&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
`;

class BreadCrumbCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = breadCrumbCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('bread-crumb-code', BreadCrumbCode);