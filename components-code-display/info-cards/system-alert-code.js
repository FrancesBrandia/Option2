const systemAlertCode = `
<pre><code class="language-html">&lt;div class="alert approved"&gt;
    &lt;button class="material-icons close-alert-icon"&gt;
        close
    &lt;/button&gt;
    &lt;div class="alert-title"&gt;
        &lt;div class="material-icons alert-icon"&gt;
            check_circle
        &lt;/div&gt;
        &lt;p class="bold title"&gt;Approved&lt;/p&gt;
        &lt;span class="separator"&gt;|&lt;/span&gt;
        &lt;p&gt;September 12, 2022&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="alert-content"&gt;
        &lt;p class="bold"&gt;The verification/consent form request has been approved by:&lt;/p&gt;
        &lt;p class="bold"&gt;Jane Doe JoeDoe@lbm.com&lt;/p&gt;
        &lt;p class="small-font"&gt;Please contact us for questions or comments. &lt;a href="#" class="email"&gt;airpcase@acr.org&lt;/a&gt; or 703-390-9872&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="alert pending"&gt;
    &lt;button class="material-icons close-alert-icon"&gt;
        close
    &lt;/button&gt;
    &lt;div class="alert-title"&gt;
        &lt;div class="material-icons alert-icon"&gt;
            info
        &lt;/div&gt;
        &lt;p class="bold title"&gt;Pending&lt;/p&gt;
        &lt;span class="separator"&gt;|&lt;/span&gt;
        &lt;p&gt;September 12, 2022&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="alert error"&gt;
    &lt;button class="material-icons close-alert-icon"&gt;
        close
    &lt;/button&gt;
    &lt;div class="alert-title"&gt;
        &lt;div class="material-icons alert-icon"&gt;
            cancel
        &lt;/div&gt;
        &lt;p class="bold title"&gt;Rejected&lt;/p&gt;
        &lt;span class="separator"&gt;|&lt;/span&gt;
        &lt;p&gt;September 12, 2022&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;

&lt;div class="alert warning"&gt;
    &lt;button class="material-icons close-alert-icon"&gt;
        close
    &lt;/button&gt;
    &lt;div class="alert-title"&gt;
        &lt;div class="material-icons alert-icon"&gt;
            error
        &lt;/div&gt;
        &lt;p class="bold title"&gt;Warning&lt;/p&gt;
        &lt;span class="separator"&gt;|&lt;/span&gt;
        &lt;p&gt;September 12, 2022&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`;

class SystemAlertCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = systemAlertCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('system-alert-code', SystemAlertCode);