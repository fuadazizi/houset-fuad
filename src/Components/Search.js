import React from 'react'

import "./assets/style/search.css"

const SearchIcon = () => {
    return (
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-form-icon">
            <rect width="42" height="42" rx="21" fill="#055053" />
            <g clipPath="url(#clip0_4918_16419)">
                <path d="M24.3416 22.909H23.5875L23.3202 22.6513C24.4657 21.315 25.0575 19.4918 24.733 17.554C24.2843 14.9004 22.0698 12.7813 19.397 12.4568C15.3593 11.9604 11.9611 15.3586 12.4575 19.3963C12.782 22.069 14.9011 24.2836 17.5548 24.7322C19.4925 25.0568 21.3157 24.465 22.652 23.3195L22.9098 23.5868V24.3409L26.9666 28.3977C27.358 28.789 27.9975 28.789 28.3889 28.3977C28.7802 28.0063 28.7802 27.3668 28.3889 26.9754L24.3416 22.909ZM18.6143 22.909C16.2375 22.909 14.3189 20.9904 14.3189 18.6136C14.3189 16.2368 16.2375 14.3181 18.6143 14.3181C20.9911 14.3181 22.9098 16.2368 22.9098 18.6136C22.9098 20.9904 20.9911 22.909 18.6143 22.909Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_4918_16419">
                    <path d="M9.5459 21C9.5459 14.6738 14.6743 9.54541 21.0004 9.54541V9.54541C27.3266 9.54541 32.455 14.6738 32.455 21V21C32.455 27.3261 27.3266 32.4545 21.0004 32.4545V32.4545C14.6743 32.4545 9.5459 27.3261 9.5459 21V21Z" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default function Search(props) {
        return (
            <form action="" className="search-form">
                <input type="text" placeholder={props.placeHolder} className="search-form-input" />
                {/* <input type="submit" value="Cari" /> */}
                <SearchIcon />
            </form>
        )
    }
