import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import FeaturedProject from "@/components/Projects/FeaturedProject";
import { fetchAPI } from "@/lib/api";

async function getDataProjects() {
  const response = await fetchAPI('/projects?populate=*')
  return response;
}
const projects = async () => {
  const { data: projects } = await getDataProjects();
  console.log(projects)
  return (
    <>
      <main className="w-full mab-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-y-32 md:gap-y-24 sm:gap-x-0">
            {
              projects.map((project: any) => {
                return (
                  <div key={project.id} className="col-span-12">
                    <FeaturedProject
                      type={project.attributes.type}
                      title={project.attributes.title}
                      summary={project.attributes.summary}
                      img={process.env.NEXT_PUBLIC_STRAPI_API_URL + project.attributes.img.data.attributes.url}
                      link={project.attributes.link}
                    />
                  </div>
                )
              })
            }
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
