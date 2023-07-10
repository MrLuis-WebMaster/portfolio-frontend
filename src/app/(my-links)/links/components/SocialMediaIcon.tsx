'use client';
import { motion } from "framer-motion";
import { TfiInstagram, TfiGithub, TfiLinkedin, TfiFacebook, TfiEmail } from "react-icons/tfi";

interface SocialIconType {
    link: string
    type: string
}

const SocialIcon = ({link, type}:SocialIconType) => {
    return (
        <motion.div className='text-2xl' whileHover={{ y: -5 }}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            {
              type === 'instagram' && (
                <TfiInstagram />
              )
            }
            {
              type === 'github' && (
                <TfiGithub />
              )
            }
            {
              type === 'linkedin' && (
                <TfiLinkedin />
              )
            }
            {
              type === 'facebook' && (
                <TfiFacebook />
              )
            }
            {
              type === 'email' && (
                <TfiEmail />
              )
            }
          </a>
        </motion.div>
    );
};

export default SocialIcon;