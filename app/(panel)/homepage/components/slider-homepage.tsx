'use client'
import {FC, useState} from "react";
import {ArrowLeftIcon} from "@/libs/design-system/icons/arrowLeftIcon";

interface SliderProps {
  slides: string[];
}

const SliderHomepage: FC<SliderProps> = ({slides}) => {

  let [current, setCurrent] = useState(0);
  const previousSlide = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  }

  // let nextSlide = () => {
  //   if (current === slides.length - 1) setCurrent(0);
  //   else setCurrent(current + 1);
  // }
  const nextSlide = () => {
    const isLastSlide = current === slides.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  }

  const goToSlide = (slideIndex: number) => {
    setCurrent(slideIndex)
  }

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    zIndex: "7",
    backgroundImage: `url(${slides[current]})`
  }

  return (
    <div className='h-full relative'>
      <div className='absolute top-0 h-full w-full justify-between items-center flex px-8 opacity-75'>
        <button onClick={previousSlide} className='size-[52px] bg-white rounded-full'>
          <ArrowLeftIcon className='mx-auto'/>
        </button>
        <button onClick={nextSlide} className='size-[52px] bg-white rounded-full rotate-180'>
          <ArrowLeftIcon className='mx-auto'/>
        </button>
      </div>
      <div className='absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2'>
        {slides.map((slide, index) => (
          <div key={index} onClick={() => goToSlide(index)}
               className={`size-3 rounded-full opacity-75 cursor-pointer ${index == current ? "bg-neutral-400 w-8 h-3 duration-700" : "bg-neutral-200"}`}></div>
        ))}
      </div>
      {/*<ArrowLeftIcon onClick={previousSlide}*/}
      {/*               className='absolute top-1/2 translate-x-1/2 left-8 cursor-pointer'/>*/}
      {/*<ArrowLeftIcon onClick={nextSlide}*/}
      {/*               className='absolute top-1/2 translate-x-1/2 right-8 cursor-pointer rotate-180'/>*/}
      <div style={slideStyles} className='duration-1000 ease-out'></div>
    </div>
    // <div className='overflow-hidden relative h-[536px]'>
    //   <div
    //     className='flex transition ease-out duration-300 w-full object-fill'
    //     style={{
    //       transform: `translateX(-${current * 100}%)`,
    //     }}
    //   >
    //     {slides.map((slide) => <img src={slide}/>)}
    //   </div>
    //   <div className='absolute top-0 h-full w-full justify-between items-center flex px-8'>
    //     <button onClick={previousSlide} className='size-[52px] bg-white rounded-full'>
    //       <ArrowLeftIcon className='mx-auto'/>
    //     </button>
    //     <button onClick={nextSlide} className='size-[52px] bg-white rounded-full rotate-180'>
    //       <ArrowLeftIcon className='mx-auto'/>
    //     </button>
    //   </div>
    // </div>
  )
}
export default SliderHomepage;