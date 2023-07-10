'use client';
import { motion } from "framer-motion";

interface LinkType {
    titleLink: string
    link: string
    color: string
}

const Link = ({titleLink, link, color}:LinkType) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
        >
            <a href={link} style={{background: color}} className=' mb-12 w-full flex items-center justify-between relative border border-solid shadow-2xl p-6 border-light xs:p-4'>
                <div
                className="absolute top-1 -right-1 -z-10 w-[100%] h-[100%] bg-light"
                />
                <p className='text-dark text-2xl font-bold'>{titleLink}</p>
            </a>
        </motion.div>
    );
};

export default Link