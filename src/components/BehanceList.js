import React, { useState } from 'react';
import { behanceItem } from '../Data'; // Importing data from '../Data'
import { AiFillFolderOpen } from 'react-icons/ai'; // Importing icon component
import '../gallery.css';
import { IoIosCloseCircle } from "react-icons/io"; // Importing icon component

const BehanceList = () => {
    // State variables
    const [model, setModel] = useState(false); // State for modal
    const [tempimgSrc, setTempImgSrc] = useState(''); // State for temporary image source

    // Function to handle modal image display
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc); // Set temporary image source
        setModel(true); // Open modal
    }

    // Function to toggle color on like icon click
    const changeColor = (event) => {
        if (event.target.tagName === "path") {
            // If click is on path element
            const past_color = event.target.parentNode.getAttribute("fill");
            if (past_color === "gray") {
                event.target.parentNode.setAttribute("fill", "blue"); // Change color to blue
            } else {
                event.target.parentNode.setAttribute("fill", "gray"); // Change color to gray
            }
        } else if (event.target.tagName === "svg") {
            // If click is on svg element
            const past_color = event.target.getAttribute("fill");
            if (past_color === "gray") {
                event.target.setAttribute("fill", "blue"); // Change color to blue
            } else {
                event.target.setAttribute("fill", "gray"); // Change color to gray
            }
        }
    }

    // Rendering component
    return (
        <>
            {/* Modal */}
            <div className={model ? "model open" : "model"}>
                <img src={tempimgSrc} alt="" />
                <IoIosCloseCircle onClick={() => setModel(false)} /> {/* Close modal icon */}
            </div>

            {/* Main section */}
            <section>
                <div className="container-fluid px-4">
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 gap-3 py-5">
                        {/* Mapping through behanceItem data */}
                        {behanceItem.map((item) => (
                            <div className="category-item cursor-pointer">
                                {/* Category item image */}
                                <div className="cat-img relative overflow-hidden rounded-md" onClick={() => getImg(item.featureImg)}>
                                    <div className="bg-overlay"></div>
                                    <img src={item.featureImg} alt={item.featureImg} />
                                    {/* Save file button */}
                                    <div className="save-file flex items-center absolute cursor-pointer top-2 left-2 py-2 px-3 bg-black/50 rounded-full">
                                        <div className="s-icon text-white text-sm pr-1">
                                            <AiFillFolderOpen />
                                        </div>
                                        <span className='text-white text-xs font-medium'>Save</span>
                                    </div>
                                    {/* Patch image */}
                                    <div className="patch absolute top-0 hover:translate-y-[-5px] cursor-pointer translate-y-[-10px] right-2">
                                        <img src={item.fePatch} alt="" />
                                    </div>
                                </div>
                                {/* Category item info */}
                                <div className="cat-info flex justify-between py-1">
                                    {/* Category name */}
                                    <div className="cat-name cursor-pointer">
                                        <h4 className='font-medium text-sm hover:underline leading-[15px] text-ellipsis'>{item.featureTxt}</h4>
                                    </div>
                                    {/* Behance time */}
                                    <div className="be-time flex">
                                        {/* Like icon */}
                                        <div className="be-like flex mr-2">
                                            <div className="li-icon text-[#959595] mr-1 mt-[2px]">
                                                <svg onClick={changeColor} stroke="black" fill="gray" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"></path></svg>
                                            </div>
                                            <span className='text-sm font-medium text-[#000000]'>{item.feLike}</span>
                                        </div>
                                        {/* Watch icon */}
                                        <div className="be-watch flex mr-2">
                                            <div className="wa-icon text-[#959595] mr-1 mt-[2px]">
                                                {item.fewatchIcon}
                                            </div>
                                            <span className='text-sm font-medium text-[#000000]'>{item.feWatch}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BehanceList;
