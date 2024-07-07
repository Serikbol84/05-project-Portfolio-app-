import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Components/header/Header";
import ScrollTriggerHome from "../utils/scrollTrigger";
import { Skills } from "../helpers/skillsList";
import gsap from "gsap";
import Me from "./../img/Me.jpg"


import './../styles/main.css'


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const item1Ref = useRef(null); 
    const meRef = useRef(null); 
    

    useEffect(() => { //Вот эту часть никак не смог перенести на другой файл, мозгов уже не хватило
        Skills.forEach((skill) => {
            gsap.fromTo(`.skills__info-item-${skill.id}`, 
                { opacity: 0, y: 100 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1,
                    scrollTrigger: {
                        trigger: `.skills__info-item-${skill.id}`,
                        start: "-20% 80%",
                        end: "-20% 60%",
                        scrub: true,
                        // markers: true,
                    }
                }
            );
        });
    }, []);
    

    return (
        <>
            <Header />
            <main className="section">
                {/* <div className="container"> */}
                    
                    <div className="content-list_home">
                        
                        <div className="content-list__item1" ref={item1Ref}>
                            <h2 className="title-2">Exploring the Digital Realm</h2>
                            <p>
                                My career began in a completely different field. For 15 years, I worked in the oil industry, 
                                quickly rising to the position of chief engineer. Though my role brought initial satisfaction, 
                                I eventually hit a ceiling with no room for further growth. This realization prompted me to seek a new 
                                direction, one that had always intrigued me—Information Technology. <br /><br />

                                I had always been attracted to the IT field, but I had long doubted myself, thinking that 
                                programming was for the young. However, at some point, I decided to start from scratch. The IT 
                                field fascinated me with its endless opportunities to learn and develop. <br /><br />

                                At 40, I made the bold decision to leave a stable yet unfulfilling job and dive into the world of web 
                                development. I started with the basics: HTML, CSS, JavaScript, and React. Although I am still a beginner front-end 
                                developer, I feel that I am on the right path. Web development allows me to seek a balance between logic and 
                                creativity, creating interfaces that combine minimalist geometry with dynamic color schemes. <br /><br />

                                Past fears and doubts are now behind me, and I don't regret my decision for a moment. The IT world has opened new 
                                horizons for me, and I confidently look to the future, continuing to learn and grow in this new field.
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
                            {Skills.map((skill) => (
                                <div className={`skills__info-item skills__info-item-${skill.id}`} key={skill.id} >

                                    <div className="skills__info-img">
                                        <img src={skill.img} alt={skill.title} className="pic" />
                                    </div>

                                    <div className="skills_info-item_text">
                                        <h3>{skill.title}</h3>
                                        <p>{skill.abstract}</p>
                                    </div>

                                </div>
                            ))}         
                        </div>                        
                    </div>

                {/* </div> */}
            </main>
            <ScrollTriggerHome item1Ref={item1Ref} meRef={meRef} />
        </>
        
    );
}
 
export default Home;