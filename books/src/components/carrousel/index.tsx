import Swiper, { Navigation, Pagination } from 'swiper';
import './carrousel.css';

const Carrousel = () => {
    
    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        slidesPerView: 2.3,
    });

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
                
                <div className="swiper-pagination"></div>

            </div>
        </section>
    )
}

export default Carrousel