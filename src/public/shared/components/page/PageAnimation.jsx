import { motion } from "framer-motion"
export const PageAnimation = ({ children }) => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {children}
        </motion.section>
    )
}