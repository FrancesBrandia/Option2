const appSidebar = `
    <div class="app-sidebar">
        <button class="material-icons app-sidebar-toggle open">
            menu
        </button>
        <button 
            class="material-icons app-sidebar-toggle close">
            arrow_back
        </button>
        <div class="app-sidebar-menu">
            <ul>
                <li><a href="/src/index.html" class="home">
                    <div class="material-icons app-sidebar-icon">
                        home
                    </div>
                    Home
                </a></li>
                <li><a href="/src/pages/action-buttons.html" class="action-buttons">
                    Action Buttons
                </a></li>
                <li><a href="/src/pages/colors.html" class="colors">
                Colors</a></li>
                <li><a href="/src/pages/elements-inputs-controls.html" class="elements-inputs-controls">
                    Elements, Inputs and Controls
                </a></li> 
                <li><a href="/src/pages/headers-footers.html" class="headers-footers">
                    Headers and Footers
                </a></li> 
                <li><a href="/src/pages/info-cards.html" class="info-cards">
                    Information Cards
                </a></li> 
                <li><a href="/src/pages/modals-dialogues.html" class="modals-dialogues">
                    Modals and Dialogues
                </a></li> 
                <li><a href="/src/pages/navigation.html" class="navigation">
                    Navigation
                </a></li> 
                <li><a href="/src/pages/sidebar.html" class="app-sidebar-item">
                    Sidebar
                </a></li> 
                <li><a href="/src/pages/status-and-progress.html" class="status-and-progress">
                    Status and Progress Indicators
                </a></li>
                <li><a href="/src/pages/tables.html" class="tables">
                    Tables
                </a></li> 
                <li><a href="/src/pages/iconography.html" class="iconography">
                    Iconography
                </a></li> 
                <li><a href="https://www.figma.com/proto/weDHaTguL7Ojovq1ot4440/Access-to-Dev-Mode?node-id=63-1455&t=5hs3yV2tp49YFry7-1" class="logos">
                    Logos
                </a></li>
                <li><a href="/src/pages/templates.html" class="templates">
                    Templates
                </a></li>
            </ul>
        </div>
    </div>
`;

class AppSidebar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = appSidebar;
        this.activePage = this.getAttribute('id');
    }

    connectedCallback() {
        this.activeMenuItem = document.querySelector(`.app-sidebar a.${this.activePage}`);
        this.activeMenuItem.classList.add('active');

        this.sidebar = document.querySelector('.app-sidebar');
        this.sidebarMenu = document.querySelector('.app-sidebar-menu');
        this.sidebarToggleOpen = document.querySelector('.app-sidebar .material-icons.open');
        this.sidebarToggleClose = document.querySelector('.app-sidebar .material-icons.close');
        
        this.content = document.querySelector('.page-content');
        this.componentSidebar = document.querySelector('.sidebar');


        this.pushContent = true;
        this.mediaQuery = window.matchMedia('(max-width: 1000px)');
        
        // if (this.mediaQuery.matches) {
        //     this.pushContent = false;
        //     this.closeSidebar();
        // }
        this.checkScreenSize();

        window.addEventListener('resize', () => this.checkScreenSize());
        
        this.sidebarToggleOpen.addEventListener('click', () => this.openSidebar());
            // this.sidebar.style.width = '274px';
            // this.sidebarMenu.style.left = '0px';
            // this.sidebarMenu.style.visibility = 'visible';
            // this.sidebarToggleOpen.style.display = 'none';
            // this.sidebarToggleClose.style.display = 'block';
            // this.content.style.marginLeft = '274px';
            // if (this.componentSidebar) {
            //     this.componentSidebar.style.left = '274px';
            // }
        // });

        this.sidebarToggleClose.addEventListener('click', () => this.closeSidebar());
            // this.sidebar.style.width = '40px';
            // this.sidebarMenu.style.left = '-274px';
            // this.sidebarMenu.style.visibility = 'hidden';
            // this.sidebarToggleOpen.style.display = 'block';
            // this.sidebarToggleClose.style.display = 'none';
            // this.content.style.marginLeft = '40px';
            // if (this.componentSidebar) {
            //     this.componentSidebar.style.left = '40px';
            // }
        // });
    }

    checkScreenSize() {
        if (this.mediaQuery.matches) {
            this.pushContent = false;
            this.closeSidebar();
        } else {
            this.pushContent = true;
            this.openSidebar();
        }
    }

    openSidebar() {
        this.sidebar.style.width = '274px';
        this.sidebarMenu.style.left = '0px';
        this.sidebarMenu.style.visibility = 'visible';
        this.sidebarToggleOpen.style.display = 'none';
        this.sidebarToggleClose.style.display = 'block';

        if (this.pushContent) {
            this.content.style.marginLeft = '274px';
        }

        if (this.componentSidebar) {
            this.componentSidebar.style.left = '274px';
        }
    }

    closeSidebar() {
        this.sidebar.style.width = '40px';
        this.sidebarMenu.style.left = '-274px';
        this.sidebarMenu.style.visibility = 'hidden';
        this.sidebarToggleOpen.style.display = 'block';
        this.sidebarToggleClose.style.display = 'none';
        this.content.style.marginLeft = '40px';

        if (this.componentSidebar) {
            this.componentSidebar.style.left = '40px';
        }
    }
}

customElements.define('app-sidebar', AppSidebar);