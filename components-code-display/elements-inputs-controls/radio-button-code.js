const radioButtonCode = `
<code-block class="html javascript">
    <div class="code html">&lt;form&gt;
    &lt;div class="radio-button"&gt;
        &lt;input type="radio" id="radio-1" name="radio_name" value="Radio Button Label"&gt;
        &lt;label for="radio-1" class="radio-label"&gt;Radio Button Label&lt;/label&gt;
    &lt;/div&gt;

    &lt;div class="radio-button"&gt;
        &lt;input type="radio"id="radio-2" name="radio_name" value="Radio Button Label"&gt;
        &lt;label for="radio-2" class="radio-label"&gt;Radio Button Label&lt;/label&gt;
    &lt;/div&gt;

    &lt;button type="button" class="radio-reset-button secondary" onclick="resetRadioSelection.call(this)"&gt;
        Clear
    &lt;/button&gt;
    
&lt;/form&gt;</div>
    <div class="code javascript">// this code is only needed if you want a "clear" option
const resetRadioSelection = function() {
    const form = this.parentElement;
    const selectedRadio = form.querySelector('.radio-button input:checked');
    if (selectedRadio) {
        selectedRadio.checked = false;
    }
}</div>
</code-block>
`;

class RadioButtonCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = radioButtonCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('radio-button-code', RadioButtonCode);