import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import FeatureProjects from "@/components/projects/FeatureProjects";
import Project from "@/components/projects/Project";

import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../public/images/projects/agency-website-cover-image.jpg";
import project3 from "../../public/images/projects/devdreaming.jpg";
import project4 from "../../public/images/projects/fashion-studio-website.jpg";
import project5 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import project6 from "../../public/images/projects/portfolio-cover-image.jpg";

const projects = () => {
  return (
    <>
      <Head>
        <title>Eugene Wilkins | About Page</title>
        <meta
          name="Projects Page"
          content="applications created with reactJS and Ruby"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeatureProjects
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={project1}
                link="/"
                github="www.github.com"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Agency website cover"
                title="React Portfolio Website"
                img={project2}
                link="/"
                github="www.github.com"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="dev dreaming"
                img={project3}
                link="/"
                github="www.github.com"
              />
            </div>

            <div className="col-span-12">
              <FeatureProjects
                type="Featured Project"
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive.."
                img={project6}
                link="/"
                github="www.github.com"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="fashion studio website"
                img={project4}
                link="/"
                github="www.github.com"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Project"
                title="nft collection website"
                img={project5}
                link="/"
                github="www.github.com"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
