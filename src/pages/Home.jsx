import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container'>
      <img src={logo} width={128} height={128} />
      <h1>Ooh Escolhedor!</h1>
      <h2>Entregue na mão do escolhedor e ele irá escolher para você</h2>
      <h4>
        Cansado de tomar decisões?
        <br />
        Não gosta de ser taxado como indeciso?
        <br />
        Fica frustado ao ter que escolher entre muitas opções?
        <br />
        Seus problemas acabaram, baixe agora Oh Escolhedor! e peça para ele escolher para você
      </h4>
      <a href='https://github.com/luismtns/OohEscolhedorApp/releases/latest' target='_blank'>
        Baixe a última versão do App
      </a>
      <br />
      <Link to='privacy-policy'>Privacy Policy</Link>
    </div>
  );
}

export default Home;
