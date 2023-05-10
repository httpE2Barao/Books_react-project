import './contact.css'

const Contact = () => {
    return (
        <section className='contato'>
            <h2 className='contato__titulo'>Fique por dentro das novidades!</h2>
            <p className='contato__texto'>Atualizações de e-books, novos livros, promoções e outros.</p>
            <input type="email" className='contato__email' placeholder='Cadastre seu e-mail'/>
        </section>
    )
}
export default Contact