'use client';
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const FramerImage = motion(Image);

type ProjectData = {
    title: string;
    type: string;
    img: StaticImageData;
    link: string;
};

type FeaturedProjectProps = ProjectData & {
    summary: string;
};

const FeaturedProject = ({
    type,
    title,
    summary,
    img,
    link,
}: FeaturedProjectProps) => {
    return (
        <article
            className="w-full flex items-center justify-between relative  rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
        >
            <div
                className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
    rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
    "
            />
            <Link
                href={link}
                target="_blank"
                className="w-1/2 sm:w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage
                    src={img}
                    alt={title}
                    width={50}
                    height={50}
                    className="w-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    style={{ objectFit: "cover", maxHeight: "400px" }}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
                    {type}
                </span>
                <Link
                    href={link}
                    target="_blank"
                    className="hover:underline underline-offset-2"
                >
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
                        {title}
                    </h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
                    {summary}
                </p>
                <div className="mt-2 flex items-center">
                    <Link
                        href={link}
                        target="_blank"
                        className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base
            "
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default FeaturedProject;