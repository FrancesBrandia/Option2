const horizontalFiltersCode = `
    <code-block class="html javascript">
        <div class="code html">&lt;div class="horizontal-search-filters"&gt;
    &lt;div class="horizontal-filters-container"&gt;
        &lt;div class="horizontal-filters"&gt;
            &lt;div id="dropdown-1" class="dropdown"&gt;
                &lt;div class="dropdown-label"&gt;
                    Corporate Account
                &lt;/div&gt;
                &lt;div
                    class="dropdown-trigger"
                    onclick="toggleSelectDropdown.call(this)"
                &gt;
                    &lt;div class="dropdown-selection"&gt;All&lt;/div&gt;
                    &lt;div class="material-icons dropdown-arrow"&gt;
                        expand_more
                    &lt;/div&gt;
                    &lt;ul class="dropdown-options"&gt;
                        &lt;li class="dropdown-option" data-value="Selection Item 1"&gt;All&lt;/li&gt;
                        &lt;li class="dropdown-option" data-value="Selection Item 2"&gt;Selection Item 2&lt;/li&gt;
                        &lt;li class="dropdown-option" data-value="Selection Item 3"&gt;Selection Item 3&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div id="dropdown-2" class="dropdown"&gt;
                &lt;div class="dropdown-label"&gt;
                    Facility
                &lt;/div&gt;
                &lt;div
                    class="dropdown-trigger"
                    onclick="toggleSelectDropdown.call(this)"
                &gt;
                    &lt;div class="dropdown-selection"&gt;All&lt;/div&gt;
                    &lt;div class="material-icons dropdown-arrow"&gt;
                        expand_more
                    &lt;/div&gt;
                    &lt;ul class="dropdown-options"&gt;
                        &lt;li class="dropdown-option" data-value="Selection Item 1"&gt;All&lt;/li&gt;
                        &lt;li class="dropdown-option" data-value="Selection Item 2"&gt;Selection Item 2&lt;/li&gt;
                        &lt;li class="dropdown-option" data-value="Selection Item 3"&gt;Selection Item 3&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="text-input"&gt;
                &lt;label for="text-1"&gt;Station Name&lt;/label&gt;
                &lt;input type="text" id="text-1" name="text_input"&gt;
            &lt;/div&gt;
            &lt;div class="text-input"&gt;
                &lt;label for="text-2"&gt;Manufacturer&lt;/label&gt;
                &lt;input type="text" id="text-2" name="text_input"&gt;
            &lt;/div&gt;
            &lt;div id="dropdown-3" class="dropdown"&gt;
                &lt;div class="dropdown-label"&gt;
                    Status
                &lt;/div&gt;
                &lt;div
                    class="dropdown-trigger"
                    onclick="toggleSelectDropdown.call(this)"
                &gt;
                    &lt;div class="dropdown-selection"&gt;All&lt;/div&gt;
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
            &lt;div class="text-input"&gt;
                &lt;label for="text-3"&gt;Model&lt;/label&gt;
                &lt;input type="text" id="text-3" name="text_input"&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="action-buttons"&gt;
            &lt;button class="search-filter-button secondary"&gt;Reset&lt;/button&gt;
            &lt;button class="search-filter-button primary"&gt;Search&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="results"&gt;
        &lt;p&gt;Results: &lt;span class="num-entries"&gt;000 entries found&lt;/span&gt;&lt;/p&gt;
        &lt;p&gt;Use the filters to refine the list of fluoroscopes displayed in the table below.&lt;/p&gt;
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


class HorizontalFiltersCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = horizontalFiltersCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('horizontal-filters-code', HorizontalFiltersCode);