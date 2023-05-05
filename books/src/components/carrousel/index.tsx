import Swiper, { Navigation, Pagination } from 'swiper';
import './carrousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
  
const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 10,
    slidesPerView: 2,
});

const Carrousel = () => {
    
    return (
        <section className='carrousel'>
            <h2 className='carrousel__titulo'>Novos Lançamentos</h2>
            <div className="swiper">
                
                <div className="swiper-wrapper">

                    <div className="swiper-slide"><img src="./imagens/livro-Liderança.svg" alt="Livro sobre liderança em Design" /></div>
                    <div className="swiper-slide"><img src="./imagens/livro-ApacheKafka.svg" alt="Livro sobre apache kafka e spring boot" /></div>
                    <div className="swiper-slide"><img src="./imagens/livro-UX.svg" alt="Livro sobre 'User Experiênce' estratégico" /></div>
                    <div className="swiper-slide"><img src="./imagens/livro-Guia Front-end.svg" alt="Livro guia de Front end" /></div>
                    <div className="swiper-slide"><img src="./imagens/livro-Portugol.svg" alt="Livro sobre portugol" /></div>
                    <div className="swiper-slide"><img src="./imagens/livro-Acessibilidade.svg" alt="Livro sobre acessibilidade na web" /></div>
        
                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

            </div>
        </section>
    )
}

export default Carrousel