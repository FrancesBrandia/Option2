const textInputCode = `
<pre><code class="language-html">&lt;div class="text-input"&gt;
    &lt;label for="unique-id"&gt;Label&lt;/label&gt;
    &lt;input type="text" id="unique-id" name="text_input" value="Text..."&gt;
&lt;/div&gt;
</code></pre>
`;

class TextInputCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = textInputCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('text-input-code', TextInputCode);