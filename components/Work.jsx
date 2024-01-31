'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

// components
import ProjectCard from '/components/ProjectCard';
import { Description } from '@radix-ui/react-dialog';

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
const work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className="container mx-auto">
                {/* text */}
                <div className='max-w-[400x] mx-auto xl:mx-0
                text-center xl:text-left mb-12 xl:h-[400px] flex
                flex-col justify-center items-center xl:items-start'>
                    <h2 className='section-title mb-4'>Latest Project</h2>
                    <p className='subtitle mb-8 text-left max-w-[400px]'>During my educational journey, I have completed various projects both individually and in groups.
                    Some of these include software development, complex mathematical problem solving,
                    as well as collaborative projects that strengthened my team skills and creativity.</p>
                    <Link href='/projects'>
                        <Button className='bg-green-500 rounded-full text-white'>Al l projects</Button>
                    </Link>
                </div>
                <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                    <Swiper className='h-[480px]' slidesPerView={1}
                    breakpoints={{
                        640:{
                            slidesPerView: 2
                        }
                        }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                        {projectData.slice(0, 4).map((project, index) => (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default work