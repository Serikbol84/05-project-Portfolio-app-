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
                end: "40% 40%",
                scrub: true,
                // markers: true,
            },
        })
        gsap.set(item1Ref.current, { x: -1100 });
        tl.to(item1Ref.current, { x: 0 });
        tl.fromTo(meRef.current, { x: 700 }, { x: 0 });

    }, [item1Ref, meRef]);

    return null;
}
 
export default ScrollTriggerHome;