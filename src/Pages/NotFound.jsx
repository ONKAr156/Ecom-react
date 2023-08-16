import React from 'react'
import error1 from "../images/error/2.jpg"
import "../Pages/notfound.css"
const NotFound = () => {
    return <>
        <p className='text-center'>
        <img className='h-auto ' src={error1} alt="" />
            {/* <span className='err_img'></span> */}
        </p>
    </>
}

export default NotFound