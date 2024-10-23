const headerMaterialCode = `
    <code-block class="html javascript">
        <div class="code html">&lt;div class="header-material"&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#" class="active"&gt;
            Menu Item
            &lt;div class="material-underline"&gt;&lt;/div&gt;
        &lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;
            Menu Item
            &lt;div class="material-underline"&gt;&lt;/div&gt;
        &lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;
            Menu Item
            &lt;div class="material-underline"&gt;&lt;/div&gt;
        &lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</div>
        <div class="code javascript">activeMatTab = document.querySelector('.header-material a.active');

const matTabs = document.querySelectorAll('.header-material a');
matTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activeMatTab.classList.remove('active');
        tab.classList.add('active');
        activeMatTab = tab;
    });
});</div>
    </code-block>
`;


class HeaderMaterialCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = headerMaterialCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('header-material-code', HeaderMaterialCode);