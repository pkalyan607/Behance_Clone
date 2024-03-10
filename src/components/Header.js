import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { MdArrowDropDown, MdOutlineSort } from 'react-icons/md';
import { CgMenuLeft } from 'react-icons/cg';
import { behance_logo } from '../Data';
import { adobeLogo } from '../Data';
import { searchType } from '../Data';
import { tagName } from '../Data';

// Function to open mobile menu
const openMenu = () => {
  const main_header = document.getElementById('header');
  main_header.classList.toggle('menuopen');
}

// Function to close mobile menu
const closeMenu = () => {
 openMenu();
}

// Header component
const Header = () => {
        // State variables
    const [dropdownData, setDropDownData] = useState([
        "Curated", "Most Appreciated", "Most Viewed", "Most Discussed", "Most Recent"
    ]);

    const [data, setData] = useState([
        "Apple", "Ant", "Airplane", "Anchor", "Arrow", "Banana", "Ball", "Book", "Bee", "Butterfly", "Cat", "Car", "Cake", "Chair", "Clock", "Dog", "Door", "Diamond", "Desk", "Dinosaur", "Elephant", "Egg", "Earth", "Envelope", "Eagle", "Fish", "Flag", "Fire", "Flower", "Fan", "Guitar", "Grass", "Globe", "Glass", "Goldfish", "Hat", "House", "Heart", "Hammer", "Horse", "Ice cream", "Island", "Insect", "Igloo", "Iron", "Jam", "Jug", "Jellyfish", "Jacket", "Jet", "Kite", "Key", "King", "Kangaroo", "Knife", "Lion", "Lamp", "Laptop", "Lemon", "Leaf", "Monkey", "Moon", "Magnet", "Mountain", "Map", "Nest", "Net", "Notebook", "Nose", "Nail", "Orange", "Owl", "Octopus", "Oven", "Ocean", "Pencil", "Penguin", "Piano", "Pear", "Pineapple", "Queen", "Quilt", "Quill", "Question", "Quail", "Rainbow", "Robot", "Rocket", "Rose", "Ring", "Sun", "Star", "Socks", "Snake", "Spoon", "Tree", "Train", "Tiger", "Telephone", "Teapot", "Umbrella", "Unicorn", "Underwear", "Uniform", "Ukelele", "Violin", "Van", "Vase", "Volcano", "Vegetable", "Window", "Watch", "Wheel", "Watermelon", "Whale", "Xylophone", "X-ray", "Xenon", "Xerxes", "Xylograph", "Yacht", "Yo-yo", "Yogurt", "Yak", "Yarn", "Zebra", "Zipper", "Zoo", "Zigzag", "Zucchini"
    ]);

    const [filteredData, setFilteredData] = useState([]);     

    // Function to handle search input
    const search = (event) => {
        let s = event.target.value.toLowerCase();
        if (s !== "") {
            const filteredResults = data.filter((item) =>
                item.toLowerCase().startsWith(s)
            );
            setFilteredData(filteredResults);
        } else {
            setFilteredData([]);
        }
    };
    
    // Rendering component
    return (
        <>
            <header className='header' id='header'>
                {/* Mobile menu */}
                <div id='menu' className='menu flex-col overflow duration-200 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 p-5 z-20'>
                    <div className='text-2xl right-2 cursor-pointer text-[#222]' onClick={() => closeMenu()} >
                        <IoClose />
                    </div>
                    {/* Menu items */}
                    <div className="aciton-area flex-col items-center my-2 text-center">
                        <div className="login-btn rounded-full border my-2 px-4 py-1 border-[#dee8ff] ">
                            <a href="" className='text-[#0057ff] font-bold text-md'>Log In</a>
                        </div>
                        <div></div>
                        <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff] ">
                            <a href="" className='text-white font-bold text-md'>Sign up</a>
                        </div>
                    </div>
                    
                    <div className="tools-item flex items-center border rounded-full px-2 py-2 mx-1 justify-between ">
                            <div className="t-icon">
                                            <MdOutlineSort />
                            </div>
                            <div className="tname px-2 ">
                                <select id="" className='text-md font-bold cursor-pointer'> 
                                            <option selected>Recommended</option>
                                            {
                                                dropdownData.map((result) => (
                                                    <option value={result}>{result}</option>
                                                    ))
                                                }
                                </select>
                            </div>
                            
                    </div>
                    
                    <hr className='my-2'></hr>
                    <div>
                       
                    {tagName.map((tools, index) => (
                            <React.Fragment key={index}>
                                <div className="tools-item flex items-center px-2 py-2 mx-1 my-2 justify-between">
                                    <div className="t-icon">
                                        {tools.tagsIcon}
                                    </div>
                                    <div className="tname px-2">
                                        < p className='text-sm '>{tools.tags}</p>
                                    </div>
                                <div className="dt-arrow">
                            <MdArrowDropDown />
                    </div>
                    </div>
                            {index !== tagName.length - 1 && <hr />} {/* Add line break if not the last item */}
                        </React.Fragment>
                    ))}
                </div>
                <hr></hr>


                    
                    <div className='my-2'>
                        <div></div>
                        <ul className=''>
                            <li className='m-2 font-medium text-md'><a href="" rel="noopener noreferrer">For you</a></li>
                            <li className='m-2 font-medium text-md'><a href="" rel="noopener noreferrer">Discover</a></li>
                            <li className='m-2 font-medium text-md'><a href="" rel="noopener noreferrer">Hire</a></li>
                            <li className='m-2 font-medium text-md'><a href="" rel="noopener noreferrer">Assest</a></li>
                            <li className='m-2 font-medium text-md'><a href="" rel="noopener noreferrer">Jobs</a></li>
                        </ul>
                    </div>
                </div>

                
                

                {/* Desktop header */}
                <div className='border-b w-full top-0 bg-white z-10'>
                    <div className="container-fluid">
                        <div className="top-header py-4 lgpy-2 px-5 border-b border ">
                            <div className="navbar flex items-center justify-between">
                                <div className="brand-logo flex items-center">
                                    <div className="phone-menu pr-2 text-2xl cursor-pointer block lg:hidden" onClick={() => openMenu()}>
                                        <CgMenuLeft />
                                    </div>
                                    <img src={behance_logo} alt={behance_logo} className="w-auto h-4" />

                                    {/* Page links */}
                                    <div className="page-links  lg:ml-8 hidden lg:block">
                                        <ul className='flex items-center'>
                                            <li className='mx-2 font-medium text-md active'><a href="" rel="noopener noreferrer">For you</a></li>
                                            <li className='mx-2 font-medium text-md active'><a href="" rel="noopener noreferrer">Discover</a></li>
                                            <li className='mx-2 font-medium text-md active'><a href="" rel="noopener noreferrer">Hire</a></li>
                                            <li className='mx-2 font-medium text-md active'><a href="" rel="noopener noreferrer">Assest</a></li>
                                            <li className='mx-2 font-medium text-md active'><a href="" rel="noopener noreferrer">Jobs</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="hidden lg:block">
                                    <div className="aciton-area flex items-center">
                                        <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff] ">
                                            <a href="" className='text-[#0057ff] font-medium text-md'>Login</a>
                                        </div>
                                        <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                                            <a href="" className='text-white font-medium text-md'>Sign Up</a>
                                        </div>
                                        <span className='text-gray-200'>|</span>
                                        <div className="adobe-btn mx-4 flex items-center hover:opacity-70">

                                            <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
                                            <a href="" className='pl-1 font-bold text-black text-sm'> Adobe</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Behance tools */}
                        <div className="hidden lg:block">
                            <div className="behance-toools flex items-center justify-evenly p-5 pb-2">
                                <div className='flex items-center'>
                                    {tagName.map((tools) => (
                                        <div className="tools-item flex items-center border rounded-md px-2 py-2 mx-1 justify-between">
                                            <div className="t-icon">
                                                {tools.tagsIcon}
                                            </div>
                                            <div className="tname px-2">
                                                <p className='text-sm font-bold'> {tools.tags}</p>
                                            </div>
                                            <div className="dt-arrow">
                                                <MdArrowDropDown />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="tools-item flex items-center border rounded-md px-2 py-2 mx-1 justify-between ">
                                        <div className="t-icon">
                                            <MdOutlineSort />
                                        </div>
                                        <div className="tname px-2 ">
                                        <select id="" className='text-sm font-bold cursor-pointer'> 
                                            <option selected>Recommended</option>
                                            {
                                                dropdownData.map((result) => (
                                                    <option value={result}>{result}</option>
                                                    ))
                                                }
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Search area */}
                        <div className="search-area p-5 pt-2">
                            <div className="search-area relative items-center">
                                <div className="search-box w-full  border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between">
                                    <div className="input-box relative lg:w-full">
                                        <input onInput={search} type="text" name="" placeholder='Search the creative world at work' className='bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]' id="" />
                                        <div className="search-icon text-2xl text-[#777] absolute top-[2px] left-4">
                                            <IoSearchSharp />
                                        </div>
                                    </div>
                                    <div className="tags-search bg-white px-4 py-2 border-l-2 ">
                                        <ul className='flex items-center'>
                                            <li className=' text-black lg:bg-black mx-1 py-1 lg:text-white px-2 rounded-full font-medium text-sm'><a href="">Projects</a></li>
                                            <div className="dt-arrow block lg:hidden">
                                                <MdArrowDropDown />
                                            </div>
                                            {
                                                searchType.map((tags) => (
                                                    <li className='mx-1 font-medium text-sm py-1 px-2 hidden lg:block rounded-full hover:bg-[#eee]'><a href="">{tags.sItems}</a></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className='container absolute z-10'>
                                    {filteredData.length != 0 && <ul style={{background:"white", borderBottomRightRadius:5, borderBottomLeftRadius:5, padding:10}}>
                                        {
                                            filteredData.map((result) => (
                                                <li style={{padding:5, cursor:"pointer"}}>{result}</li>
                                            ))
                                        }
                                    </ul>}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header
