class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="profile-image">
                <img alt="Yucel Cekinmez" src="../images/profile.jpg">
            </div>
            <div class="intro-text">
                <h1>Yucel Cekinmez</h1>
                <p>Software Engineer</p>
                <div class="social-links">
                    <a href="https://github.com/cekinmezyucel" rel="noopener noreferrer" target="_blank"><img
                            alt="GitHub" src="../images/github-logo.png"></a>
                    <a href="https://www.linkedin.com/in/cekinmezyucel" rel="noopener noreferrer" target="_blank"><img
                            alt="LinkedIn" src="../images/linkedin-logo.png"></a>
                </div>
                <div class="app-links">
                    <a href="index.html" rel="noopener noreferrer">Home</a> /
                    <a href="blog.html" rel="noopener noreferrer">Blog</a>
                </div>
            </div>
        </header>
    `;
    }

}

customElements.define('header-component', Header);