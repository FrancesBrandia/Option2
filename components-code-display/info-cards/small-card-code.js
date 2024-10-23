const smallCardCode = `
<pre><code class="language-html">&lt;div class="small-info-card"&gt;
    &lt;div class="small-card-header"&gt;
        &lt;div class="material-icons small-card-icon"&gt;
            file_upload
        &lt;/div&gt;
        &lt;div class="small-card-title"&gt;
            All Submissions
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="small-card-content"&gt;
        &lt;div class="small-content-text"&gt;
            23
        &lt;/div&gt;
        &lt;div class="small-hover-action"&gt;
            Click to view all
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="small-info-card success"&gt;
    &lt;div class="small-card-header"&gt;
        &lt;div class="material-icons small-card-icon"&gt;
            check_circle
        &lt;/div&gt;
        &lt;div class="small-card-title"&gt;
            Successful Submissions
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="small-card-content"&gt;
        &lt;div class="small-content-text"&gt;
            12
        &lt;/div&gt;
        &lt;div class="small-hover-action"&gt;
            Click to view all
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="small-info-card warning"&gt;
    &lt;div class="small-card-header"&gt;
        &lt;div class="material-icons small-card-icon"&gt;
            update
        &lt;/div&gt;
        &lt;div class="small-card-title"&gt;
            In Progress Submissions
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="small-card-content"&gt;
        &lt;div class="small-content-text"&gt;
            4
        &lt;/div&gt;
        &lt;div class="small-hover-action"&gt;
            Click to view all
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="small-info-card error"&gt;
    &lt;div class="small-card-header"&gt;
        &lt;div class="material-icons small-card-icon"&gt;
            report_problem
        &lt;/div&gt;
        &lt;div class="small-card-title"&gt;
            Failed Submissions
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="small-card-content"&gt;
        &lt;div class="small-content-text"&gt;
            2
        &lt;/div&gt;
        &lt;div class="small-hover-action"&gt;
            Click to view all
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`;

class SmallCardCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = smallCardCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('small-card-code', SmallCardCode);