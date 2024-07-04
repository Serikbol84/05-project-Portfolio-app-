import React, { useRef } from "react";
import AnimatedTitle from "../../utils/animatedTitle";
import "./style.css"

const Header = () => {
    const titleRef = useRef(null);
    const pRef = useRef(null);

    return (
        <header className="header">
            <div className="header__wrapper">
                
                <div className="header__title1" >
                    <AnimatedTitle titleRef={titleRef} />
                </div>
            
                <div className="header__text">
                    <AnimatedTitle pRef={pRef} />
                </div>

            </div>
        </header>
    );
}
 
export default Header;