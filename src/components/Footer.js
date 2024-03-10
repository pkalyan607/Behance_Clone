import React from 'react'
import { adobeLogo } from '../Data'

// Footer component
const Footer = () => {
    return (
        // Footer section
        <section className='px-4 py-3 w-full bottom-0 bg-white'>
            <div className="container-fluid ">
                {/* left side */}
                <div className="grid lg:grid-cols-2 gap-3 items-center ">

                <div className="adobe-right flex lg:justify-end">
                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                        <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
                        <a href="" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                        
                    </div>
                </div>
                </div>
                <p className='text-sm'> 2024 Adobe Inc. All rights reserved.</p>
            </div>
        </section>
    )
}

export default Footer
