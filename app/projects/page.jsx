'use client';
import React, {useState} from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: '/work/Group1.png',
    category: 'PHP',
    name: 'CRUD BY YEN',
    description:
      'Welcome to my website! Here, I developed a CRUD project',
    link: 'https://github.com/chienlie/file-projeck/tree/1ceb51268c33a23eb0c4e0b90794cd6752474c08/projeck.akhir',
    github: 'https://github.com/chienlie/file-projeck/tree/1ceb51268c33a23eb0c4e0b90794cd6752474c08/projeck.akhir',
  },
  {
    image: '/work/Group2.png',
    category: 'javascript',
    name: 'NETFLIX',
    description:
      'Welcome to the JavaScript skill testing project website!',
    link: 'https://github.com/chienlie/file-projeck/tree/1ceb51268c33a23eb0c4e0b90794cd6752474c08/netflix',
    github: 'https://github.com/chienlie/file-projeck/tree/1ceb51268c33a23eb0c4e0b90794cd6752474c08/netflix',
  },
  {
    image: '/work/Group3.png',
    category: 'html/css',
    name: 'TEAM GROUP',
    description:
      'Welcome to our team website! We, Chien and Sade,',
    link: 'https://github.com/chienlie/file-projeck/tree/1ceb51268c33a23eb0c4e0b90794cd6752474c08/project%20desain%20grafis',
    github: 'https://github.com/chienlie/file-projeck/tree/1ceb51268c33a23eb0c4e0b90794cd6752474c08/project%20desain%20grafis',
  },
  {
    image: '/work/Group4.png',
    category: 'c++',
    name: 'PROGRAM KASIR',
    description:
      'welcome to the project cashier created by chien ',
    link: 'https://github.com/chienlie/file-projeck/blob/1ceb51268c33a23eb0c4e0b90794cd6752474c08/Lomba%20Pemdas.cpp',
    github: 'https://github.com/chienlie/file-projeck/blob/1ceb51268c33a23eb0c4e0b90794cd6752474c08/Lomba%20Pemdas.cpp',
  },
];

const uniqueCategories =[
  'all projects',
  ...new Set(projectData.map((item) => item.category)),

]

const Projects  = () => {
  const[categories, setCategories] = useState(uniqueCategories);
  const [category,setCategory] = useState('all projects');

  const fillteredProjects = projectData.filter((project) => {
      return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
      <section className="min-h-screen pt-12">
          <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          MY PROJECT
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-5 lg:max-w-[640]
          mb-12 mx-auto md:border'>
              {categories.map((category, index) => {
                return(
                  <TabsTrigger 
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[112px] md:w-auto'
                  >
                    {category}
                  </TabsTrigger>
                )
              })}
          </TabsList>
              <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-4
              gap-4'>
                {fillteredProjects.map((project, index)=>{
                  return <TabsContent value={category} key={index}>
                        <ProjectCard project={project} />
                  </TabsContent>
                })}
              </div>
        </Tabs>
          </div>
      </section>
    )
}

export default Projects ;