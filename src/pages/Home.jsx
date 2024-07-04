import Header from "../Components/header/Header";

import './../styles/main.css'
import Me from "./../img/Me.jpg"
import ScrollTriggerHome from "../utils/scrollTrigger";
import React, { useRef } from "react";

const Home = () => {
    const item1Ref = useRef(null); 
    const meRef = useRef(null); 
       
    return (
        <>
            <Header />
            <main className="section">
                <div className="container">
                    
                    <div className="content-list_home">
                        
                        <div className="content-list__item1" ref={item1Ref}>
                            <h2 className="title-2">About Me</h2>
                            <p>
                                I am a front-end developer with experience in creating modern and efficient web applications. 
                                My core specialization includes web page layout, working with JavaScript, and using the React library 
                                to develop dynamic user interfaces. <br />
                                <br />

                                Web Page Layout: Creating responsive and cross-browser layouts using HTML, CSS, and modern CSS frameworks.
                                JavaScript: Developing interactive elements and functionalities, working with asynchronous code, APIs, and other modern features of the language.
                                React: Building component-based architectures, managing application state with Redux or Context API, and creating performant and scalable applications.
                            </p>
                        </div>

                        <img src={Me} alt="Me" className="me" ref={meRef}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} // Здесь я поставил это потому, что в css поммему-то неработало, глюк какой-то 
                        /> 
                    </div>

                </div>
            </main>
            <ScrollTriggerHome item1Ref={item1Ref} meRef={meRef} />
        </>
        
    );
}
 
export default Home;