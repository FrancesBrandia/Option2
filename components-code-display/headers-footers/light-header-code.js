const lightHeaderCode = `
<code-block class="html javascript">
    <div class="code html">&lt;div class="header light"&gt;
    &lt;div class="header-logo"&gt;
        &lt;img class="logo" src={insert logo here} alt={insert logo alt}&gt;
        &lt;div class="app-name"&gt;
            APP NAME
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="header-content"&gt;
        &lt;div 
            class="header-dropdown"
            onclick="toggleHeaderDropdown.call(this)"
        &gt;
            Name
            &lt;div class="material-icons dropdown-icon"&gt;
                expand_more
            &lt;/div&gt;
            &lt;div class="header-dropdown-content"&gt;
                &lt;ul&gt;
                    &lt;li&gt;&lt;a href="#"&gt;
                        Edit Profile
                    &lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#"&gt;
                        Change Password
                    &lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#"&gt;
                        Log Out
                    &lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;button class="material-icons header-help"&gt;
            question_mark
        &lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;</div>
    <div class="code javascript">// this === the selected header dropdown
const toggleHeaderDropdown = function() {
    if (this.classList.contains('expanded')) {
        this.classList.remove('expanded');
        this.querySelector('.header-dropdown-content').style.visibility = 'hidden';
        this.querySelector('.material-icons.dropdown-icon').style.transform = 'rotate(0deg)';
    } else {
        this.classList.add('expanded');
        this.querySelector('.header-dropdown-content').style.visibility = 'visible';
        this.querySelector('.material-icons.dropdown-icon').style.transform = 'rotate(180deg)';
    }
}</div>
</code-block>
`;

class LightHeaderCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = lightHeaderCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('light-header-code', LightHeaderCode);