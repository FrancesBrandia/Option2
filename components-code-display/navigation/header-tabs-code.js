const headerTabsCode = `
    <code-block class="html javascript">
        <div class="code html">&lt;div class="header-tabs"&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#"&gt;Menu Item&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#" class="active"&gt;Menu Item&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#"&gt;Menu Item&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/div&gt;</div>
        <div class="code javascript">activeTab = document.querySelector('.header-tabs a.active');

const tabs = document.querySelectorAll('.header-tabs a');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        activeTab.classList.remove('active');
        tab.classList.add('active');
        activeTab = tab;
    });
});</div>
    </code-block>
`;


class HeaderTabsCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = headerTabsCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('header-tabs-code', HeaderTabsCode);