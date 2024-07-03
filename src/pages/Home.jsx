import Header from "../Components/header/Header";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './../styles/main.css'
// import Me from "./../img/Me.jpg"





const Home = () => {
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:".content-list__item1",
                start: "-19% 70%",
                end: "40% 40%",
                scrub: true,
                // markers: true,
                
            },
        })
        gsap.set(".content-list__item1", { x: -1100 });
        tl.to(".content-list__item1", 
            { x: 0 }
        )
        .fromTo(
            ".me",
            { x: 700},
            { x: 0}
        )

    }, [])
    
    return (
        <>
            <Header />
            <main className="section">
                {/* <div className="container"> */}
                    
                    <div className="content-list_home">
                        
                        <div className="content-list__item1">
                            <h2 className="title-2">Frontend</h2>
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

                        <div className="me">
                            {/* <img src={Me} alt="" className="pic"/> */}
                        </div>
                        
                        

                    </div>
                    

                {/* </div> */}
            </main>
        </>
        
    );
}
 
export default Home;