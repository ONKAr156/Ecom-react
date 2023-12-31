import React from 'react'
import { Link } from 'react-router-dom'
import carImg1 from "../ecom-images/products/product-carousel-02/image-01.jpg"
import carImg2 from "../ecom-images/products/product-carousel-02/image-02.jpg"
import carImg3 from "../ecom-images/products/product-carousel-02/image-03.jpg"
import carImg4 from "../ecom-images/products/product-carousel-02/image-04.jpg"

const Shop = () => {
  const bestSelling = ["Best Selling", "Newest Products", "Oldest Products"]
  const carousel = [
    { img: carImg1, details: "Stylish Women Bag", price: "£75.00", news: "Hot", bg: "bg-red-600" },
    { img: carImg2, details: "Stylish Watch For Man", price: "£75.00", previous: "£75.00", news: "-50%", bg: "bg-blue-600" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg2, details: "Stylish Watch For Man", price: "£75.00", previous: "£75.00", news: "-50%", bg: "bg-blue-600" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg4, details: "Luxury Wallet For Male", price: "£95.00", news: "New", bg: "bg-slate-600" },
    { img: carImg1, details: "Stylish Women Bag", price: "£75.00", news: "Hot", bg: "bg-red-600" },
    { img: carImg2, details: "Stylish Watch For Man", price: "£75.00", previous: "£75.00", news: "-50%", bg: "bg-blue-600" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg2, details: "Stylish Watch For Man", price: "£75.00", previous: "£75.00", news: "-50%", bg: "bg-blue-600" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg3, details: "Polo T-shirt For Man ", price: "£25.00" },
    { img: carImg4, details: "Luxury Wallet For Male", price: "£95.00", news: "New", bg: "bg-slate-600" }
  ]

  const icons = [
    { icon: "bi bi-truck", title: "Free delivery" },
    { icon: "bi bi-wallet2", title: "Online Payment" },
    { icon: "bi bi-arrow-repeat", title: "Easy Return" }
  ]

  const select1 = <select class="form-select">
    {
      bestSelling.map(item => <option className='mx-2' key={item} >
        {item}
      </option>)
    }
  </select>
  return <>
    <div className='mx-10   '>
      {/* bar1 */}
      <div className="grid grid-cols-12 my-10">
        <div className='col-span-12 lg:grid-cols-12 '>
          <div className='h-[4rem] border border-solid flex items-center p-4  rounded-lg  shadow-lg shadow-cyan-500/50  '>
            <p className=''>
              <span> <Link to={"/"} href="">Home</Link> <i class="bi bi-chevron-right"></i></span>
              <span className='text-blue-700 text-base font-medium'> <Link to={"/"} href="">Filters</Link> </span>
            </p>
          </div>
        </div>
      </div>
      {/* bar2 */}

      <div className="grid grid-cols-12 my-10">
        <div className='col-span-12 lg:grid-cols-12 '>
          <div className='h-[3rem] md:h-[4rem] lg:h-[6rem] border border-solid flex items-center justify-between p-4  rounded-lg  shadow-lg shadow-gray-200  '>
            <p>{select1}</p>
            <p className='flex gap-3 items-center '>
              <i class=" px-2 py-1 md:px-2 lg:px-3 md:py-1 lg:py-2 rounded-md text-base bg-blue-900 text-slate-100   bi bi-columns-gap"></i>
              <i class=" px-2 py-1 md:px-2 lg:px-3 md:py-1 lg:py-2 text-base  bi bi-list-task bg-slate-400 rounded-md text-slate-100"></i>
            </p>
          </div>
        </div>
      </div>

      {/* main grid  */}

      <div className='grid grid-cols-12  gap-4'>
{/* row */}
        <div className='col-span-12 lg:col-span-3'>
          <div className='grid grid-rows-3  gap-5 grid-flow-col mr-auto  h-screen  sticky top-1'>

            <div className='border border-solid w-full mx-auto rounded-md p-3'>
              <div className='mx-6  font-medium text-xl mb-4  '>Product type</div>
              <hr />
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  Bags
                </label>
              </div>
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  Watches
                </label>
              </div>
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  T-shirts
                </label>
              </div>
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  Belts
                </label>
              </div>
            </div>

            <div className='border border-solid w-full rounded-md p-3'>
              <div className='mx-6  font-medium text-xl mb-4 first-letter  '>Colour</div>
              <hr />
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  Blue
                </label>
              </div>
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                Red
                </label>
              </div>
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  Yellow
                </label>
              </div>
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  White
                </label>
              </div>
            </div>

            <div className='border border-solid w-full rounded-md p-3'>
              <div className='mx-6  font-medium text-xl mb-4  '>Size</div>
              <hr />
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  XL
                </label>
              </div>
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  L
                </label>
              </div>
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  M
                </label>
              </div>
              <div class="my-3">
                <input className="  mx-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" type="checkbox" value="" id="id" />
                <label className=" w-full" for="id ">
                  S
                </label>
              </div>
            </div>


          </div>
        </div>

        <div className='col-span-12 lg:col-span-9 '>
{/* products */}
        <div className='grid grid-cols-12'>
        {
            carousel.map(item => <div className=' col-span-12  sm:col-span-6 lg:col-span-4 hover:scale-105 hover:border border-solid border-emerald-950 mx-5  my-10 relative'>
              <div className='  text-center flex justify-between gap-4 flex-col border border-solid '>
                <p className='flex justify-center '>
                  <img className=' h-auto object-contain max-w-full bg-blue-800 mt-3' src={item.img} alt="" />
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
                <p><button className='bg-blue-700 hover:bg-red-600  text-slate-100  px-5 rounded-md py-2 mb-3'>Add </button></p>
              </div>
              <div className={` absolute top-6 left-5 ${item.bg}  text-slate-100 px-3 py-1 rounded-md`}>
                {item.news}
              </div>
            </div>)

          }
        </div>

    

        </div>
      </div>

      {/* icons */}

      <div className='grid grid-cols-12  my-10'>
        {
          icons.map(item => <div className='col-span-12 my-6 md:col-md-6 lg:col-span-4'>
            <div className='text-center  '>
              <p className='my-2'><i className={`${item.icon} rounded-full text-3xl text-blue-700  bg-slate-100 px-6 py-5`}></i></p>
              <p className='mt-14 text-2xl font-medium'>{item.title}</p>
            </div>
          </div>)
        }
      </div>



    </div>

  </>
}

export default Shop