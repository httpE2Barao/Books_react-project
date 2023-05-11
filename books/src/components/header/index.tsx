import './header.css'

const Header = () => {
    return (
    <>
        <header className="header header-mobile">
        <div className="container">
      
          <input 
            type="checkbox"
            className="container__botao"
            id="menu"
          />
          <label htmlFor="menu">
            <span className="menu-hamburger"></span>
          </label>
      
          <ul className="lista-menu menu-mobile">
            <li className="lista-menu__titulo">
              Categorias
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">
                Programação</a>
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">
                Front-end</a>
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">
                Back-end</a>
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">
                Dados</a>
            </li>
          </ul>
      
          <img 
            className="icone-main"
            src="./imagens/icone-main.svg"
            alt="Logo Books"
          />
          <h1 className='container__titulo'>Books</h1>
        </div>

        <ul className='opcoes'>
          <input type="checkbox" id="opcoes__menu" className='opcoes__botao'/>
          
          <label htmlFor="opcoes__menu">
            <li className='opcoes__item'>Categorias</li>
          </label>

          <ul className="lista-menu">
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">
                Programação</a>
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">
                Front-end</a>
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">
                Back-end</a>
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">
                Dados</a>
            </li>
          </ul>

          <li className='opcoes__item'><a href="#" className='opcoes__link'>Favoritos</a></li>
          <li className='opcoes__item'><a href="#" className='opcoes__link'>Minha Estante</a></li>
        </ul>

        <div className="container">
            <a href="#">
              <img 
              className="fav icone" 
              src="./imagens/icone-favoritos.svg" 
              alt="Meu Favoritos"/>
            </a>
            <a href="#" className='container__link'>
              <img 
              className="icone sacola" 
              src="./imagens/icone-sacola.svg" 
              alt="Minha Sacola"/>
              <p className='container__texto'>Minha sacola</p>
            </a>
            <a href="#" className='container__link'>
              <img className="icone perfil" 
              src="./imagens/icone-perfil.svg" 
              alt="Meu Perfil"/>
              <p className='container__texto'>Meu perfil</p>
            </a>
        </div>
        </header>
      
        <header className="header header-desktop">
        <div className="containerEsquerda">
          <img src="./imagens/Logo-1.png" />
          <div>CATEGORIAS</div>
          <div>FAVORITOS</div>
          <div>MINHA ESTANTE</div>
        </div>
        <div className="containerDireita">
          <div>
            <img 
              src="./imagens/icone-sacola.svg" 
              alt="Ícone sacola"
            />
            <p>Minha sacola</p>
          </div>
          <div>
            <img 
              src="./imagens/icone-perfil.svg" 
              alt="Ícone perfil"
            />
            <p>Meu perfil</p>
          </div>
        </div>
        </header>
    </>
  )
}
export default Header