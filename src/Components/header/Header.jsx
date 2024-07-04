import { motion } from "framer-motion";
import "./style.css"


const Header = () => {

    return (
        <header className="header">
            <div className="header__wrapper">
                
                <motion.div className="header__title1"
                    initial={{height: 0}}
                    animate={{height: 'auto'}}
                    style={{overflow: 'hidden'}}
                    transition={{duration: 1, delay: 0.7}}>
                        <h1 className="header__title">
                            <strong>
                                Hi, my name is <em>Serikbol</em>
                            </strong> 
                            <br /> a frontend developer
                        </h1>
                </motion.div>
            
                <div className="header__text">
                    <motion.p
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        style={{ position: 'relative' }}>
                        with passion for learning and creating.
                    </motion.p>
                </div>

            </div>
        </header>
    );
}
 
export default Header;