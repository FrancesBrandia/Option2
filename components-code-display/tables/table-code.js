const tableCode = `
<pre><code class="language-html">&lt;div class="table"&gt;
    &lt;div class="table-header"&gt;
        &lt;div&gt;Facility ID&lt;/div&gt;
        &lt;div&gt;Station Name&lt;/div&gt;
        &lt;div&gt;Status&lt;/div&gt;
        &lt;div&gt;Fluoroscope Type&lt;/div&gt;
        &lt;div&gt;Manufacturer, Model, Year&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row"&gt;
        &lt;div&gt;CR-2020021-212997&lt;/div&gt;
        &lt;div&gt;Station name is here&lt;/div&gt;
        &lt;div&gt;Active&lt;/div&gt;
        &lt;div&gt;Mobile fluoroscopes/full size C-arm/single plane&lt;/div&gt;
        &lt;div&gt;Siemans, Siemans AXIOM-Artis, 2017&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row"&gt;
        &lt;div&gt;CR-2020021-212997&lt;/div&gt;
        &lt;div&gt;Station name is here&lt;/div&gt;
        &lt;div&gt;Active&lt;/div&gt;
        &lt;div&gt;Mobile fluoroscopes/full size C-arm/single plane&lt;/div&gt;
        &lt;div&gt;Siemans, Siemans AXIOM-Artis, 2017&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`;

class TableCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = tableCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('table-code', TableCode);