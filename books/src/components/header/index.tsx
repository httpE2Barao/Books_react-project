import './header.css'

const Header = () => {
    return (
    <>
        <header className="header header-mobile">
        <div className="container">
      
          <input type="checkbox" className="container__botao" id="menu"/>
          <label htmlFor="menu">
            <span className="menu-hamburger"></span>
          </label>
      
          <ul className="lista-menu">
            <li className="lista-menu__titulo">Categorias</li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">Programação</a>
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">Front-end</a>
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">Back-end</a>
            </li>
            <li className="lista-menu__item">
              <a href="#" className="lista-menu__link">Dados</a>
            </li>
          </ul>
      
          <img className="icone-main" src="./imagens/icone-main.svg" alt="Logo Books"/>
      
        </div>
        <div className="container">
            <a href="#"><img className="fav icone" src="./imagens/icone-favoritos.svg" alt="Meu Favoritos"/></a>
            <a href="#"><img className="icone" src="./imagens/icone-sacola.svg" alt="Minha Sacola"/></a>
            <a href="#"><img className="icone" src="./imagens/icone-perfil.svg" alt="Meu Perfil"/></a>
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
            <img src="./imagens/icone-sacola.svg" alt="Ícone sacola"/>
            <p>Minha sacola</p>
          </div>
          <div>
            <img src="./imagens/icone-perfil.svg" alt="Ícone perfil"/>
            <p>Meu perfil</p>
          </div>
        </div>
        </header>
    </>
    )
}
export default Header