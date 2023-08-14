import React from 'react'
import logo from '../images/logo/logo.svg'
import pay1 from"../ecom-images/footers/footer-04/payment.svg"
const Footer = () => {
    return <>
        <hr />
        <div className="grid grid-cols-12 mx-10 my-5">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 ">
               <div className='flex flex-col gap-3'>
               <p><img className='w-[6rem]' src={logo} alt="" /></p>
                <div>
                    <i className='bi bi-house'></i>
                    <span className='mx-5'>Shop 009A, Level 4, Block A, Demo Park, Ottawa</span>
                </div>
                <div>
                    <i className='bi bi-phone'></i>
                    <span className='mx-5'>+1-613-555-0182</span>
                </div>
                <div>
                    <i className='bi bi-envelope'></i>
                    <span className='mx-5'>john@gmail.com</span>
                </div>
               </div>

            </div>
            <div className=' col-span-12 lg:col-span-4'>
                <div className='flex flex-col gap-3'>
                    <h2 className='font-semibold text-2xl '>My Account</h2>
                    <p>My Order History</p>
                    <p>Order Tracking</p>
                    <p>Shopping Cart</p>
                </div>
            </div>
            <div className=' col-span-12 lg:col-span-4'>
                <div className='flex justify-center items-center     gap-3'>
                    <p><img src={pay1} alt="" /></p>
                   
                </div>
            </div>
            
           
        </div>
<hr />
<div className='text-center my-4 '>
    <span className='text-sm font-medium  text-green-800'>© 2024 TailGrids. All Rights Reserved.</span>
</div>

    </>
}

export default Footer