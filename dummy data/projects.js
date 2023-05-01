import project1 from "../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../public/images/projects/agency-website-cover-image.jpg";
import project3 from "../public/images/projects/devdreaming.jpg";
import project4 from "../public/images/projects/fashion-studio-website.jpg";
import project5 from "../public/images/projects/nft-collection-website-cover-image.jpg";
import project6 from "../public/images/projects/portfolio-cover-image.jpg";

const DUMMY_PROJECTS = [
  {
    id: "p1",
    title: "Crypto Screener Application",
    summary:
      "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
    link: "/",
    github: "www.github.com",
    image: { project1 },
    isFeatured: true,
  },
  {
    id: "p2",
    title: "React Portfolio Website",
    summary:
      "A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive..",
    link: "/",
    github: "www.github.com",
    image: { project2 },
    isFeatured: true,
  },
  {
    id: "p3",
    title: "Agency website cover",
    link: "/",
    github: "www.github.com",
    image: "../../public/images/projects/agency-website-cover-image.jpg",
    isFeatured: false,
  },
  {
    id: "p4",
    title: "dev dreaming",
    link: "/",
    github: "www.github.com",
    image: "../../public/images/projects/devdreaming.jpg",
    isFeatured: false,
  },
  {
    id: "p5",
    title: "fashion studio website",
    link: "/",
    github: "www.github.com",
    image: "../../public/images/projects/fashion-studio-website.jpg",
    isFeatured: false,
  },
  {
    id: "p6",
    title: "nft collection website",
    link: "/",
    github: "www.github.com",
    image:
      "../../public/images/projects/nft-collection-website-cover-image.jpg",
    isFeatured: false,
  },
];

export function getFeaturedProjects() {
  return DUMMY_PROJECTS.filter((project) => project.isFeatured);
}

export function getProjects() {
  return DUMMY_PROJECTS.filter((project) => !project.isFeatured);
}

export function getAllProjects() {
  return DUMMY_PROJECTS;
}
//TODO: Add category and filter
// export function getFilteredProject(categoryFilter) {
//   const { category } = categoryFilter;

//   let filteredProjects = DUMMY_PROJECTS.filter((project) => {
//     return (
//       project.category === category
//     );
//   });

//   return getFilteredProject;
// }

export function getProjectById(id) {
  return DUMMY_PROJECTS.find((project) => project.id === id);
}
