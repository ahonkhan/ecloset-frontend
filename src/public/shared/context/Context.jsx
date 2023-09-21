import { createContext, useState } from "react";
import { AiOutlineChrome, AiOutlineLaptop, AiOutlineMan, AiOutlineMedicineBox, AiOutlineShopping, AiOutlineTaobao, AiOutlineVideoCamera, AiOutlineWoman, AiTwotoneHourglass } from "react-icons/ai";
import { MdElectricBike, MdEmojiFoodBeverage, MdPregnantWoman } from "react-icons/md";

export const GetSharedContext = createContext();
export const SharedContext = ({ children }) => {
    const [desktopSidebarStatus, SetDesktopSidebarStatus] = useState(false);
    const [mobileSidebarStatus, setMobileSidebarStatus] = useState(false);
    const Categories = [
        { 'name': "Women's & Girls' Fashion", 'slug': 'girls-fashion', 'icon': <AiOutlineWoman /> },
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
    const menu = [
        { name: 'Donates', path: '' },
        { name: 'Stores', path: '' },
        { name: 'Events', path: '' },
        { name: 'Contact us', path: '' },

    ]
    const productTags = [
        'Shirts', 'Electronics', 'Desktop', 'Tops', 'T-shirts', 'Fahions'
    ]
    const productSizes = [
        'S', 'M', 'L', 'XL', 'XXL'
    ]

    return (
        <GetSharedContext.Provider value={{ mobileSidebarStatus, productSizes, productTags, setMobileSidebarStatus, desktopSidebarStatus, SetDesktopSidebarStatus, Categories, menu }}>{children}</GetSharedContext.Provider>
    )
}