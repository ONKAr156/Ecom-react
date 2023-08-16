import React from 'react'
import logo from '../images/logo/logo.svg'
import pay1 from "../ecom-images/footers/footer-04/payment.svg"
const Footer = () => {
    // const [ data , setData]= usestate()

    return <>
        <hr />
        <div className="grid grid-cols-12 mx-10 my-5  ">
            <div className="col-span-12  md:col-span-6  lg:col-span-4  ">
                <div className='flex flex-col gap-3'>
                    <p><img className='w-[6rem]' src={logo} alt="" /></p>
                    <div>
                        <i className='bi bi-house '></i>
                        <span className='mx-5 font-mono'>Shop 009A, Level 4, Block A, Demo Park, Ottawa</span>
                    </div>
                    <div>
                        <i className='bi bi-phone'></i>
                        <span className='mx-5 font-mono'>+1-613-555-0182</span>
                    </div>
                    <div>
                        <i className='bi bi-envelope'></i>
                        <span className='mx-5 font-mono'>john@gmail.com</span>
                    </div>
                </div>

            </div>
            <div className=' col-span-12  lg:col-span-4'>
                <div className='flex flex-col gap-3 '>
                    <h2 className='font-semibold text-2xl '>My Account</h2>
                    <p className='text-base font-mono'>My Order History</p>
                    <p className='text-base font-mono'>Order Tracking</p>
                    <p className='text-base font-mono'>Shopping Cart</p>
                </div>
            </div>
            <div className=' col-span-12  lg:col-span-4'>
                <div className='flex justify-center items-center     gap-3'>
                    <p><img src={pay1} alt="" /></p>

                </div>
            </div>


        </div>
        <hr />
        <div className="grid grid-cols-12 py-5 bg-slate-700 text-slate-100 ">
            <div className='  col-span-12   lg:col-span-12 '>
                <p className='flex justify-center items-center   '>
                    © 2024 PlanetGrids. All Rights Reserved.
                </p>

            </div>
        </div>


    </>
}

export default Footer