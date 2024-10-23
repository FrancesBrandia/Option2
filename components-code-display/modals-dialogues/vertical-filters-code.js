const verticalFiltersCode = `
    <code-block class="html javascript">
        <div class="code html">&lt;div class="vertical-search-filters"&gt;
    &lt;button class="material-icons arrow-icon"&gt;
        arrow_forward
    &lt;/button&gt;
    &lt;div class="title"&gt;Filter&lt;/div&gt;
    &lt;div class="text-input"&gt;
        &lt;label for="vertical-search"&gt;Search&lt;/label&gt;
        &lt;input type="text" id="vertical-search" name="text_input"&gt;
    &lt;/div&gt;
    &lt;div class="vertical-filters"&gt;
        &lt;div class="datepicker"&gt;
            &lt;label for="datepicker-1"&gt;Date&lt;/label&gt;
            &lt;input type="date" id="datepicker-1"&gt;
        &lt;/div&gt;
        &lt;div id="dropdown-4" class="dropdown"&gt;
            &lt;div class="dropdown-label"&gt;
                Label
            &lt;/div&gt;
            &lt;div
                class="dropdown-trigger"
                onclick="toggleSelectDropdown.call(this)"
            &gt;
                &lt;div class="dropdown-selection"&gt;-Select-&lt;/div&gt;
                &lt;div class="material-icons dropdown-arrow"&gt;
                    expand_more
                &lt;/div&gt;
                &lt;ul class="dropdown-options"&gt;
                    &lt;li class="dropdown-option" data-value="Selection Item 1"&gt;Selection Item 1&lt;/li&gt;
                    &lt;li class="dropdown-option" data-value="Selection Item 2"&gt;Selection Item 2&lt;/li&gt;
                    &lt;li class="dropdown-option" data-value="Selection Item 3"&gt;Selection Item 3&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div id="dropdown-5" class="dropdown"&gt;
            &lt;div class="dropdown-label"&gt;
                Label
            &lt;/div&gt;
            &lt;div
                class="dropdown-trigger"
                onclick="toggleSelectDropdown.call(this)"
            &gt;
                &lt;div class="dropdown-selection"&gt;-Select-&lt;/div&gt;
                &lt;div class="material-icons dropdown-arrow"&gt;
                    expand_more
                &lt;/div&gt;
                &lt;ul class="dropdown-options"&gt;
                    &lt;li class="dropdown-option" data-value="Selection Item 1"&gt;Selection Item 1&lt;/li&gt;
                    &lt;li class="dropdown-option" data-value="Selection Item 2"&gt;Selection Item 2&lt;/li&gt;
                    &lt;li class="dropdown-option" data-value="Selection Item 3"&gt;Selection Item 3&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="action-buttons"&gt;
        &lt;button class="search-filter-button secondary"&gt;Reset&lt;/button&gt;
        &lt;button class="search-filter-button primary"&gt;Search&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;</div>
        <div class="code javascript">// close dropdowns when clicking outside of them
window.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-trigger, .dropdown-trigger  *')) {
        const activeDropdown = document.querySelector('.dropdown-trigger.expanded');  
        if (activeDropdown) {
            toggleSelectDropdown.call(activeDropdown);
        }           
    }
});

// this === the clicked dropdown-trigger div
const toggleSelectDropdown = function() {
    // close the currently opened dropdown
    const activeDropdown = document.querySelector('.dropdown-trigger.expanded');
    if (activeDropdown && activeDropdown !== this) {
        toggleSelectDropdown.call(activeDropdown);
    }

    // apply the proper css styles to the dropdown
    const dropdownArrow = this.querySelector('.dropdown-arrow');
    const dropdownSelection = this.querySelector('.dropdown-selection');
    const dropdownContent = this.querySelector('.dropdown-options');
    if (this.classList.contains('expanded')) {
        this.classList.remove('expanded');
        dropdownArrow.style.transform = 'rotate(0deg)';
        dropdownContent.style.visibility = 'hidden';
    } else {
        this.classList.add('expanded');
        dropdownArrow.style.transform = 'rotate(180deg)';
        dropdownContent.style.visibility = 'visible';
    }

    // update the selected option if an option is chosen
    const dropdownOptions = this.querySelectorAll('.dropdown-option');
    dropdownOptions.forEach(option => {
        option.addEventListener('click', () => {
            dropdownSelection.innerHTML = option.innerHTML;
        });
    });
}</div>
    </code-block>
`;


class VerticalFiltersCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = verticalFiltersCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('vertical-filters-code', VerticalFiltersCode);