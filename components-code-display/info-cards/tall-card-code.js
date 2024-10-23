const tallCardCode = `
<pre><code class="language-html">&lt;div class="tall-info-card"&gt;
    &lt;img class="tall-card-graphic" src={insert source for graphic here} alt="Info Card Graphic"&gt;
    &lt;div class="tall-card-title"&gt;Image Data Submission&lt;/div&gt;
    &lt;div class="tall-card-content"&gt;
        &lt;div class="content-text"&gt;
            Do you have images (slides, photos, etc.) of compelling visual cases in clinical medicine?
        &lt;/div&gt;
        &lt;button class="tall-card-button primary"&gt;SUBMIT&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`;

class TallCardCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = tallCardCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('tall-card-code', TallCardCode);