import { motion } from "framer-motion"
import LoadingPage from "./LoadingPage"
import DefaultWrapper from "../wrappers/DefaultWrapper"
export const PageAnimation = ({ children }) => {
    return (
        <>
            {/* <LoadingPage /> */}
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                {children}
            </motion.section>
        </>
    )
}
export const PageAnimationProfile = ({ children }) => {
    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                {children}
            </motion.section>
        </>
    )
}

