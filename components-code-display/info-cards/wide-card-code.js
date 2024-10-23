const wideCardCode = `
<pre><code class="language-html">&lt;div class="wide-info-card"&gt;
    &lt;div class="material-icons wide-card-icon"&gt;
        upload_file
    &lt;/div&gt;
    &lt;div class="wide-card-content"&gt;
        &lt;div class="wide-content-title"&gt;Local Drive&lt;/div&gt;
        &lt;div&gt;Import DICOM files directly from your local file system&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`;

class WideCardCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = wideCardCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('wide-card-code', WideCardCode);