import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import About from './About';

const links = [
    { path: '/' ,name: 'Home'}, 
    { path: '/#about', name: 'About'},
    { path: '/projects' ,name: 'My project'},
   
];


const Nav = ({ containerStyles, linkStyles, underlineStyle}) => {
    const path = usePathname();
  return (
   <nav className={`${containerStyles}`}>
    {links.map((link, index)=>{
        return (
            <Link href={link.path}
            key={index} 
            className={`capitalize ${linkStyles}`}>
            
            {link.path === path &&(
                <motion.span 
                initial={{ y: '-100%'}}
                animate={{ y: 0}} 
                transition={{type: 'tween'}}
                layoutId='underline'
                className={'${underlineStyle}'}
                />
            )}
            {link.name}
            </Link>
        );
        })}
  </nav>
 )
}
export default Nav;