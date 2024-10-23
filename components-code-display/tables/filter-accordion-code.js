const filterAccordionCode = `
    <code-block class="html javascript">
        <div class="code html">&lt;div class="filter-accordion"&gt;
    &lt;div class="filter-row"&gt;
        &lt;div class="material-icons expand-row-icon"&gt;
            expand_more
        &lt;/div&gt;
        &lt;div&gt;Accordion Row With Search Filter&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="accordion-content"&gt;
        &lt;div class="filters"&gt;
            &lt;div class="text-input"&gt;
                &lt;label for="text-1"&gt;Filter by:&lt;/label&gt;
                &lt;input type="text" id="text-1" name="text_input" placeholder="MRN, Series number, Body area, etc..."&gt;
            &lt;/div&gt;
            &lt;div id="dropdown-1" class="dropdown"&gt;
                &lt;div class="dropdown-label"&gt;
                    Modality
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
                    Study Description
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
            &lt;div class="action-buttons"&gt;
                &lt;button class="filter-accordion-button secondary"&gt;Reset&lt;/button&gt;
                &lt;button class="filter-accordion-button primary"&gt;Search&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</div>
        <div class="code javascript">const accordionTriggers = document.querySelectorAll('.table-accordion > .row, .filter-accordion > .filter-row');
accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        if (!e.target.classList.contains('action-icon')) {
            toggleAccordion.call(trigger);
        }
    });
});

function toggleAccordion() {
    const selectedAccordion = this.nextElementSibling;
    const accordionArrow = this.querySelector('.expand-row-icon');

    // collapse currently opened accordion (if any) (except the selected accordion)
    accordionTriggers.forEach(trigger => {
        accordion = trigger.nextElementSibling;
        arrow = trigger.querySelector('.expand-row-icon');
        if (accordion !== selectedAccordion) {
            collapseAccordion(trigger, accordion, arrow);
        }
    });
    
    // toggle the selected accordion
    if (selectedAccordion.style.display === 'flex') {
        collapseAccordion(this, selectedAccordion, accordionArrow);
    } else {
        expandAccordion(this, selectedAccordion, accordionArrow);
    }
}

function collapseAccordion(row, accordion, arrow) {
    row.classList.remove('expanded');
    accordion.style.display = 'none';
    arrow.style.transform = 'rotate(0deg)';
}

function expandAccordion(row, accordion, arrow) {
    row.classList.add('expanded');
    accordion.style.display = 'flex';
    arrow.style.transform = 'rotate(180deg)';
}

// Single select dropdown
// close dropdowns when clicking outside of them
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


class FilterAccordionCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = filterAccordionCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('filter-accordion-code', FilterAccordionCode);