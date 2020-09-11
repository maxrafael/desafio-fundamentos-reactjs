import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

interface LinkHeader {
  label: string;
  to: string;
  activeOnlyWhenExact?: boolean;
}

const MenuLink: React.FC<LinkHeader> = ({
  label,
  to,
  activeOnlyWhenExact,
}: LinkHeader) => {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Link className={match ? 'active' : ''} to={to}>
      {label}
    </Link>
  );
};

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  return (
    <>
      <Container size={size}>
        <header>
          <img src={Logo} alt="GoFinances" />
          <nav>
            <MenuLink activeOnlyWhenExact to="/" label="Listagem" />
            <MenuLink to="/import" label="Importar" />
          </nav>
        </header>
      </Container>
    </>
  );
};

export default Header;
