const menuItemCode = `
<pre><code class="language-html">&lt;ul class="menu-items"&gt;
    &lt;li&gt;&lt;a href="#"&gt;
        &lt;div class="material-icons menu-icon"&gt;
            edit
        &lt;/div&gt;
        Menu Item
    &lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
`;

class MenuItemCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = menuItemCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('menu-item-code', MenuItemCode);