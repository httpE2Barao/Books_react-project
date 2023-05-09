import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './carrousel.css';
  
const Carrousel = () => {
    return (
      <>
      <h2 className='carrousel__titulo'>Destaques</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={2.5}
        >
        <SwiperSlide className="swiper-slide"><img src="./imagens/livro-Liderança.svg" alt="Livro sobre liderança em Design"/></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src="./imagens/livro-UX.svg" alt="Livro sobre 'User Experiênce' estratégico" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src="./imagens/livro-Guia Front-end.svg" alt="Livro guia de Front end" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src="./imagens/livro-Acessibilidade.svg" alt="Livro sobre acessibilidade na web" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src="./imagens/livro-ApacheKafka.svg" alt="Livro sobre apache kafka e spring boot" /></SwiperSlide>
        <SwiperSlide className="swiper-slide"><img src="./imagens/livro-Portugol.svg" alt="Livro sobre portugol" /></SwiperSlide>
      </Swiper>
      </>
    );
};
export default Carrousel