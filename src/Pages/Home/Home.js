import './Home.css';
import aboutImg1 from "../../images/Carousel-1-7-2024-ru-en.jpg"
import aboutImg2 from "../../images/Carousel-2-7-2024-ru-en.jpg"
import aboutImg3 from "../../images/Carousel-3-7-2024-ru-en.jpg"
import aboutImg4 from "../../images/Carousel-4-7-2024-ru-en.jpg"
import aboutImg5 from "../../images/Carousel-5-7-2024-ru-en.jpg"
import aboutImg6 from "../../images/Carousel-6-7-2024-ru-en.jpg"
import middleImg from "../../images/Middle-1-8-2024.jpg"
import middleImg1 from "../../images/Middle-2-8-2024.jpg"
import vomoImg from "../../images/vomo.jpg"
import bonusImg1 from "../../images/ideo1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
function Home() 
 
 {
    return (
      <>
      <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      >
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg1} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg2} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg3} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg4} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg5} alt="" /> </Link>
        </SwiperSlide>
        <SwiperSlide><Link className="Home_slide" to ="#"> <img src={aboutImg6} alt="" /> </Link>
        </SwiperSlide>
        
        ...
      </Swiper>
      <div className="container_mid flex"> 
        <div className="card_middle"> <img src={middleImg} alt="" className="mid"/>
        <h2 className="middle">К ПОДВИГАМ ГОТОВ</h2>
        <Link className="middle" to="https://faberlic.com/index.php?option=com_catalog&view=seriesitem&id=1000249210417&Itemid=2075">Серия Lancelot</Link>
        
        </div>
        <div className="card_middle"> <img src={middleImg1} alt="" className="mid"/>
        <h2 className="middle"> ФОРМУЛА ПОБЕДЫ</h2>
        <Link className="middle" to ="https://faberlic.com/index.php?option=com_flippingbook&view=catalog"> Смотреть каталог</Link>
        </div>
        
        </div>
      
 <div className="body"></div>
<div className="image_container"><img src={bonusImg1} alt="Image" /></div>
<div className="centered_text">Любой дезодорант-спрей iDeo со скидкой 50% всего за 205 KGS при покупке по каталогу за каждые 525 KGS в заказе!</div>
        

		{/* <div className="container">
			<div className="points flex">
				<div className="point_left">
					<div className="point-head"><h2 className="point_tit">Donna & Uomo Felice</h2>
						<p className="point_p">У счастья есть свой аромат – искристый, задорный, наполненный энергией сицилийских фруктов..</p></div>
					
					
				</div>
				<div className="point_right">
					<div className="img"><img src={vomoImg} alt=""/></div>
				</div>
        </div> */}
	
     
     </>
    );
    
  };
export default Home