const checkboxCode = `
<pre><code class="language-html">&lt;div class="checkbox"&gt;
    &lt;label for="checkbox-1"&gt;
        &lt;input type="checkbox" id="checkbox-1" name="checkbox_name" value="Check Box Label"&gt;
        &lt;span class="material-icons checkbox-icon"&gt;check&lt;/span&gt;
        Check Box Label
    &lt;/label&gt;
    &lt;/div&gt;

    &lt;div class="checkbox"&gt;
    &lt;label for="checkbox-2"&gt;
        &lt;input type="checkbox" id="checkbox-2" name="checkbox_name" value="Check Box Label"&gt;
        &lt;span class="material-icons checkbox-icon"&gt;check&lt;/span&gt;
        Check Box Label
    &lt;/label&gt;
&lt;/div&gt;
</code></pre>
`;

class CheckboxCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = checkboxCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('checkbox-code', CheckboxCode);