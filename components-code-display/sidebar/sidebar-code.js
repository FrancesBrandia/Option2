const sidebarCode = `
    <code-block class="html javascript">
        <div class="code html">&lt;div class="sidebar"&gt;
    &lt;button 
        class="material-icons sidebar-toggle open" 
        onclick="openSidebar()"
    &gt;
        menu
    &lt;/button&gt;
    &lt;button 
        class="material-icons sidebar-toggle close" 
        onclick="closeSidebar()"
    &gt;
        arrow_back
    &lt;/button&gt;
    &lt;div class="sidebar-menu"&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="#"&gt;
                &lt;div class="material-icons sidebar-icon"&gt;
                    home
                &lt;/div&gt;
                Home
            &lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#"&gt;
                &lt;div class="material-icons sidebar-icon"&gt;
                    home
                &lt;/div&gt;
                Home
            &lt;/a&gt;&lt;/li&gt; 
        &lt;/ul&gt;
        &lt;div class="category"&gt;
            &lt;p&gt;Category 1&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;
                    &lt;div class="material-icons sidebar-icon"&gt;
                        home
                    &lt;/div&gt;
                    Home
                &lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;
                    &lt;div class="material-icons sidebar-icon"&gt;
                        home
                    &lt;/div&gt;
                    Home
                &lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        &lt;div class="category"&gt;
            &lt;p&gt;Category 2&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;
                    &lt;div class="material-icons sidebar-icon"&gt;
                        home
                    &lt;/div&gt;
                    Home
                &lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#"&gt;
                    &lt;div class="material-icons sidebar-icon"&gt;
                        home
                    &lt;/div&gt;
                    Home
                &lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</div>
        <div class="code javascript">const sidebar = document.querySelector('.sidebar');
const sidebarMenu = document.querySelector('.sidebar-menu');
const sidebarToggleOpen = document.querySelector('.material-icons.open');
const sidebarToggleClose = document.querySelector('.material-icons.close')
function openSidebar() {
    sidebar.style.width = '274px';
    sidebarMenu.style.left = '0px';
    sidebarMenu.style.visibility = 'visible';
    sidebarToggleOpen.style.display = 'none';
    sidebarToggleClose.style.display = 'block';
}

function closeSidebar() {
    sidebar.style.width = '40px';
    sidebarMenu.style.left = '-274px';
    sidebarMenu.style.visibility = 'hidden';
    sidebarToggleOpen.style.display = 'block';
    sidebarToggleClose.style.display = 'none';
}</div>
    </code-block>
`;


class SidebarCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = sidebarCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('sidebar-code', SidebarCode);