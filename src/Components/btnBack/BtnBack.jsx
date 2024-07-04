import './style.css'
import { motion } from "framer-motion"

const BtnBack = () => {
    return (
        <motion.button className='btn-back'
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }} 
        />
    );
}
 
export default BtnBack;