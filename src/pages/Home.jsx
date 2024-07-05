import React, { useRef } from "react";
import Header from "../Components/header/Header";
import ScrollTriggerHome from "../utils/scrollTrigger";
import Me from "./../img/Me.jpg"
import js from "./../img/home/js.png"
import html from "./../img/home/html.png"
import redux from "./../img/home/redux.png"
import react from "./../img/home/react.png"

import './../styles/main.css'

const Home = () => {
    const item1Ref = useRef(null); 
    const meRef = useRef(null); 
       
    return (
        <>
            <Header />
            <main className="section">
                {/* <div className="container"> */}
                    
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

                    <div className="skills_wrapper">

                        <div className="skills__title">
                            <h2>My Skills</h2>
                        </div>

                        <div className="skills__info">

                            <div className="skills__info-item">

                                <div className="skills__info-img">
                                    <img src={js} alt="" className="js pic" />
                                </div>
                                
                                <div className="skills_info-itex_text">
                                    <h3>JavaScript:</h3>
                                    <p> Developing interactive elements and functionalities, working with asynchronous code, 
                                        APIs, and other modern features of the language.
                                    </p>
                                </div>
                               
                            </div>

                            <div className="skills__info-item">

                                <div className="skills__info-img">
                                    <img src={react} alt="" className="react pic" />
                                </div>

                                <div className="skills_info-itex_text">
                                    <h3>React:</h3>
                                    <p> Building component-based architectures, managing application state with Redux or 
                                        Context API, and creating performant and scalable applications.
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="skills__info">

                            <div className="skills__info-item">

                                <div className="skills__info-img">
                                    <img src={redux} alt="" className="redux pic" />
                                </div>

                                <div className="skills_info-itex_text">
                                    <h3>Redux:</h3>
                                    <p> Managing complex application state using Redux, implementing actions, reducers, and 
                                        middleware to handle asynchronous operations and side effects.
                                    </p>
                                </div>

                                </div>

                                <div className="skills__info-item">

                                <div className="skills__info-img">
                                    <img src={html} alt="" className="html pic" />
                                </div>

                                <div className="skills_info-itex_text">
                                    <h3>Web Page Layout:</h3>
                                    <p> 
                                        Creating responsive and cross-browser layouts using HTML, CSS, and modern CSS frameworks.
                                    </p>
                                </div>

                            </div>

                        </div>
                                                
                    </div>

                {/* </div> */}
            </main>
            <ScrollTriggerHome item1Ref={item1Ref} meRef={meRef} />
        </>
        
    );
}
 
export default Home;