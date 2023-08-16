import React from 'react'
import "../Pages/home.css"
import Img1 from "../ecom-images/headers/header-04/image-01.jpg"
import Img2 from "../ecom-images/headers/header-04/image-02.jpg"
import Img3 from "../ecom-images/headers/header-04/image-03.jpg"
import carImg1 from "../ecom-images/products/product-carousel-02/image-01.jpg"
import carImg2 from "../ecom-images/products/product-carousel-02/image-02.jpg"
import carImg3 from "../ecom-images/products/product-carousel-02/image-03.jpg"
import carImg4 from "../ecom-images/products/product-carousel-02/image-04.jpg"
import clock from "../ecom-images/products/recent-products-03/product-01.jpg"
import sunglasses from "../ecom-images/products/recent-products-03/product-02.jpg"
import category1 from "../ecom-images/categories/category-01/image-01.jpg"
import category2 from "../ecom-images/categories/category-01/image-02.jpg"
import category3 from "../ecom-images/categories/category-01/image-03.jpg"
import category4 from "../ecom-images/categories/category-01/image-04.jpg"
import blogs1 from "../images/blogs/blog-01/image-01.jpg"
import blogs2 from "../images/blogs/blog-01/image-02.jpg"
import blogs3 from "../images/blogs/blog-01/image-03.jpg"
const Home = () => {
    const carousel = [
        { img: carImg1, details: "Stylish Women Bag", price: "£75.00", news: "Hot", bg: "bg-red-600" },
        { img: carImg2, details: "Stylish Watch For Man", price: "£75.00", previous: "£75.00", news: "-50%", bg: "bg-blue-600" },
        { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
        { img: carImg4, details: "Luxury Wallet For Male", price: "£95.00", news: "New", bg: "bg-slate-600" }
    ]
    const category = [
        { img: category1, details: "Accessories", product: "8 Products Available" },
        { img: category2, details: "Bags", product: "4 Products Available" },
        { img: category3, details: "Electronics", product: "12 Products Available" },
        { img: category4, details: "Shoes", product: "24 Products Available" },
    ]
    const blogs = [
        { img: blogs1, details: "Meet AutoManage, the best AI management tools", date: "Dec 22, 2023" },
        { img: blogs2, details: "How to earn more money as a wellness coach", date: "Mar 15, 2023" },
        { img: blogs3, details: "The no-fuss guide to upselling and cross selling", date: "Jan 10, 2023" }
    ]

    const icons = [
        { icon: "bi bi-truck", title: "Free delivery" },
        { icon: "bi bi-wallet2", title: "Online Payment" },
        { icon: "bi bi-arrow-repeat", title: "Easy Return" }
    ]
    return <>
        <div className='px-10 border border-solid border-red-500'>
            <div className='md:grid md:grid-cols-12 gap-6  mt-8 '>
                <div  className='xm1 col-span-12 py-3 lg:col-span-8 h-[33rem]  bg-yellow-300   overflow-hidden relative '>
                    <div className=' absolute mt-24 mx-6 md:mx-8 lg:mx-14'>
                        <p className='  md:w-[40%] lg:w-[60%] text-4xl font-bold'>Mega Sale Up To 50% <br /> Off For All</p>
                        <p className='text-lg text-gray-500 my-8 md:w-[80%] lg:w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare vestibulum mollis. Nam vitae augue purus. Integer ac accumsan nunc.</p>
                        <button className='button-name font-mono '>Shop Now</button>
                    </div>
                </div>
                <div className='col-span-12 w-full block md:flex lg:block gap-8 lg:col-span-4 '>
                    <div className=' xm2 h-[15rem]  relative w-[100%] my-4'>
                        <div className='absolute right-0 bottom-26 lg:bottom-6 me-5 text-end'>
                            <p className=' text-xl lg:text-3xl font-bold'> Summer Travel </p>
                            <p className=' text-xl lg:text-3xl font-bold'>Collection</p>
                            <p className='text-xl pt-3'> Discover Now</p>
                        </div>
                    </div>

                    <div className='xm3 h-[15rem] relative w-[100%] my-4'>
                        {/* <img className='h-[15rem] w-full absolute' src={Img3} alt="" /> */}
                        <div className='absolute right-0 bottom-8 lg:bottom-6 me-5 text-end'>
                            <p className=' text-xl lg:text-3xl font-bold'> Get 30% Off </p>
                            <p className=' text-xl lg:text-3xl font-bold'> On iPhone</p>
                            <p className='text-xl pt-3'>Shop Now</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='text-center my-10 flex gap-6 flex-col '>
                <h2 className='text-4xl  font-bold '>You may also like</h2>
                <p className='text-slate-500 text-sm'>There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form.</p>
            </div>

            <div className='md:grid md:grid-cols-12 lg:gap-10 mx-10 my-5  '>
                {
                    carousel.map(item => <div className=' col-span-12  sm:col-span-6 lg:col-span-3 my-10 relative'>
                        <div className='  text-center flex justify-between gap-4 flex-col border border-solid '>
                            <p>
                                <img className=' h-auto object-cover max-w-full' src={item.img} alt="" />
                            </p>
                            <p>{item.details}</p>
                            <p>
                                <i className="  text-yellow-400 bi bi-star-fill"></i>
                                <i className="  text-yellow-400 bi bi-star-fill"></i>
                                <i className="  text-yellow-400 bi bi-star-fill"></i>
                                <i className="  text-yellow-400 bi bi-star-fill"></i>
                                <i className="  text-yellow-400 bi bi-star-fill"></i>
                            </p>
                            <p>{item.price}</p>
                            <p><button className='bg-blue-700 hover:bg-red-600  text-slate-100 px-5 rounded-md py-2 mb-3'>Add </button></p>
                        </div>
                        <div className={` absolute top-6 left-5 ${item.bg}  text-slate-100 px-3 py-1 rounded-md`}>
                            {item.news}
                        </div>
                    </div>)

                }
            </div>
            <p className=' flex justify-center items-center gap-2 my-8'>
                <button><i className="   bg-slate-400 hover:bg-blue-700 text-slate-100 rounded-full  px-3 py-2  bi bi-arrow-left"></i></button>
                <button><i className="   bg-slate-400 hover:bg-blue-700 text-slate-100 rounded-full  px-3 py-2  bi bi-arrow-right"></i></button>
            </p>

            <div className="md:grid md:grid-cols-12 mx-10">
                <div className=' col-span-12 lg:col-span-6  '>
                    <div className='mt-[40%] flex flex-col gap-10'>
                        <div className='flex gap-3 flex-col'>
                            <p className='font-medium text-2xl text-blue-600'>Start From $50</p>
                            <p className='font-bold text-4xl  '>New Arrival From Creative <br /> Clock Collections</p>
                        </div>
                        <p className='w-[30rem] text-slate-500 text-base font-medium max-w-full overflow-hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,</p>
                        <p className=''><button className='bg-blue-700 hover:bg-red-600  text-slate-100 px-5 py-2 rounded-md mb-4'>View All Items</button></p>
                    </div>
                </div>

                <div className='col-span-12 lg:col-span-6         '>
                    <img className='w-full p-16 ' src={clock} alt="" />
                </div>
            </div>

            <div className="grid grid-cols-12 mx-10 mt-4">
                <div className=" col-span-12 lg:col-span-6">
                    <img className='w-full p-16 ' src={sunglasses} alt="" />
                </div>

                <div className=" col-span-12 lg:col-span-6 gap-6 ">
                    <div className='mt-[10%] md:mt-[20%] lg:mt-[30%] mx-6 flex flex-col gap-10'>
                        <div className='flex flex-col gap-3 '>
                            <p className='font-medium text-2xl text-blue-700'>Start From $49</p>
                            <p className='font-medium text-4xl'>New Summer Collections <br /> For Man's Fashion.</p>
                        </div>
                        <p className='w-[30rem] max-w-full overflow-hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet molestie nunc. Vestibulum tempus justo et venenatis tempus. Nulla tincidunt,</p>
                        <p><button className='px-5 py-2 bg-blue-700 mb-5 rounded-md text-stone-100 hover:bg-red-600 '>View All Items</button></p>
                    </div>
                </div>
            </div>

            <div className='text-center my-10 flex gap-6 flex-col'>
                <h2 className='text-4xl  font-bold '>Shop By Category</h2>
                <p className='text-slate-500 text-sm'>There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form.</p>
            </div>
            <br />
            <div className='md:grid md:grid-cols-12 gap-10 mx-10  '>
                {
                    category.map(item => <div className=' col-span-12  md:col-sm-6 lg:col-span-3 my-10 relative'>
                        <div className='  text-center flex justify-between  flex-col  '>
                            <p>
                                <img className='w-full' src={item.img} alt="" />
                            </p>
                            <p className='font-semibold text-2xl'>{item.details}</p>

                            <p className='text-slate-600 font-medium  text-base'>{item.product}</p>
                        </div>

                    </div>)

                }
            </div>
            <div className='flex justify-center'><button className='bg-blue-700 text-slate-100 px-5 py-2 rounded-md my-3 hover:bg-red-600 '>Explore all category</button></div>
            <br /><br />
            <div className='text-center my-10 flex gap-6 flex-col'>
                <p className='font-semibold'>Our Blogs</p>
                <h2 className='text-4xl  font-bold '>Our Recent News</h2>
                <p className='text-slate-500 text-sm'>There are many variations of passages of Lorem Ipsum available <br /> but the majority have suffered alteration in some form.</p>
            </div>

            <div className='md:grid md:grid-cols-12 gap-10 mx-10 '>
                {
                    blogs.map(item => <div className=' col-span-12  md:col-sm-6 lg:col-span-4 my-10 gap-2 relative'>
                        <div className='  text-center flex justify-between gap-2 flex-col  '>
                            <p>
                                <img className='hover:scale-110 max-w-[100%]' src={item.img} alt="" />
                            </p>
                            <p className='font-semibold text-2xl w-[80%] text-slate-600'>{item.details}</p>

                            <p className='text-slate-600 font-medium  text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque hic repudiandae eaque fuga odit sunt.</p>

                        </div>

                    </div>)

                }
            </div>
            <br /> <br />

            <div className='md:grid md:grid-cols-12  mx-10 gap-10 my-10'>
                {
                    icons.map(item => <div className='col-span-12 md:col-md-6 lg:col-span-4 my-10'>
                        <div className='flex flex-col gap-6 justify-center items-center  '>
                            <p className=''><i className={`${item.icon} rounded-full text-3xl text-blue-700  bg-slate-100 px-6 py-5`}></i></p>
                            <p className=' text-base lg:text-2xl font-medium'>{item.title}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default Home
