import Header from "../Components/header/Header";
import { useLayoutEffect } from "react";
import gsap from "gsap";


const Home = () => {


    useLayoutEffect(() => {
        
        gsap.from(".content-list__item1", {
            // opacity: 1,
            x: -500, 
            duration: 2,
            
        })
    }, [])
    return (
        <>
            <Header />
            <main className="section">
                {/* <div className="container1"> */}

                    <div className="content-list">
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

                    </div>

                {/* </div> */}
            </main>
        </>
        
    );
}
 
export default Home;