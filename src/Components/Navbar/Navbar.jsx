

const Navbar = () => {
    return (
        <nav class="nav">
            <div class="container">
                <div class="nav-row">
                    <a href="./index.html" class="logo"><strong>Freelancer</strong> portfolio</a>

                    <button class="dark-mode-btn">
                        <img src="./img/icons/sun.svg" alt="Light mode" class="dark-mode-btn__icon" />
                        <img src="./img/icons/moon.svg" alt="Dark mode" class="dark-mode-btn__icon" />
                    </button>

                    <ul class="nav-list">
                        <li class="nav-list__item"><a href="./index.html" class="nav-list__link nav-list__link--active">Home</a></li>
                        <li class="nav-list__item"><a href="./projects.html" class="nav-list__link">Projects</a></li>
                        <li class="nav-list__item"><a href="./contacts.html" class="nav-list__link">Contacts</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;