import React from 'react'
import Airjordan from '../assets/airjordan 1.png'


function Landingpage({changeBackgroundColor}) {

   function sliderhandle(e){
    var slider = document.getElementById(`slider`)
    slider.append(slider.querySelector(`img:first-child`));
    var sliderhead = document.getElementById(`sliderhead`)
    sliderhead.append(sliderhead.querySelector(`h1:first-child`));
    var slider2h = document.getElementById(`slider2h`)
    slider2h.append(slider2h.querySelector(`h1:first-child`));
    var slidertag = document.getElementById(`slidertag`)
    slidertag.append(slidertag.querySelector(`h1:first-child`));
    changeBackgroundColor()
   }
   function prevHandle(){
    var slider = document.getElementById(`slider`)
    slider.prepend(slider.querySelector(`img:last-child`));
    var sliderhead = document.getElementById(`sliderhead`)
    sliderhead.prepend(sliderhead.querySelector(`h1:last-child`));
    var slider2h = document.getElementById(`slider2h`)
    slider2h.prepend(slider2h.querySelector(`h1:last-child`));
    var slidertag = document.getElementById(`slidertag`)
    slidertag.prepend(slidertag.querySelector(`h1:last-child`));
    changeBackgroundColor()
   }
    return (
       <div className='mt-40 relative ml-52'>
        <div id='sliderhead' className="sliderhead">
        <h1 className='text-[2.5vw] font-semibold'>Nike • <span className='text-slate-900/50'>Classic</span></h1>
        <h1 className='text-[2.5vw] font-semibold'>New • <span className='text-slate-900/50'>Balance</span></h1>
        <h1 className='text-[2.5vw] font-semibold'>Adidas • <span className='text-slate-900/50'>Yeezy</span></h1>
        <h1 className='text-[2.5vw] font-semibold'>Adidas • <span className='text-slate-900/50'>Samba</span></h1>
        </div>
        <div id='slider2h' className="slider2h">
        <h1 className='text-[3.5vw]  font-light'>Air Jordan 1</h1>
        <h1 className='text-[3.5vw]  font-light'>550</h1>
        <h1 className='text-[3.5vw]  font-light'>350 V2</h1>
        <h1 className='text-[3.5vw]  font-light'>Casuals</h1>
        </div>
         <div id='slidertag' className="slidertag">
         <h1 className='text-[1.5vw] my-4 tracking-widest'>A vintage classic</h1>
         <h1 className='text-[1.5vw] my-4 tracking-widest'> Chunky Sneakers</h1>
         <h1 className='text-[1.5vw] my-4 tracking-widest'> Kanye's Design</h1>
         <h1 className='text-[1.5vw] my-4 tracking-widest'> Perfect Casuals</h1>
         </div>
         <button className='bg-zinc-100 my-4 rounded-md text-[1.5vw] p-2 '>See More →</button>
         <div id='slider' className='w-1/2 slider h-3/4 fle overfow-hidden object-contain absolute items-center top-1 bottom-32 right-32'>
           <img className='object-contain' src={Airjordan} alt="" />
           <img className='object-contain w-3/4 ml-20 mt-20' src="./src/assets/new balance.png" alt="" />
           <img className='object-contain' src="./src/assets/yeezy.png" alt="" />
           <img className='object-contain w-3/4 mt-20 ml-20' src="./src/assets/adidas samba.png" alt="" />
         </div>
         <div className='flex justify-cener mt-20 gap-20 items-cnter'>
         <button onClick={prevHandle}  className='prev text-[3vw] rounded-lg border-zinc-900 border-2 px-6'>‹</button>
         <button onClick={sliderhandle} className='next text-[3vw] rounded-lg border-zinc-900 border-2 px-6'>›</button>
         </div>

       </div> 
    )
}

export default Landingpage
