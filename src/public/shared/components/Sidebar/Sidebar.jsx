import { useContext, useState } from "react"
import { AiFillMedicineBox, AiOutlineAlibaba, AiOutlineChrome, AiOutlineClockCircle, AiOutlineLaptop, AiOutlineMan, AiOutlineMedicineBox, AiOutlineMenu, AiOutlinePlus, AiOutlineShopping, AiOutlineTaobao, AiOutlineVideoCamera, AiOutlineWoman, AiTwotoneHourglass } from "react-icons/ai"
import { MdChevronRight, MdElectricBike, MdElectricBolt, MdEmojiFoodBeverage, MdLaptopChromebook, MdMan3, MdOutlineMan4, MdOutlineWoman2, MdPlusOne, MdPregnantWoman, MdWoman, MdWoman2 } from "react-icons/md"
import { GetSharedContext } from "../../context/Context"
import { Link } from "react-router-dom"
import { AnimatePresence, animate, motion } from "framer-motion"
import { GetGlobalContext } from "../../../../context/GlobalContext"
export const DesktopSidebar = () => {
    const context = useContext(GetSharedContext)
    const globalContext = useContext(GetGlobalContext)

    return (
        <>
            <aside onMouseOver={() => context.SetDesktopSidebarStatus(true)} onMouseLeave={() => context.SetDesktopSidebarStatus(false)} className={`overflow-hidden fixed ${context.desktopSidebarStatus ? 'w-[260px]' : 'w-[60px]'} flex py-4 duration-500  flex-col left-0 ${globalContext.ModalOpenStatus ? '' : 'z-[100]'} border-r border-LightGray top-0 h-full bg-white `}>

                <div className="flex ml-[10px] gap-2 mr-[10px] bg-GreenLight rounded-3xl items-center">

                    <button className="bg-GreenLight shrink-0 text-white w-10 h-10 rounded-full text-xl flex items-center justify-center">
                        <AiOutlineMenu />
                    </button>
                    <p className={`${context.desktopSidebarStatus ? '' : 'opacity-0'} duration-300 whitespace-nowrap text-white font-WorkSans`}>
                        All Categories
                    </p>
                </div>
                <menu className="mt-[20px]">

                    {
                        context?.Categories?.map(category =>
                            <div className="flex w-[236px] ml-[12px] group gap-2 mr-[12px] h-9 overflow-hidden rounded-3xl items-center">
                                <button className="shrink-0  text-DarkGray w-9 h-9 rounded-full text-xl flex items-center justify-center">
                                    {category.icon}
                                </button>
                                <Link to={''} className={`${context.desktopSidebarStatus ? '' : 'opacity-0'} whitespace-nowrap duration-300 font-medium group-hover:text-GreenLight text-DarkGray font-WorkSans flex  justify-between items-center w-full `}>
                                    <span className="text-sm">{category.name}</span>
                                    <span> <MdChevronRight className="mt-1" /> </span>
                                </Link>
                                <div className="fixed py-6 pointer-events-none opacity-0 duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto flex flex-col gap-2 px-4 w-[260px] rounded-r-2xl border-r border-gray-100 top-0 z-[200] left-[255px] border-l h-screen bg-white">
                                    <div className="h-full overflow-y-auto" style={{ 'scrollbarWidth': 'thin' }}>
                                        {
                                            category?.SubCategories?.map(subCategory =>
                                                <div className="border-b border-gray-200 py-3">
                                                    <Link to={''} className="text-base uppercase font-WorkSans font-medium text-gray-800">{subCategory.name}</Link>
                                                    <ul className="whitespace-nowrap tracking-wide mt-1 duration-300 font-medium  text-DarkGray font-WorkSans text-sm">
                                                        {
                                                            subCategory?.subSubCategories?.map(subSubCategory =>
                                                                <li className="hover:text-GreenLight"><Link to={subSubCategory.slug}>{subSubCategory.name}</Link></li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                        }
                                    </div>

                                </div>


                            </div>
                        )
                    }
                </menu>
            </aside>
            <div className={`fixed ${context.desktopSidebarStatus ? 'opacity-100' : 'pointer-events-none opacity-0'} duration-300 h-screen w-screen bg-black z-[50] bg-opacity-50 top-0 left-0`}>

            </div>
        </>
    )
}

export const MobileSidebar = () => {
    const context = useContext(GetSharedContext);
    const [activeMenu, setActiveMenu] = useState(0);
    const toggleMenu = ['Categories', 'Menu'];
    const [activeCategory, setActiveCategory] = useState(0);
    const [activeSubCategory, setActiveSubCategory] = useState(0);
    const resetAll = () => {
        setActiveCategory(0);
        setActiveSubCategory(0);
    }
    const globalContext = useContext(GetGlobalContext)
    return (
        <>
            <aside className={`fixed ${context.mobileSidebarStatus ? 'translate-x-0 opacity-100' : ''} flex flex-col opacity-0 duration-300 border-r -translate-x-full border-gray-200  top-0 h-screen left-0 ${globalContext.ModalOpenStatus ? '' : 'z-[100]'} bg-white w-[240px]  md:w-[350px] `}>
                <div className="sidebar-top shrink-0 grid grid-cols-2">
                    {
                        toggleMenu.map((item, index) =>
                            <button onClick={() => { setActiveMenu(index) }} className={`${index == activeMenu ? 'bg-opacity-100 border-Green ' : 'bg-opacity-75'}  border-b-2  border-transparent bg-GreenLight py-2 duration-300 text-white font-WorkSans`}>{item}</button>
                        )
                    }

                </div>

                <div className="h-full py-4 px-3 overflow-y-auto" style={{ 'scrollbarWidth': 'thin' }}>
                    <AnimatePresence>
                        {
                            activeMenu === 0 && (
                                <motion.div initial={{ x: '-150%' }} animate={{ x: 0 }}>
                                    <ul className="flex flex-col gap-2">
                                        {
                                            context.Categories.map((category, index) =>
                                                <li className="">
                                                    <Link onClick={() => { (activeCategory == index + 1) ? resetAll() : setActiveCategory(index + 1) }} to={''} className={`${(activeCategory === index + 1) ? 'text-GreenLight' : ''}  whitespace-nowrap duration-300 font-medium group-hover:text-GreenLight text-DarkGray font-WorkSans flex  justify-between items-center w-full `}>
                                                        <span className="text-sm">{category.name}</span>
                                                        <span> <MdChevronRight className={`mt-1 rotate-90 duration-200 ${(activeCategory === index + 1) ? '-rotate-90' : ''}`} /> </span>
                                                    </Link>
                                                    <AnimatePresence>
                                                        {
                                                            (category.SubCategories && (activeCategory === index + 1)) && (
                                                                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ duration: 0.3, type: 'tween' }} exit={{ height: 0 }} style={{ 'overflow': 'clip' }}>
                                                                    <ul className="pl-4 rounded flex pt-2 flex-col gap-2">
                                                                        {
                                                                            category?.SubCategories?.map((subCategory, subIndex) =>
                                                                                <li className="">
                                                                                    <Link onClick={() => { activeSubCategory == subIndex + 1 ? setActiveSubCategory(0) : setActiveSubCategory(subIndex + 1) }} to={''} className={`${activeSubCategory === subIndex + 1 ? 'text-GreenLight' : ''} whitespace-nowrap duration-300 font-medium group-hover:text-GreenLight text-DarkGray font-WorkSans flex  justify-between items-center w-full `}>
                                                                                        <span className="text-sm">{subCategory.name}</span>
                                                                                        <span> <MdChevronRight className={`mt-1 rotate-90 duration-200 ${(activeSubCategory === subIndex + 1) ? '-rotate-90' : ''}`} />  </span>
                                                                                    </Link>
                                                                                    <AnimatePresence>
                                                                                        {
                                                                                            (subCategory.subSubCategories && (activeSubCategory == subIndex + 1)) && (
                                                                                                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ duration: 0.3, type: 'tween' }} exit={{ height: 0 }} style={{ 'overflow': 'clip' }}>
                                                                                                    <ul className="pl-4 pt-2 rounded flex flex-col gap-2">
                                                                                                        {
                                                                                                            subCategory.subSubCategories?.map((item, index) =>
                                                                                                                <li className="">
                                                                                                                    <Link to={''} className={`whitespace-nowrap duration-300 font-medium group-hover:text-GreenLight text-DarkGray font-WorkSans flex  justify-between items-center w-full `}>
                                                                                                                        <span className="text-sm">{item.name}</span>
                                                                                                                    </Link>

                                                                                                                </li>
                                                                                                            )
                                                                                                        }

                                                                                                    </ul>
                                                                                                </motion.div>
                                                                                            )
                                                                                        }
                                                                                    </AnimatePresence>

                                                                                </li>)
                                                                        }

                                                                    </ul>
                                                                </motion.div>
                                                            )
                                                        }
                                                    </AnimatePresence>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>

                    <AnimatePresence>
                        {
                            activeMenu === 1 && (
                                <motion.div initial={{ x: '150%' }} animate={{ x: 0 }}>
                                    <ul className="flex flex-col gap-2">
                                        {
                                            context.menu?.map(item =>
                                                <li className="">
                                                    <Link to={item.path} className={`whitespace-nowrap duration-300 font-medium group-hover:text-GreenLight text-DarkGray font-WorkSans flex  justify-between items-center w-full `}>
                                                        <span className="text-sm">{item.name}</span>
                                                    </Link>

                                                </li>)
                                        }
                                    </ul>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>

            </aside >
            <div onClick={() => context.setMobileSidebarStatus(false)} className={`fixed ${context.mobileSidebarStatus ? 'opacity-100' : 'pointer-events-none opacity-0'} duration-300 h-screen w-screen bg-black z-[50] bg-opacity-50 top-0 left-0`}>
            </div>
        </>
    )
}