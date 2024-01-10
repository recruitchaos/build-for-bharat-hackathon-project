import { data } from '../mock/mockData'

export const Trending = () => {
    return (
        <div>
            <div className='relative flex flex-row rounded-md md:items-center md:justify-center'>
                <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-none flex flex-row items-center justify-center'>
                    {data.map((item) => (
                        <img className="w-[250px] md:w-[300px] inline-block p-2 cursor-pointer rounded-lg mx-2" src={item.img} alt='/'/>
                    ))}
                </div>
            </div>
        </div>
    )
}