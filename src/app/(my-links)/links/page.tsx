import React from 'react'
import Link from './components/Link';
import SocialIcon from './components/SocialMediaIcon';
import Image from "next/image";

import { fetchAPI } from "@/lib/api";

async function getDataSocialMedia() {
  const response = await fetchAPI('/cv?populate=*')
  return response;
}
async function getDataLinks() {
  const response = await fetchAPI('/links')
  return response;
}

const Links = async (): Promise<JSX.Element> => {
  const { data: { attributes: { image, socialMedia, name, jobTitle, shortDescriptionLinks } } } = await getDataSocialMedia();
  const { data: links } = await getDataLinks();

  const socialMediaKeys = Object.keys(socialMedia);
  const hasSocialMediaData = socialMediaKeys.length > 0;

  const hasLinksData = links.length > 0;

  return (
    <div className='my-12 flex flex-col items-center gap-2.5 text-slate-300'>
      <div className='w-44 h-44 rounded-full'>
        <Image
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image.data.attributes.url}
          width={450}
          height={450}
          alt={name}
          className="w-full rounded-full"
          priority
        />
      </div>
      <h1 className='text-2xl font-semibold mt-2'>{name} | {jobTitle}</h1>
      <p className='font-light'>{shortDescriptionLinks}</p>
      {hasSocialMediaData ? (
        <div className='flex gap-4 mt-2'>
          {socialMediaKeys.map((key: string) => {
            const link = socialMedia[key];
            return (
              <React.Fragment key={key}>
                <SocialIcon
                  link={link}
                  type={key}
                />
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <p>No social media information available. Please configure.</p>
      )}
      <div className='w-full mt-6'>
        {hasLinksData ? (
          links.map((link: any) => (
            <React.Fragment key={link.id}>
              <Link
                titleLink={link.attributes.titleLink}
                color={link.attributes.color}
                link={link.attributes.link}
              />
            </React.Fragment>
          ))
        ) : (
          <p>No links available. Please configure.</p>
        )}
      </div>
    </div>
  );
};

export default Links;