const appHeader = `
    <div class="app-header">
        <div class="app-header-logo">
            <img class="logo" src="../../assets/icons/ACR-logo-light2.png" alt="ACR Logo">
        </div>
        <div class="app-header-content">
            <div class="app-name">
                ACR Master Component Library
            </div>
        </div>
    </div>
`;

class AppHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = appHeader;
    }
}

customElements.define('app-header', AppHeader);