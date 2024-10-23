const tooltipCode = `
<pre><code class="language-html">&lt;span
    class="tooltip top"
    data-tooltip="Tooltip text here"
&gt;
    i
&lt;/span&gt;

&lt;span
    class="tooltip bottom"
    data-tooltip="Tooltip text here"
&gt;
    i
&lt;/span&gt;

&lt;span
    class="tooltip left"
    data-tooltip="Tooltip text here"
&gt;
    i
&lt;/span&gt;

&lt;span
    class="tooltip right"
    data-tooltip="Tooltip text here"
&gt;
    i
&lt;/span&gt;
</code></pre>
`;

class TooltipCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = tooltipCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('tooltip-code', TooltipCode);