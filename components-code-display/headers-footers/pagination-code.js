const paginationCode = `
<pre><code class="language-html">&lt;div class="pagination"&gt;
    &lt;div class="pages"&gt;
        &lt;a href="#" class="previous"&gt;
            Previous
            &lt;div class="material-icons prev-page-icon"&gt;
                chevron_left
            &lt;/div&gt;
        &lt;/a&gt;
        &lt;div class="numbers"&gt;
            &lt;a href="#"&gt;1&lt;/a&gt;
            &lt;a href="#" class="active"&gt;2&lt;/a&gt;
            &lt;a href="#"&gt;3&lt;/a&gt;
            &lt;a href="#"&gt;4&lt;/a&gt;
            &lt;a href="#"&gt;5&lt;/a&gt;
            &lt;a href="#"&gt;6&lt;/a&gt;
            &lt;a href="#"&gt;7&lt;/a&gt;
            &lt;a href="#"&gt;8&lt;/a&gt;
        &lt;/div&gt;
        &lt;a href="#" class="next"&gt;
            &lt;div class="material-icons next-page-icon"&gt;
                chevron_right
            &lt;/div&gt;
            Next
        &lt;/a&gt;
    &lt;/div&gt;
    &lt;div class="filter"&gt;
        Show
        &lt;div class="row-filter"&gt;
            &lt;div class="num-rows"&gt;
                50
            &lt;/div&gt;
            &lt;div class="num-rows-dropdown-icon-container"&gt;
                &lt;div class="material-icons num-rows-dropdown-icon"&gt;
                    expand_more
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="dropdown-num-rows-content"&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        rows per page
    &lt;/div&gt;
&lt;/div&gt;
</code></pre>
`;

class PaginationCode extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = paginationCode;
        this.setAttribute('class', 'code-section');
    }
}

customElements.define('pagination-code', PaginationCode);