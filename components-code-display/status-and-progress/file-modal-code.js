const fileModalCode = `
<pre><code class="language-html">&lt;div class="file-upload-modal"&gt;
    &lt;button class="material-icons file-modal-close"&gt;
        close
    &lt;/button&gt;
    &lt;h1 class="file-modal-title"&gt;Import file(s)&lt;/h1&gt;
    &lt;div class="file-upload-card"&gt;
        &lt;input type="file" id="unique-id-2" class="file-input"&gt;
        &lt;div class="material-icons file-upload-icon"&gt;
            cloud_upload
        &lt;/div&gt;
        Drop files or&nbsp; 
        &lt;label for="unique-id-2" class="file-upload-link"&gt;
            browse
        &lt;/label&gt;
        &nbsp;to upload
    &lt;/div&gt;
    &lt;div class="progress-bars-container"&gt;
        &lt;div class="progress-container"&gt;
            &lt;p class="progress-title"&gt;AutopsyReport2.pdf&lt;/p&gt;
            &lt;div class="progress-bar-container"&gt;
                &lt;div class="progress-bar"&gt;
                    &lt;span id="unique-progress-bar-id-2" style="width: 36%;"&gt;&lt;/span&gt;
                &lt;/div&gt;
                &lt;button class="material-icons cancel-icon"&gt;
                    cancel
                &lt;/button&gt;
            &lt;/div&gt;
            &lt;p class="progress-percent"&gt;36%&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="progress-container"&gt;
            &lt;p class="progress-title"&gt;AutopsyReport3.pdf&lt;/p&gt;
            &lt;div class="progress-bar-container"&gt;
                &lt;div class="progress-bar"&gt;
                    &lt;span id="unique-progress-bar-id-3" style="width: 72%;"&gt;&lt;/span&gt;
                &lt;/div&gt;
                &lt;button class="material-icons cancel-icon"&gt;
                    cancel
                &lt;/button&gt;
            &lt;/div&gt;
            &lt;p class="progress-percent"&gt;72%&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="action-buttons"&gt;
        &lt;button class="modal-button secondary"&gt;Action&lt;/button&gt;
        &lt;button class="modal-button primary"&gt;Upload&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`;

class FileModalCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = fileModalCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('file-modal-code', FileModalCode);