import './threads.css'

const Threads = () => {
    return (
        <section className='threads'>
            <h2 className='threads__titulo'>TÓPICOS MAIS VISITADOS</h2>
            <ul className='threads__lista'>
                <li className='threads__item'>
                    <a href="#" className='threads__link'>Android</a>
                </li>
                <li className='threads__item'>
                    <a href="#" className='threads__link'>Marketing Digital</a>
                </li>
                <li className='threads__item'>
                    <a href="#" className='threads__link'>Agile</a>
                </li>
                <li className='threads__item'>
                    <a href="#" className='threads__link'>Startups</a>
                </li>
                <li className='threads__item'>
                    <a href="#" className='threads__link'>HTML e CSS</a>
                </li>
                <li className='threads__item'>
                    <a href="#" className='threads__link'>Python</a>
                </li>
                <li className='threads__item'>
                    <a href="#" className='threads__link'>Java</a>
                </li>
                <li className='threads__item'>
                    <a href="#" className='threads__link'>NodeJS</a>
                </li>
            </ul>
        </section>
    )
}
export default Threads