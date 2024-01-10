import imgHero from '../assets/home-page-1.jpg';
import imgHero2 from '../assets/home-page-2.jpg';
import HeroSlider, { Slider } from 'hero-slider';

export const Hero = () => {

    const image = [imgHero, imgHero2];

    return (
        <div className='flex flex-col md:flex-row items-center justify-center font-display pb-12 pt-8'>
            <div className='md:w-1/2 sm:w-full overflow-hidden'>
                <img src={imgHero} alt=""className="rounded-md w-full"/>
            </div>
            <br />
            <div className='flex flex-col items-center md:pl-12'>
                <div className='md:text-6xl text-4xl'>
                    <span>The </span><span className='text-yellow'>Fab</span><span>Mania Sale!</span>
                </div>
                <div className="md:text-2xl text-1xl">
                    <span>Minimum 40% off* on Top Brands</span>
                </div>
            </div>
        </div>
    )
}