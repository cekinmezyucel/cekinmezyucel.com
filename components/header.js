class Header extends HTMLElement {

    connectedCallback() {
        const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
        const isBlog = window.location.pathname.includes('blog');

        this.innerHTML = `
        <header class="header">
            <div class="profile-image">
                <img alt="Yucel Cekinmez" src="images/profile.jpg">
            </div>
            <div class="intro-text">
                <h1>Yucel Cekinmez</h1>
                <p>Software Engineer</p>
                <div class="social-links">
                    <a href="https://github.com/cekinmezyucel" rel="noopener noreferrer" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/cekinmezyucel" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                </div>
            </div>
        </header>
        <nav>
            <ul>
                <li><a href="index.html" ${isHome ? 'class="active"' : ''}>Home</a></li>
                <li><a href="blog.html" ${isBlog ? 'class="active"' : ''}>Blog</a></li>
            </ul>
        </nav>
    `;
    }

}

customElements.define('header-component', Header);