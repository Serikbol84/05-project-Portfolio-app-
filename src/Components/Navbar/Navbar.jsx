import { NavLink } from "react-router-dom"
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css"


const Navbar = () => {

    const activeLink = 'nav-list_link nav-list_link-active';
    const normalLink = 'nav-list_link';

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Fontend</strong> portfolio
                    </NavLink>

                    <BtnDarkMode />

                    <ul className="nav-list">
                        <li className="nav-list_item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-list_item">
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Projects
                            </NavLink>
                        </li>

                        <li className="nav-list_item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;