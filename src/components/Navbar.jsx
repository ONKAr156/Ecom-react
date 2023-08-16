import React, { useState } from 'react'
import logo from '../images/logo/logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [data, setData] = useState(false)

    const lang = ['English', 'Hindi', 'Marathi']
    const curr = ['Rupee', 'Dollar', 'Pound']

    const select1 = <select class="form-select">   {lang.map(item => <option key={item}>{item} </option>)} </select>
    const select2 = <select class="form-select">   {curr.map(item => <option key={item}>{item} </option>)} </select>
    return <>

        {/* nav1 */}
        <div className='flex border-b justify-between items-center mx-2 py-4 px-14'>
            <div className='hidden md:block lg:block'>
                <div className='flex  items-center gap-4 text-slate-500 text-sm font-semibold '>
                    <span>About us</span>
                    <span>Order tracking</span>
                    <span>Contact us</span>
                    <span>FAQ's</span>
                </div>
            </div>

            <div className='hidden md:block lg:block '>
                <span>{select1}</span>
                <span>{select2}</span>

            </div>
        </div>
        {/* nav2 */}
        <div className='flex gap-8 border-b justify-between items-center mx-2 py-4 px-14'>
            <div className=' flex gap-12'>
                <div className=' max-sm:block'>
                    <img className='' src={logo} alt="" />
                </div>
                <div className=' hidden md:hidden lg:block'>
                    <div className='flex gap-4 items-center'>
                        <Link to={"/"} className='text-base font-medium'>Home</Link>
                        <Link to={"/shop"} className='text-base font-medium'>Shop</Link>
                        <Link to={"/products"} className='text-base font-medium'>Products</Link>
                        <Link to={"/accessories"} className='text-base font-medium'>Accessories</Link>
                        <Link to={"/contact"} className='text-base font-medium'>Contact</Link>
                    </div>

                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='hidden md:hidden lg:hidden xl:block'>
                    <div className='flex justify-between  items-center gap-2'>
                        <p><i className=" rounded-full px-3 py-2 bg-slate-200 bi bi-telephone-inbound-fill"></i></p>
                        <div className='flex items-start flex-col'>
                            <p>Need Help? </p>
                            <p>+001 123 456 789</p>
                        </div>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <p className='hidden sm:block  md:block lg:block'>
                        <span> <i className='px-3 py-2 bg-slate-200 rounded-full bi bi-person'></i> </span>
                        <span> <i className='px-3 py-2 bg-slate-200 rounded-full bi bi-heart'></i> </span>
                        <span> <i className='px-3 py-2 bg-slate-200 rounded-full bi bi-cart'></i> </span>
                    </p>
                    <div className='sm:block md:block lg:hidden'>
                        <span onClick={e => setData(!data)}> <i className=' px-3 py-2 bg-slate-200 rounded-full bi bi-list'></i> </span>

                    </div>
                    <div>
                        {
                            data ? <ShowNav /> : false
                        }
                    </div>
                </div>
            </div>

        </div>





    </>
}

const ShowNav = () => {
console.log("hello")
    return <>
        <div className=' hidden md:hidden lg:block'>
            <div className='flex gap-4 items-center'>
                <Link to={"/"} className='text-base font-medium'>Home</Link>
                <Link to={"/shop"} className='text-base font-medium'>Shop</Link>
                <Link to={"/products"} className='text-base font-medium'>Products</Link>
                <Link to={"/accessories"} className='text-base font-medium'>Accessories</Link>
                <Link to={"/contact"} className='text-base font-medium'>Contact</Link>
            </div>

        </div>

    </>
}

export default Navbar