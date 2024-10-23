const modalHeaderCode = `
<pre><code class="language-html">&lt;div class="modal-with-header"&gt;
    &lt;button class="material-icons close-modal-icon"&gt;
        close
    &lt;/button&gt;
    &lt;div class="modal-content"&gt;
        &lt;div class="modal-header"&gt;
            Header
        &lt;/div&gt;
        &lt;div class="modal-message"&gt;
            You are about to leave the page without saving your changes.
            Do you want to leave without saving?
        &lt;/div&gt;
        &lt;div class="modal-action-buttons"&gt;
            &lt;button class="modal-button secondary"&gt;Action&lt;/button&gt;
            &lt;button class="modal-button primary"&gt;Save Changes&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="modal-footer"&gt;
        Please contact us for questions or comments at 
        &lt;a class="modal-footer-email" href="#"&gt;email address&lt;/a&gt; 
        or phone number.
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`;

class ModalHeaderCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = modalHeaderCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('modal-header-code', ModalHeaderCode);