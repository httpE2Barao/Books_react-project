import React from 'react';
import Banner from './components/banner';
import Header from './components/header';
import Carrousel from './components/carrousel';
import Card from './components/card';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Banner />
      <Carrousel 
        titulo='Destaques'
        src1='./imagens/livro-Liderança.svg' alt1='Livro sobre liderança em Design'
        src2='./imagens/livro-UX.svg' alt2='Livro sobre "User Experiênce" estratégico'
        src3='./imagens/livro-Guia Front-end.svg' alt3='Livro guia de Front end'
        src4='./imagens/livro-Acessibilidade.svg' alt4='Livro sobre acessibilidade na web'
        src5='./imagens/livro-ApacheKafka.svg' alt5='Livro sobre apache kafka e spring boot'
        src6='./imagens/livro-Portugol.svg' alt6='Livro sobre portugol'
      />
      <Card 
        titulo='Talvez você também se interesse por...'
        titulo2='Angular 11 e Firebase'
        texto='Construindo uma aplicação integrada com a plataforma do Google.'
        src='./imagens/img-angular.svg' alt='imagem do livro: Angular'
      />
      <Carrousel 
        titulo='Mais Vendidos'
        src1='./imagens/livro-Gestão.svg' alt1='Livro guia sobre gestão, startups e liderança'
        src2='./imagens/livro-Javascript assertivo.svg' alt2='Livro sobre teste e qualidade de código'
        src3='./imagens/livro-Metricas ageis.svg' alt3='Livro sobre rotinas de trabalho eficientes'
        src4='./imagens/livro-Gestao de produtos.svg' alt4='Livro sobre como aumentar as chances de sucesso do software'
        src5='./imagens/livro-Construct.svg' alt5='Livro sobre desenvolver um jogo multiplataforma'
        src6='./imagens/livro-Nodejs.svg' alt6='Livro sobre contruir API Rest com Node JS'
      />
      <Card 
        estrela="./imagens/icone-estrela.svg"
        showIcones={true}
        titulo='Autora do Mês'
        titulo2='Juliana Agarikov'
        texto='Analista de sistemas e escritora, Juliana é especialista em Front-End.'
        src='./imagens/img-autora.svg' alt='Imagem da autora Juliana Agarikov'
      />
    </div>
  );
}

export default App;
