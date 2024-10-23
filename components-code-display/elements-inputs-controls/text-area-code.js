const textAreaCode = `
<pre><code class="language-html">&lt;div class="textarea"&gt;
    &lt;label for="unique-text-area-id"&gt;Label&lt;/label&gt;
    &lt;textarea id="unique-text-area-id" name="text_area_name" placeholder="-Describe-"&gt;&lt;/textarea&gt;
&lt;/div&gt;
</code></pre>
`;

class TextAreaCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = textAreaCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('text-area-code', TextAreaCode);