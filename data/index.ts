import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a clone of the notion app",
    description: "WorkFlow",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Musiclive",
    des: "A website where you can search for live music in greater sacramento",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/fm.svg"],
    link: "https://musicliveee.netlify.app/",
  },
  {
    id: 2,
    title: "Metawin Clone",
    des: "A cryto gaming platform clone",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://metawin.netlify.app/",
  },
  {
    id: 3,
    title: "Insure",
    des: "A landing Page",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://insuresite-fem.netlify.app/",
  },
  {
    id: 4,
    title: "Interledgerswap",
    des: "A multipage website",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://interleadgerswap.netlify.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Osezua was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Osezua's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Osezua is the ideal partner.",
    name: "Demi3D",
    title: "Designer at mimi Interiors",
  },
  {
    quote:
      "Collaborating with Osezua was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Osezua's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Osezua is the ideal partner.",
    name: "Demi3D",
    title: "Designer at mimi Interiors",
  },
  {
    quote:
      "Collaborating with Osezua was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Osezua's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Osezua is the ideal partner.",
    name: "Demi3D",
    title: "Designer at mimi Interiors",
  },
  {
    quote:
      "Collaborating with Osezua was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Osezua's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Osezua is the ideal partner.",
    name: "Demi3D",
    title: "Designer at mimi Interiors",
  },
];

export const companies = [
  {
    id: 1,
    // name: "cloudinary",
    // img: "/cloud.svg",
    // nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    // name: "appwrite",
    // img: "/app.svg",
    // nameImg: "/appName.svg",
  },
  {
    id: 3,
    // name: "HOSTINGER",
    // img: "/host.svg",
    // nameImg: "/hostName.svg",
  },
  {
    id: 4,
    // name: "stream",
    // img: "/s.svg",
    // nameImg: "/streamName.svg",
  },
  {
    id: 5,
    // name: "docker.",
    // img: "/dock.svg",
    // nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern-SecureID limited",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Junior Frontend Engineer-Union Systems Limited",
    desc: "Designed and developed interactive ui for a web app with Angular,figma,tailwind and typescript.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the frontend development of a web app for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/DavidOsezua",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/david-osezua-a63216267/",
  },
];
