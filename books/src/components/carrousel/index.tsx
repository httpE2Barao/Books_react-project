import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/pagination';
import './carrousel.css';
  
interface props {
  titulo: string
  src1: string, alt1: string
  src2: string, alt2: string
  src3: string, alt3: string  
  src4?: string, alt4?: string
  src5?: string, alt5?: string
  src6?: string, alt6?: string
}

const Carrousel = (props:props) => {
    return (
      <>
      <h2 className='carrousel__titulo'>{props.titulo}</h2>
      
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={2.5}
        pagination={{ clickable: true }}
        className='swiper'
        >
        <SwiperSlide className="swiper-slide"><img src={props.src1} alt={props.alt1}/></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={props.src2} alt={props.alt2}/></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={props.src3} alt={props.alt3}/></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={props.src4} alt={props.alt4}/></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={props.src5} alt={props.alt5}/></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src={props.src6} alt={props.alt6}/></SwiperSlide>
      </Swiper>
      </>
    );
};
export default Carrousel