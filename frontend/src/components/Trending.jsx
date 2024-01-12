import { data } from '../mock/mockData'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { CategoryWiseProductPage } from './CategoryWiseProductPage';

export const Trending = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleClick = (type) => {
      navigate(`/products/${encodeURIComponent(type)}`);
  }

    return (
        <div>
            <span className='flex items-center justify-center font-heading text-2xl md:text-3xl mb-12 font-bold'><h1 className='bg-red px-4 py-2 text-white rounded-lg decoration-{red}'>TRENDING SECTION</h1></span>     
            <div className='relative flex flex-row rounded-md md:items-center md:justify-center font-display text-xl'>
                <div id='slider' className='overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-none flex flex-row items-center justify-center'>
                    {data.map((item) => (
                        <div key={item.type} className='flex flex-col items-center'>
                                <img className="w-[250px] md:w-[280px] inline-block p-4 cursor-pointer rounded-lg mx-8" src={item.img} alt='/' onClick={() => handleClick(item.type)}/>
                           <p>{item.description}</p>
                        </div>
                    ))};
                </div>
            </div>
        </div>
    )
}