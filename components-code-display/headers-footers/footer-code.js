const footerCode = `
<pre><code class="language-html">&lt;div class="footer"&gt;
    &lt;div class="acr-info"&gt;
        &lt;img class="footer-logo" src="../../assets/icons/ACR-Logo-light-bkg.svg" alt="ACR Logo"&gt;
        &lt;div class="info-text"&gt;
            &lt;p&gt;© American College of Radiology&lt;/p&gt;
            &lt;div class="phone-and-location"&gt;
                &lt;p&gt;1891 Preston White Dr.&lt;/p&gt;
                &lt;p&gt;Reston, VA 20191&lt;/p&gt;
                &lt;p&gt;703.648.8900&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="links"&gt;
        &lt;a href="#"&gt;Disclaimer&lt;/a&gt;
        &lt;span id="link-separator"&gt;|&lt;/span&gt;
        &lt;a href="#"&gt;Privacy&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`;

class FooterCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = footerCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('footer-code', FooterCode);