import Link from 'next/link';
import styled from 'styled-components';

function NavigationBar() {
  return (
    <NavBarWrapper>
      <Link href="/">
        <a className="navbar-brand">Tinder For Cats</a>
      </Link>
      <Link href="/favorites">
        <a className="nav-link">Favorites</a>
      </Link>
      <Link href="/breeds">
        <a className="nav-link">Breeds</a>
      </Link>
      <Link href="/search">
        <a className="nav-link">Search</a>
      </Link>
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  a.navbar-brand {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  a.nav-link {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default NavigationBar;
