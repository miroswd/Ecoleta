import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/logo.svg';
import LoginImg from '../../assets/log-in.svg';
import SearchImg from '../../assets/search.svg';

import { Container, Header, Content, SearchButton } from './styles';

const Welcome: React.FC = () => {
  return (
    <Container>
      <Header>
        <img src={LogoImg} alt="Logo" />

        <Link to="/">
          <img src={LoginImg} alt="LogIn" />
          Cadastre um ponto de coleta
        </Link>
      </Header>

      <Content>
        <h1>Seu marketplace de coleta de resíduos</h1>
        <p>
          Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
        </p>
        <SearchButton type="button">
          <span />
          <strong>Pesquisar pontos de coleta</strong>
        </SearchButton>
      </Content>
    </Container>
  );
};

export default Welcome;
