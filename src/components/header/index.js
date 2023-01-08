import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MyContext } from '../../context';
import Loader from '../../shared/loader';
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import ytLogo from "../../images/yt-logo.png"
import ytLogoMobile from "../../images/yt-logo-mobile.png"
const Header = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const { loading, mobileMenu, SetMobileMenu } = useContext(MyContext);
    const SearchQueryHandler = (e) => {
        if ((e.key === "Enter" || e === "searchBtn") && searchQuery.length > 0) {
            navigate(`/searchResult/${searchQuery}`);
        }
    }
    const MobileToggle = () => {
        SetMobileMenu(!mobileMenu);
    }

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 py-2 md:px-5 bg-black dark:bg-black">
            {loading && <Loader />}
            <div className='flex h-5 items-center'>
                {pathname !== "video" && (
                    <div className='flex items-center justify-center md:hidden md:mr-6 cursor-pointer h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]' onClick={MobileToggle}>
                        {mobileMenu ?
                            (
                                <CgClose className='text-white text-xl' />
                            ) :
                            (
                                <SlMenu className='text-white text-xl' />
                            )
                        }
                    </div>
                )}
                <Link to="/" className='flex h-5 items-center'>
                    <img src={ytLogo} className="h-full hidden md:block dark:md:block" alt='Youtube' />
                    <img src={ytLogoMobile} className="h-full md:hidden" alt='Youtube' />
                </Link>
            </div>
            <div className='group flex items-center'>
                <div className='flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0'>
                    <div className='w-10 items-center justify-center hidden group-focus-within:md:flex'>
                        <IoIosSearch className='text-white text-3xl' />
                    </div>
                    <input
                        type="text"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        onKeyUp={SearchQueryHandler}
                        className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center rounded-r-3xl border border-l-0 border-[#303030] bg-white/[0.1]"
                    onClick={() => SearchQueryHandler("searchBtn")}
                >
                    <IoIosSearch className="text-white text-xl" />
                </button>
            </div>
            <div className='flex items-center'>
                <div className='hidden items-center md:flex'>
                    <div className='flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
                        <RiVideoAddLine className='text-white text-xl' />
                    </div>
                    <div className='flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]'>
                        <FiBell className='text-white text-xl' />
                    </div>
                </div>
                <div className='flex items-center  h-8 w-8 overflow-hidden rounded-full md:ml-4 '>
                    <img src='https://xsgames.co/randomusers/assets/avatars/male/7.jpg' alt='userImage' />
                </div>
            </div>
        </div>
    )
}
export default Header
