import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Home/Icons';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { fetchAPI } from "@/lib/api";
async function getData() {
    const response = await fetchAPI('/cv?populate=*')
    return response;
}

export const metadata = {
    title: 'Home - Mr. Luis'
}
export default async function Home(): Promise<JSX.Element> {
    const { data: { attributes: { titleStart, shortDescriptionHome, email, cv, imageHome } } } = await getData();
    return (
      <>
        <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
          <Layout className="pt-0 md:pt-16 sm:pt-16">
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className="w-1/2 md:w-full">
                {imageHome ? (
                  <Image
                    src={process.env.NEXT_PUBLIC_STRAPI_API_URL + imageHome?.data?.attributes?.url}
                    width={2000}
                    height={2000}
                    alt="Home"
                  />
                ) : (
                  <div>No image available</div>
                )}
              </div>
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                  text={titleStart || ''}
                  className="!text-5xl !text-left
                xl:!text-4xl lg:!text-center lg:!text=6xl md:!text-3xl sm:!text-2xl"
                />
                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  {shortDescriptionHome || 'No description available'}
                </p>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  {cv ? (
                    <Link
                      href={process.env.NEXT_PUBLIC_STRAPI_API_URL + cv?.data[0]?.attributes?.url}
                      target="_blank"
                      className="flex items-center text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base"
                      download
                    >
                      Resume <LinkArrow className="w-6 ml-1" />
                    </Link>
                  ) : (
                    <div>No CV available</div>
                  )}
                  {email ? (
                    <Link
                      href={`mailto:${email}`}
                      target="_blank"
                      className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                    >
                      Contact
                    </Link>
                  ) : (
                    <div>No email available</div>
                  )}
                </div>
              </div>
            </div>
          </Layout>
        </main>
      </>
    );
  }
  
