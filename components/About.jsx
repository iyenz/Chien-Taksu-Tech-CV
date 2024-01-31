import Devimg from './Devimg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";

import {
    User2
    , MailIcon
    , HomeIcon
    , PhoneCall
    , GraduationCap
    , Calendar
    , Briefcase
} from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Chien Shevanya Lie',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+62 821 440 4',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'chienshevanyalie@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'born on 08 des, 2006',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'jln.dukuh sari sesetan',
    },
]

const qualificationData = [

    
    {
        titel: 'experience',
        data: [
            {
                company: 'SMK TI BALI GLOBAL DENPASAR',
                years: '2022-PRENSENT',
            },
            {
                company: 'SMP DHARMA WIWEKA',
                years: '2019-2022',
            },
            {
                company: 'SD 11 SESETAN',
                years: '2013-2019',
            }
        ]
    }
]
const skillData = [
    {
        title: 'kemampuan',
        data: [
            {
                name: 'html,css',
            },
            {
                name: 'Front-end Developer',
            },
            {
                name: 'Javascript',
            },
            {
                name: 'Back-end Developer',
            },

        ]
    },
{
    title: 'tools',
    data: [
        {
            imgPath:'',
        },
        {
            imgPath:'',
        },
        {
            imgPath:'',
        },
        {
            imgPath:'',
        },
        {
            imgPath:'',
        },
    ]
}
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.titel === title);
    };

    return (
        <section className='xl:h-[860px] pb-12 xl:py-24' id='about'>
            <div className="container mx-auto" >
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto ">About me</h2>
                {/* image */}
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <Devimg containerStyle='
                    w-[350px] h-[500px] bg-no-repeat  relative'
                            imgSrc='/about/about.png'
                        />
                    </div>
                    {/* tabs */}
                    <div className="flex-1 pt-8" >
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[500px]
                            xl:border'>
                                <TabsTrigger className='w-[162px] xl-auto' value='personal'>Personal info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl-auto' value='qualifications'>Education</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div>
                                        <h3 className='h3 mb-4 text-center xl:text-left'>Profile</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                            Being educated at SMK IT Bali Global
                                            Denpasar, with a focus on Software
                                            Engineering (RPL) has sharpened my
                                            interest in becoming a software
                                            engineer. With a solid foundation and
                                            confidence from my education, I
                                            aspire to develop myself further at
                                            Taksu Tech, expanding my knowledge
                                            and expertise in the world of
                                            technology.
                                        </p>
                                        <div className='grid xl:grid-cols-2 xl:pt-8 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className='flex items-center gap-x-4 mx-auto 
                                                    xl:mx-0' key={index}>
                                                        <div className='text-green-500'>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>
                                    <div className='h-[300px]' >
                                            <h3 className='h3 mb-8 text-center xl:text-left text-black'>
                                                Educations
                                            </h3>
                                            
                                            {/* isi colum dibwh */}
                                            <div className='grid grid-cols-2 '>
                                            {/* isi 1 */}
                                            <div className="grid md-grid-cols-2 gap-y-8">
                                                <div className="flex gap-x-4 items-center text-[22px]
                                            text-green-500 absolute">
                                                
                                                    <div className='flex flex-col gap-y-3'>
                                                        {getData(qualificationData, 'experience').data.map((item, index) => {
                                                            const { company, years } = item;
                                                            return (
                                                                <div className='flex gap-x-8 group '
                                                                    key={index}>
                                                                    <div className="h-[84px] w-[11px] bg-border relative ml-2"></div>
                                                                    <div className="w-[11px] h-[11px] rounded-full
                                                                bg-green-500 relative -left-[5px]
                                                                group-hover:translate-y-[84px] transition-all
                                                                duration-500"></div>
                                                                    <div className='text-black'>
                                                                        <div className='font-semibold text-xl leading-none
                                                                    mb-2'>{company}
                                                                        </div>
                                                                        <div className='text-base font-medium'>{years}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                    <div className="text-center xl:text-left">
                                        <h3 className='h3 mb-8'>Tools I use </h3>
                                        {/* skills */}
                                        <hr className='items-center ' />
                                        <ul className='space-y-3 mt-5'>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JAVASCRIPT</li>
                                            <li>PHP</li>
                                        </ul>
                                        <hr className='items-center mt-7' />
                                        {/* bahasa */}
                                            <ul className='pt-3 flex space-x-10'>
                                            <li className='text-gray-900'><FaHtml5 className='w-[48px] h-[48px]'/></li>
                                            <li><FaCss3 className='w-[48px] h-[48px]' /></li>
                                            <li><IoLogoJavascript className='w-[48px] h-[48px]' /></li>
                                            <li><FaPhp className='w-[48px] h-[48px]' /></li>
                                            </ul>
                                        </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About