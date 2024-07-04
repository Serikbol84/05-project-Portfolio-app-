import { motion } from "framer-motion";


const AnimatedTitle = ({ titleRef, pRef}) => {

    const titleAnimation = {
        initial: {height: 0},
        animate: {height: 'auto'},
        style: {overflow: 'hidden'},
        transition: {duration: 0.6, delay: 0.7}
    };

    const pAnimation = {
        initial: { x: '-100%' },
        animate: { x: 0 },
        transition: { duration: 0.6, delay: 0.7 },
        style: { position: 'relative' } 
    };

    return (
        <>
            {titleRef &&(
            <motion.div ref={titleRef} {...titleAnimation}>
                <h1 className="header__title">
                    <strong>
                        Hi, my name is <em>Serikbol</em>
                    </strong> 
                    <br /> a frontend developer
                </h1>
            </motion.div>
            )}

            {pRef &&(
            <motion.p ref={pRef} {...pAnimation}>
                with passion for learning and creating.
            </motion.p>
            )}
        </>
        
    );
}
 
export default AnimatedTitle;