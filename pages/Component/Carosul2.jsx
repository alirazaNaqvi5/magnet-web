
import Carousel from 'react-elastic-carousel';


const Carosel2 = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 900, itemsToShow: 3 },
      ];
    const styleDots =[

    ]  
    
        
    return ( 
        <div>
           <Carousel enableAutoPlay autoPlaySpeed={2000} loop  breakPoints={breakPoints} 
             className='flex relative p-4 bg-white'>
                
                    <img src='/image/slide-1.png'alt="/" />
                    <img src='/image/slide-2.png'alt="/" />
                    <img src='/image/slide-3.png'alt="/" />
                    <img src='/image/slide-4.png'alt="/" />
                    <img src='/image/slide-5.png'alt="/" />
                    <img src='/image/slide-6.png'alt="/" />
                    <img src='/image/slide-7.png'alt="/" />
                    <img src='/image/slide-8.png' alt="/" />
                    <img src='/image/slide-9.png'alt="/" />
                    <img src='/image/slide-10.png' alt="/" />
              
           </Carousel>
        </div>
     );
}
 
export default Carosel2;