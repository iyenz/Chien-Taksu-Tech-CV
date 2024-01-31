import { Sheet, SheetContent, SheetTrigger } from '/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from './Nav';
import Logo from './Logo';
import Sosials from './Sosials';

const MobileNav = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <AlignJustify className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
                <div className='flex flex-col items-center justify-between h-full py-8'>
                    <div className='flex flex-col items-center gap-y-32'>
                        <Logo linkStyles='text-2xl'/>
                        <Nav
                            containerStyles='flex flex-col items-center gap-y-32'
                            linkStyles='text-2xl'
                        />
                    </div>
                    <Sosials
                        containerStyle='flex gap-x-4' iconsStyle='text-2xl'
                    />
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;