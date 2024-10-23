const progressIndicatorCode = `
<pre><code class="language-html">&lt;div class="progress-container"&gt;
    &lt;p class="progress-title"&gt;AutopsyReport1.pdf&lt;/p&gt;
    &lt;div class="progress-bar-container"&gt;
        &lt;div class="progress-bar"&gt;
            &lt;span id="unique-progress-bar-id-1" style="width: 47%;"&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;button class="material-icons cancel-icon"&gt;
            cancel
        &lt;/button&gt;
    &lt;/div&gt;
    &lt;p class="progress-percent"&gt;47%&lt;/p&gt;
&lt;/div&gt;
</code></pre>
`;

class ProgressIndicatorCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = progressIndicatorCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('progress-indicator-code', ProgressIndicatorCode);