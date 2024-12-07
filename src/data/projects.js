import bbc from '@/assets/img/projects/bbc.jpg';
import pamperedpaws from '@/assets/img/projects/pampered-paws.jpg';
import smartbin from '@/assets/img/projects/smartbin.png';

export const projects = [
  {
    img: bbc,
    title: 'Box Bliss Chance',
    description:
      'Develop an e-commerce project featuring a mystery box system with three rarities—legendary, epic, and common—offering a thrilling unboxing experience with randomized rewards.',
    techStack: [
      'ReactJS',
      'Redux',
      'Tailwind CSS',
      'Shadcn/ui',
      'Firebase',
      'OpenAI',
    ],
  },
  {
    img: pamperedpaws,
    title: 'Pampered Paws',
    description:
      'Develop a user-friendly web application designed to simplify dog grooming appointments. Users can browse available slots and conveniently book grooming services for their furry friends withjust a few clicks.',
    techStack: [
      'ReactJS',
      'Zustand',
      'Tailwind CSS',
      'Shadcn/ui',
      'NodeJS',
      'ExpressJs',
      'MongoDB',
    ],
  },
  {
    img: smartbin,
    title: 'Smart Bin',
    description:
      'Developed a web application that leverages AI and OpenAI API to optimize waste collection, categorize recyclables, and help the community improve efficiency and sustainability.',
    techStack: [
      'ReactJS',
      'React Native',
      'Redux',
      'Tailwind CSS',
      'DaisyUI',
      'Firebase',
      'OpenAI',
    ],
  },
];
