import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/About/Education";
import Experience from "@/components/About/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/About/Skills";
import Image from "next/image";
import { fetchAPI } from "@/lib/api";

async function getDataBiography() {
  const response = await fetchAPI('/cv?populate=*')
  return response;
}
async function getDataSkills() {
  const response = await fetchAPI('/skills?populate=*')
  return response;
}
async function getDataSoftSkills() {
  const response = await fetchAPI('/soft-skills?populate=*')
  return response;
}
async function getDataExperiencie() {
  const response = await fetchAPI('/experiencies')
  return response;
}
async function getDataEducation() {
  const response = await fetchAPI('/educations')
  return response;
}

export const metadata = {
  title: 'About - Mr. Luis'
}

const about = async (): Promise<JSX.Element> => {
  const { data: { attributes: { biography, image } } } = await getDataBiography();
  const { data: skills } = await getDataSkills();
  const { data: SoftSkills } = await getDataSoftSkills();
  const { data: experiencies } = await getDataExperiencie();
  const { data: educations } = await getDataEducation();
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 lg:col-span-8 flex flex-col items-start justify-start md:order-2">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium" dangerouslySetInnerHTML={{ __html: biography }} />
            </div>

            <div className="col-span-4 lg:col-span-8 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image.data.attributes.url}
                width={450}
                height={450}
                alt="Luis Martinez"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

          </div>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 lg:col-span-8">
              <Skills data={skills} />
            </div>
            <div className="col-span-4 lg:col-span-8">
              <Skills title="Soft Skills" data={SoftSkills} />
            </div>
          </div>
          <Experience data={experiencies} />
          <Education data={educations} />
        </Layout>
      </main>
    </>
  );
};

export default about;
