const datePickerCode = `
<pre><code class="language-html">&lt;div class="datepicker"&gt;
    &lt;label for="unique-datepicker-id"&gt;Date&lt;/label&gt;
    &lt;input type="date" id="unique-datepicker-id"&gt;
&lt;/div&gt;
</code></pre>
`;

class DatePickerCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = datePickerCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('date-picker-code', DatePickerCode);