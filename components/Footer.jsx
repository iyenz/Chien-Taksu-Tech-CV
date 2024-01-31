
import Sosials from "./Sosials"

const Footer = () => {
    return (
    <footer className="bg-gray-900 py-12">
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-between">
                {/* socials */}
                <Sosials  
                    containerStyle='flex gap-x-6 mx-auto xl:mx-0 mb-4'
                    iconsStyle='text-green-500 text-[20px] hover:text-white
                    transition-all'
                    />
                    {/* coopyright */}
                    <div className="text-muted-foreground text-white">
                        Copyright &copy; Chien shevanya lie. All rights reserved.
                    </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer