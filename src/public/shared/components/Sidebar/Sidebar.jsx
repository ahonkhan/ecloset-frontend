import { useContext } from "react"
import { AiFillMedicineBox, AiOutlineAlibaba, AiOutlineChrome, AiOutlineClockCircle, AiOutlineLaptop, AiOutlineMan, AiOutlineMedicineBox, AiOutlineMenu, AiOutlineShopping, AiOutlineTaobao, AiOutlineVideoCamera, AiOutlineWoman, AiTwotoneHourglass } from "react-icons/ai"
import { MdChevronRight, MdElectricBike, MdElectricBolt, MdEmojiFoodBeverage, MdLaptopChromebook, MdMan3, MdOutlineMan4, MdOutlineWoman2, MdPregnantWoman, MdWoman, MdWoman2 } from "react-icons/md"
import { GetSharedContext } from "../../context/Context"
import { Link } from "react-router-dom"
export const DesktopSidebar = () => {
    const context = useContext(GetSharedContext)
    const Categories = [
        { 'name': "Women's & Girls' Fashion ", 'slug': 'girls-fashion', 'icon': <AiOutlineWoman /> },
        { 'name': 'Health & body', 'slug': 'health-and-body', 'icon': <AiOutlineMedicineBox /> },
        { 'name': ' Watches, Bags, Jewellery', 'slug': 'Watches-Bags-Jewellery', 'icon': <AiOutlineShopping /> },
        { 'name': "Men's & Boys' Fashion", 'slug': "Men's-Boys-Fashion", 'icon': <AiOutlineMan /> },
        { 'name': "Mothers & baby", 'slug': "", 'icon': <MdPregnantWoman /> },
        {
            'name': "Electronics Devices", 'slug': "", 'icon': <AiOutlineLaptop />, 'SubCategories': [
                {
                    'name': "Smartphone", 'path': '', 'subSubCategories': [
                        { 'name': 'Oppo Phone', 'slug': '' },
                        { 'name': 'Vivo Phone', 'slug': '' },
                        { 'name': 'Nokia Phone', 'slug': '' },
                        { 'name': 'Xiaomi Phone', 'slug': '' },
                        { 'name': 'Samsung Phone', 'slug': '' },
                        { 'name': 'Realmi Phone', 'slug': '' },
                        { 'name': 'Redmi Phone', 'slug': '' },
                    ]
                },
                {
                    'name': "Laptops", 'path': '', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
            ]
        },
        {
            'name': "TV & Home Appliances", 'slug': "", 'icon': <AiOutlineVideoCamera />,
            'SubCategories': [
                {
                    'name': "Television", 'path': '', 'subSubCategories': [
                        { 'name': 'Vision Tv', 'slug': '' },
                        { 'name': 'Walton Tv', 'slug': '' },
                        { 'name': 'LG Tv', 'slug': '' },
                        { 'name': 'Xiaomi Tv', 'slug': '' },
                        { 'name': 'Samsung Tv', 'slug': '' },

                    ]
                },
                {
                    'name': "Deep Freeze", 'path': '', 'subSubCategories': [
                        { 'name': 'Microsoft Laptop', 'slug': '' },
                        { 'name': 'Dell Laptop', 'slug': '' },
                        { 'name': 'Asus Laptop', 'slug': '' },
                        { 'name': 'Gigabyte Laptop', 'slug': '' },
                        { 'name': 'Mediatech Laptop', 'slug': '' },
                        { 'name': 'Esonics Laptop', 'slug': '' },
                        { 'name': 'Apple Laptop', 'slug': '' },
                    ]
                },
            ]
        },
        { 'name': "Electronic Accessories", 'slug': "", 'icon': <AiOutlineChrome /> },
        { 'name': "Groceries", 'slug': "", 'icon': <MdEmojiFoodBeverage /> },
        { 'name': "Home & Lifestyle", 'slug': "", 'icon': <AiTwotoneHourglass /> },
        { 'name': "Sports & Outdoors", 'slug': "", 'icon': <AiOutlineTaobao /> },
        { 'name': "Automotive & Motorbike", 'slug': "", 'icon': <MdElectricBike /> },
    ]

    return (
        <>
            <aside onMouseOver={() => context.SetDesktopSidebarStatus(true)} onMouseLeave={() => context.SetDesktopSidebarStatus(false)} className={`overflow-hidden fixed ${context.desktopSidebarStatus ? 'w-[260px]' : 'w-[60px]'} flex py-4 duration-500  flex-col left-0 z-[100] border-r border-LightGray top-0 h-full bg-white `}>

                <button className="flex ml-[10px] gap-2 mr-[10px] bg-GreenLight rounded-3xl items-center">

                    <button className="bg-GreenLight shrink-0 text-white w-10 h-10 rounded-full text-xl flex items-center justify-center">
                        <AiOutlineMenu />
                    </button>
                    <p className={`${context.desktopSidebarStatus ? '' : 'opacity-0'} duration-300 whitespace-nowrap text-white font-WorkSans`}>
                        All Categories
                    </p>
                </button>
                <menu className="mt-[20px]">

                    {
                        Categories.map(category =>
                            <div className="flex w-[236px] ml-[12px] group gap-2 mr-[12px] h-9 overflow-hidden rounded-3xl items-center">
                                <button className="shrink-0  text-DarkGray w-9 h-9 rounded-full text-xl flex items-center justify-center">
                                    {category.icon}
                                </button>
                                <Link to={''} className={`${context.desktopSidebarStatus ? '' : 'opacity-0'} whitespace-nowrap duration-300 font-medium group-hover:text-GreenLight text-DarkGray font-WorkSans flex  justify-between items-center w-full `}>
                                    <span className="text-sm">{category.name}</span>
                                    <span> <MdChevronRight className="mt-1" /> </span>
                                </Link>
                                <div className="fixed pointer-events-none opacity-0 duration-300 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto flex flex-col gap-2 px-4 py-6 w-[260px] rounded-r-2xl border-r border-gray-100 top-0 z-[200] left-[255px] border-l h-screen bg-white">
                                    {
                                        category?.SubCategories?.map(subCategory =>
                                            <div className="">
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
                        )
                    }
                </menu>
            </aside>
            <div className={`fixed ${context.desktopSidebarStatus ? 'opacity-100' : 'pointer-events-none opacity-0'} duration-300 h-screen w-screen bg-black z-[50] bg-opacity-50 top-0 left-0`}>

            </div>
        </>
    )
}