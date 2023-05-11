import './card.css'

interface props {
    titulo: string
    titulo2: string
    texto: string
    src: string
    alt: string
    estrela?: string
    showIcones?: boolean
    css?: string
}

const Card = (props:props) => { 

    return (
        <div className={`card ${props.css}`}>
            {props.showIcones && (
            <>
                <img className='icone-estrela' src={props.estrela} /> <img className='icone-estrela' src={props.estrela} /> <img className='icone-estrela' src={props.estrela} /> <img className='icone-estrela' src={props.estrela} /> <img className='icone-estrela' src={props.estrela} /> 
            </>
        )}
            <h3 className='descricao__titulo'>{props.titulo}</h3>
            <div className='card__descricao'>
                <div className='descricao'>
                    <h2 className='descricao__titulo-livro'>{props.titulo2}</h2>
                    <p className='descricao__texto'>{props.texto}</p>
                </div>
                <img src={props.src} alt={props.alt} />
            </div>
            <div className='card__botoes'>
                <ul className='botoes'>
                    <li className='botoes__item'><img src="./imagens/icone-favoritos.svg" alt="Favoritar livro" /></li>
                    <li className='botoes__item'><img src="./imagens/icone-sacola.svg" alt="Adicionar no carrinho" /></li>
                </ul>
                <a href="#" className='botoes__ancora'>Saiba mais</a>
            </div>
        </div>

    )
}
export default Card