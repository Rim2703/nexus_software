import React from 'react'

const Button = ({ styles }) => {
    return (
        <a href="#services">
            <button type='button' className={` py-2 w-52 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary  outline-none ${styles}`}>
                Read More
            </button>
        </a>
    )
}

export default Button