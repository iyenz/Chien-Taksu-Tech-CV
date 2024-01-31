import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';


import{
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

//components
import Devimg from './Devimg';
import Sosials from './Sosials';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
    bg-bottom bg-cover dark:bg-none' >
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[650px] flex-col justify-center mx-auto xl:mx-0
          text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
            <h1 className='text-6xl xl:text-[52px] xL:leading-[80px] tracking-[-2px] font-bold'> Hello, my name is</h1>
            <h1 className='text-6xl xl:text-[72px] xL:leading-[80px] tracking-[-2px] font-bold '> Chien Shevanya lie</h1>
            <p className='text-muted-foreground text-lg mb-8 font-light max-w-[490px-] mx-auto xl:mx-0 pt-3'>
              I am a 16-year-old student attending a technology school in Denpasar, Bali.
              My main hobbies are sports, especially swimming, playing badminton, and running.
              I have a big dream to become a software engineer in the future,
              and I am very enthusiastic to keep learning and developing my technical skills in programming.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0
            mb-12">
              <Link href='/contact' className='bg-green-500 text-white hover:bg-green-700 rounded-full'>
                  <Button className='gap-x-2'>
                    Contact Me <Send size={18}/>
                    </Button>
              </Link>
              <Link href='https://drive.google.com/uc?export=download&id=1UkNWThV0zmM5Qw6rKZYQ5A91M86dIhGA' className='bg-black text-white hover:bg-gray-700 rounded-full'>
                  <Button className='gap-x-2'>
                    Download CV <Send size={18}/>
                    </Button>
              </Link>
            </div>
            <Sosials  containerStyle='flex gap-x-6 mx-auto xl:-0 hidden'
            iconsStyle='text-foreground text-[32px] hover:text-primary transition-all'/>
          </div>
          {/* Image */}
          <div className="hidden xl:flex relative">    
            <div className="w-[610px] h-[520px] bg-no-repeat absolute -top-1 -right-"></div>
          <Devimg containerStyle='w-[610px] h-[505px]  bg-no-repeat relative bg-bottom'
          imgSrc='/hero/Yen.png'/>
          </div> 
          {/* icons */}
          <div className="hidden md:flex absolute left-2/4 bottom-44
          xl:bottom-12 animate-bounce">
              <RiArrowDownSLine className='text-3xl text-primary'/>
          </div>
        </div>
      </div>
    </section>
  ) 
}

export default Hero;