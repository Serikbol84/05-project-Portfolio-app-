import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerHome = ({ item1Ref, meRef }) => {

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: item1Ref.current,
                start: "-19% 70%",
                end: "-19% 70%",
                // scrub: true,
                // markers: true,
            },
        })
        gsap.set(item1Ref.current, { x: -1100 });
        tl.to(item1Ref.current, { x: 0, duration: 1, delay: 0});

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: meRef.current,
                start: "-19% 70%",
                end: "-19% 70%",
                // scrub: true,
                // markers: true,
            },
        })
        gsap.set(meRef.current, { x: 500 });
        tl1.to(meRef.current,  { x: 0, duration: 1, delay: 0 });
        
        return () => {
            tl.kill(); 
            tl1.kill(); 
        };
        

    }, [item1Ref, meRef]);

    return null;
}
 
export default ScrollTriggerHome;