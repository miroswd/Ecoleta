import styled from 'styled-components';
import { shade } from 'polished';
import SearchImg from '../../assets/search.svg';

import BackgroundHome from '../../assets/home-background.svg';

const color = {
  title: '#322153',
  primary: '#34cb79',
};

export const Container = styled.div`
  overflow: hidden;
  margin: 0 auto;
  width: 90%;
  max-width: 1100px;
  height: 100vh;
  background: url(${BackgroundHome}) no-repeat 18vw bottom;

  @media (max-width: 1200px) {
    background: none;
  }
`;

export const Header = styled.header`
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    color: ${color.title};

    img {
      width: 20px;
      height: 20px;
      margin-right: 16px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;

  max-width: 560px;

  h1 {
    font-size: 54px;
    color: ${color.title};
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 38px;
  }

  @media (max-width: 1200px) {
    align-items: center;
    text-align: center;
  }
`;

export const SearchButton = styled.button`
  margin-top: 48px;
  width: 100%;
  max-width: 360px;
  height: 72px;

  display: flex;
  align-items: center;

  border: 0;
  border-radius: 8px;
  background: ${color.primary};

  transition: background-color 0.2s;

  color: #fff;
  font-weight: 700;

  &:hover {
    background-color: ${shade(0.1, color.primary)};
  }

  strong {
    flex: 1;
    text-align: center;
  }

  span {
    width: 72px;
    height: 72px;
    border: 0;
    border-radius: 8px 0 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${shade(0.1, color.primary)};

    &::after {
      content: '';
      background-image: url(${SearchImg});
      width: 20px;
      height: 20px;
    }
  }
`;
