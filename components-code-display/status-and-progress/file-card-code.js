const fileCardCode = `
<pre><code class="language-html">&lt;div class="file-upload-card"&gt;
    &lt;input type="file" id="unique-id-1" class="file-input"&gt;
    &lt;div class="material-icons file-upload-icon"&gt;
        cloud_upload
    &lt;/div&gt;
    Drop files or&nbsp; 
    &lt;label for="unique-id-1" class="file-upload-link"&gt;
        browse
    &lt;/label&gt;
    &nbsp;to upload
&lt;/div&gt;
</code></pre>
`;

class FileCardCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = fileCardCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('file-card-code', FileCardCode);