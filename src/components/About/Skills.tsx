'use client';
import Image from 'next/image';
import { motion } from "framer-motion";

interface Skill {
    name: string;
    imageSrc: string;
}

const SkillCard = ({ name, imageSrc }: Skill) => {
    console.log(imageSrc)
    return (
        <motion.div
            className="flex flex-col col-span-2 md:col-span-3 items-center justify-center p-6 bg-zinc-200 dark:bg-zinc-900 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -10 }}
        >
            <Image src={imageSrc} alt={name} width={128} height={128} />
            <h3 className="text-lg font-medium text-center">{name}</h3>
        </motion.div>
    );
};


const Skills = ({ data, title = 'Skills' }: any) => {
    const skills: Skill[] = data.map((info: any): Skill => {
        return {
            name: info.attributes.name,
            imageSrc: process.env.NEXT_PUBLIC_STRAPI_API_URL + info.attributes.iconSkill.data.attributes.url,
        }
    })

    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full md:text-6xl md:mt-32">{title}</h2>
            <div className="w-full my-40 relative flex items-center justify-center rounded-full">
                <div className="grid grid-cols-6 gap-8">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} name={skill.name} imageSrc={skill.imageSrc} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Skills;
