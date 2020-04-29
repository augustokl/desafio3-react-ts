import React from 'react';

import { useLocation } from 'react-router-dom';

import { Container, LinkRoute } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const location = useLocation();

  const checkSelected = (to: string): boolean => {
    if (to === location.pathname) {
      return true;
    }
    return false;
  };

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <LinkRoute selected={checkSelected('/')} to="/">
            Listagem
          </LinkRoute>
          <LinkRoute selected={checkSelected('/import')} to="/import">
            Importar
          </LinkRoute>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
