import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyContext } from '../../context'
import { categories } from '../../utils/constant'
import SidebarItems from './sidebarItems'

const Sidebar = () => {
    const navigate = useNavigate();
    const { selectCategories, SetSelectCategories, mobileMenu } = useContext(MyContext);
    const clickhandler = (name, type) => {
        switch (type) {
            case "category":
                return SetSelectCategories(name);

            case "home":
                return SetSelectCategories(name);
            case "menu":
                return false;
            default:
                break;
        }
    }

    return (
        <div className={`  md:block w-[240px] scrollbar scrollbar-w-2 scrollbar-h-1 scrollbar-thumb-[#303030] scrollbar-track-gray-100 overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${mobileMenu ? "translate-x-[0]" : ""
            }`}>
            <div className='flex px-5 flex-col'>
                {categories.map((item) => (
                    <div key={item.id}>
                        <SidebarItems

                            text={item.type === "home" ? "Home" : item.name}
                            icon={item.icon}
                            action={() => {
                                clickhandler(item.name, item.type); navigate("/")
                            }}
                            className={`${selectCategories === item.name ? "bg-white/[0.15]" : ""}`}
                        />
                        {item.divider && (
                            <hr className='my-5 border-white/[0.2]' />
                        )}
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Sidebar
