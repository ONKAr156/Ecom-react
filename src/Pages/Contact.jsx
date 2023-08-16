import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return <>
    <div className='mx-10'>
      <div className="grid grid-cols-12 my-10">
        <div className='col-span-12 lg:grid-cols-12 '>
          <div className='h-[4rem] border border-solid flex items-center p-4  rounded-lg  shadow-lg  '>
            <p className=''>
              <span> <Link to={"/"} href="">Home</Link> <i class="bi bi-chevron-right"></i></span>
              <span className='text-blue-700 text-base font-medium'> <Link to={"/"} href="">Support</Link> </span>
            </p>
          </div>
        </div>
      </div>


      <div className='text-center my-20'>
        <h2 className='font-bold text-5xl text-fuchsia-950'>Need Help? Open a Ticket</h2>
        <p className='font-medium my-3 text-xl text-slate-400'> Submit Your Support Ticket, We will be with you as soon as we are able.</p>
      </div>

      <div className='  flex justify-center items-center my-20  '>
        <div className='h-[36rem] w-[40rem] flex flex-col justify-start items-center gap-4 border border-solid px-10 '>

          <div className='flex justify-center gap-8 mx-auto my-4 '>
            <div className='flex flex-col  gap-4'>
              <label className='text-xl' htmlFor="fname">First Name</label>
              <input className='px-5 py-4 border border-solid' type="text" id='fname' placeholder='Enter your first Name' required />
            </div>
            <div className='flex flex-col gap-4'>
              <label className='text-xl' htmlFor="lname">Last Name</label>
              <input className='px-5 py-4 border border-solid' type="text" id='lname' placeholder='Enter your last Name' required />
            </div>
          </div>

          <div className='flex justify-center gap-8 mx-auto my-4'>
            <div className='flex flex-col gap-4'>
              <label className='text-xl' htmlFor="email">Business Email</label>
              <input className='px-5 py-4 border border-solid' type="email" id='email' placeholder='Enter your email' required />
            </div>
            <div className='flex flex-col gap-4'>
              <label className='text-xl' htmlFor="phone">Phone number</label>
              <input className='px-5 py-4 border border-solid' type="tel" id='phone' placeholder='Enter your phone number' required />
            </div>
          </div>


          <div className='flex  justify-center flex-col  gap-3  '>
            <label className='text-xl' htmlFor="desc">What are you looking for?</label>
            <textarea className='border border-solid'  id="desc" cols="60" rows="5" placeholder='Enter your message here'></textarea>
          </div>

          <button className='bg-blue-800 hover:bg-red-600  text-slate-100 px-14 py-4 '>Submit</button>


        </div>

      </div>

    </div>

  </>
}

export default Contact