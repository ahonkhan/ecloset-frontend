export const ButtonAddToCart = () => {
    return (
        <button className="flex gap-2 text-white items-center px-4 py-3 rounded bg-LightBlue shadow-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.375 10.6875C6.375 12.1275 7.56 13.3125 9 13.3125C10.44 13.3125 11.625 12.1275 11.625 10.6875" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.60758 1.5L3.89258 4.2225" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.3926 1.5L14.1076 4.2225" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M1.5 5.88751C1.5 4.50001 2.2425 4.38751 3.165 4.38751H14.835C15.7575 4.38751 16.5 4.50001 16.5 5.88751C16.5 7.50001 15.7575 7.38751 14.835 7.38751H3.165C2.2425 7.38751 1.5 7.50001 1.5 5.88751Z" stroke="white" stroke-width="1.5" />
                <path d="M2.625 7.5L3.6825 13.98C3.9225 15.435 4.5 16.5 6.645 16.5H11.1675C13.5 16.5 13.845 15.48 14.115 14.07L15.375 7.5" stroke="white" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <span className="font-WorkSans text-sm">Add To Cart</span>
        </button>
    )
}

export const ButtonHeart = () => {
    return (
        <button className="px-3 py-2 rounded border border-gray-200">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.44 3.10001C14.63 3.10001 13.01 3.98001 12 5.33001C10.99 3.98001 9.37 3.10001 7.56 3.10001C4.49 3.10001 2 5.60001 2 8.69001C2 9.88001 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.88001 22 8.69001C22 5.60001 19.51 3.10001 16.44 3.10001Z" fill="#FF2B2B" />
            </svg>
        </button>
    )
}